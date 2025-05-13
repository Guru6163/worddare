import { getServerSession, Session } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { getRecentEmails } from "@/lib/gmail";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function GET() {
  interface ExtendedSession extends Session {
    accessToken?: string;
  }

  const session = (await getServerSession(authOptions)) as ExtendedSession;

  if (!session?.accessToken) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const emails = await getRecentEmails(session.accessToken as string);

    // Limit to avoid token/rate limits
    const limitedEmails = emails.slice(0, 5);

    const summaryPromises = limitedEmails.map((email) => {
      const prompt = `
You are an assistant that summarizes the email briefly.

Summarize this email clearly and concisely in 1-2 sentences.

Subject: ${email.subject}
Body: ${email.body || email.snippet}
`;

      return openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.5,
      });
    });

    const completions = await Promise.all(summaryPromises);

    const summaries = completions.map((completion) =>
      completion.choices[0].message.content?.trim() || ""
    );

    const finalSummary = summaries.join(", ");

    return Response.json({
      summary: finalSummary,
      emailCount: summaries.length,
      summaries,
    });

  } catch (err) {
    console.error("Email summarization failed:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
