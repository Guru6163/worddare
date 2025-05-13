import { google } from "googleapis";

export async function getRecentEmails(accessToken: string) {
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });

  const gmail = google.gmail({ version: "v1", auth: oauth2Client });

  const response = await gmail.users.messages.list({
    userId: "me",
    q: "newer_than:1d",
    maxResults: 5,
  });

  const messages = response.data.messages || [];

  const fullMessages = await Promise.all(
    messages.map(async (msg) => {
      const full = await gmail.users.messages.get({
        userId: "me",
        id: msg.id!,
        format: "full",
      });

      const headers = full.data.payload?.headers || [];

      const subject = headers.find(h => h.name === "Subject")?.value || "(No Subject)";
      const from = headers.find(h => h.name === "From")?.value || "(Unknown Sender)";

      // Attempt to get the plain text body
      let body = "";

      const getBodyFromParts = (parts?: any[]): string => {
        if (!parts) return "";
        for (const part of parts) {
          if (part.mimeType === "text/plain" && part.body?.data) {
            return Buffer.from(part.body.data, "base64").toString("utf-8");
          }
          if (part.parts) {
            const result = getBodyFromParts(part.parts);
            if (result) return result;
          }
        }
        return "";
      };

      if (full.data.payload?.body?.data) {
        body = Buffer.from(full.data.payload.body.data, "base64").toString("utf-8");
      } else if (full.data.payload?.parts) {
        body = getBodyFromParts(full.data.payload.parts);
      }

      return {
        id: msg.id,
        subject,
        from,
        snippet: full.data.snippet,
        body: body || "(No content found)",
      };
    })
  );

  return fullMessages;
}
