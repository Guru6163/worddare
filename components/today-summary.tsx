"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, User, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Email = {
  id: string;
  subject: string;
  from: string;
  snippet: string;
  body: string;
};

export default function TodaySummary() {
  const [summary, setSummary] = useState<string | null>(null);
  const [emails, setEmails] = useState<Email[]>([]);
  const [expandedEmails, setExpandedEmails] = useState<string[]>([]);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [loadingEmails, setLoadingEmails] = useState(true);

  const toggleEmailExpand = (id: string) => {
    setExpandedEmails((prev) =>
      prev.includes(id)
        ? prev.filter((emailId) => emailId !== id)
        : [...prev, id]
    );
  };

  const isExpanded = (id: string) => expandedEmails.includes(id);

  const handleSummarize = async () => {
    setLoadingSummary(true);
    setSummary(null);

    try {
      const res = await fetch("/api/emails");
      if (!res.ok) throw new Error("Failed to fetch summary");

      const summaryData = await res.json();
      setSummary(summaryData.summary);
    } catch (error) {
      console.error("Error fetching summary:", error);
    } finally {
      setLoadingSummary(false);
    }
  };

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const res = await fetch("/api/all-emails");
        if (!res.ok) throw new Error("Failed to fetch emails");

        const data = await res.json();
        setEmails(data);
      } catch (error) {
        console.error("Error fetching emails:", error);
      } finally {
        setLoadingEmails(false);
      }
    };

    fetchEmails();
  }, []);

  return (
    <div>
      {/* Summarize Button */}
      <div className="mb-6 flex justify-between items-center">
        <CardTitle>📬 Today’s Email Summary</CardTitle>
        <Button onClick={handleSummarize} disabled={loadingSummary}>
          {loadingSummary ? (
            <span className="flex items-center gap-2">
              <Loader2 className="animate-spin h-4 w-4" />
              Summarizing...
            </span>
          ) : (
            "Summarize Emails"
          )}
        </Button>
      </div>

      {/* Summary Card */}
      <Card className="mb-6">
        <CardHeader>
          <CardDescription>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loadingSummary ? (
            <p className="text-sm text-gray-500">Loading summary...</p>
          ) : summary ? (
            <p className="text-sm text-gray-700 whitespace-pre-wrap">
              {summary}
            </p>
          ) : (
            <p className="text-sm text-gray-400">
              Click “Summarize Emails” to generate today's summary.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Emails List */}
      {loadingEmails ? (
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <Loader2 className="animate-spin h-4 w-4" />
          Loading emails...
        </div>
      ) : emails.length > 0 ? (
        <div className="space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto pr-2">
          {emails.map((email) => (
            <Card key={email.id} className="border border-gray-200">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-gray-400" />
                    <div>
                      <h3 className="font-medium text-gray-900">{email.from}</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <h4 className="font-medium text-gray-800">{email.subject}</h4>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {email.snippet}
                </p>

                {isExpanded(email.id) && (
                  <div
                    className="mt-4 p-3 bg-gray-50 rounded-md text-sm text-gray-700"
                    dangerouslySetInnerHTML={{ __html: email.body }}
                  />
                )}

                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 text-blue-600 hover:text-blue-800 p-0 h-auto font-normal"
                  onClick={() => toggleEmailExpand(email.id)}
                >
                  {isExpanded(email.id) ? (
                    <span className="flex items-center">
                      <ChevronUp className="h-4 w-4 mr-1" />
                      Hide Full Email
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <ChevronDown className="h-4 w-4 mr-1" />
                      View Full Email
                    </span>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400">No emails found.</p>
      )}
    </div>
  );
}
