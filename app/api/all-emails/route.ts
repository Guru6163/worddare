import { getServerSession, Session } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { getRecentEmails } from "@/lib/gmail";

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
        try {
            const summaryData = emails

            return Response.json(summaryData);
        } catch (parseErr) {
            console.error("Couldn't able to fetch emails:", parseErr);
            return new Response("Couldn't able to fetch emails", { status: 502 });
        }
    } catch (err) {
        console.error("Couldn't able to fetch emails:", err);
        return new Response("Internal Server Error", { status: 500 });
    }
}
