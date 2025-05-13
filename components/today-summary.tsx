"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock data for email summaries
const emailSummaries = [
  {
    id: 1,
    sender: "John Doe",
    email: "john.doe@example.com",
    subject: "Project Update - Q2 Goals",
    summary:
      "The team has completed 80% of Q2 goals. We're on track to finish the remaining tasks by the end of the month.",
    fullContent:
      "Dear Team,\n\nI'm pleased to report that we've made significant progress on our Q2 goals. As of today, we've completed 80% of our planned tasks, which puts us ahead of schedule. The development team has successfully implemented the new features, and the QA team has completed initial testing.\n\nWe're on track to finish the remaining tasks by the end of the month, which will give us a head start on our Q3 objectives. I'd like to schedule a team meeting next week to discuss our progress and plan for the upcoming quarter.\n\nBest regards,\nJohn",
    time: "9:32 AM",
    date: "Today",
    labels: ["Work", "Important"],
  },
  {
    id: 2,
    sender: "Jane Smith",
    email: "jane.smith@example.com",
    subject: "Invitation: Team Lunch - Friday",
    summary: "Team lunch scheduled for Friday at 12:30 PM at Italian Restaurant. Please RSVP by Thursday.",
    fullContent:
      "Hi everyone,\n\nI'd like to invite you all to a team lunch this Friday at 12:30 PM. We'll be going to the Italian Restaurant downtown.\n\nThis will be a great opportunity for us to relax and get to know each other better outside of work. Please let me know if you can make it by Thursday so I can confirm our reservation.\n\nLooking forward to seeing you all there!\n\nBest,\nJane",
    time: "10:15 AM",
    date: "Today",
    labels: ["Social"],
  },
  {
    id: 3,
    sender: "Marketing Team",
    email: "marketing@example.com",
    subject: "New Campaign Launch - Review Required",
    summary: "New marketing campaign ready for review. Please provide feedback by tomorrow EOD.",
    fullContent:
      "Hello,\n\nThe new marketing campaign materials are ready for your review. We've prepared the social media posts, email templates, and landing page designs as discussed in our last meeting.\n\nPlease take some time to review these materials and provide your feedback by tomorrow end of day. We're planning to launch the campaign next Monday, so your timely input is crucial.\n\nYou can find all the materials in the shared folder: [link]\n\nThank you,\nMarketing Team",
    time: "11:45 AM",
    date: "Today",
    labels: ["Work", "Urgent"],
  },
  {
    id: 4,
    sender: "HR Department",
    email: "hr@example.com",
    subject: "Reminder: Benefits Enrollment Deadline",
    summary: "Annual benefits enrollment period ends this Friday. Please complete your selections.",
    fullContent:
      "Dear Employees,\n\nThis is a friendly reminder that the annual benefits enrollment period ends this Friday. If you haven't already done so, please log in to the HR portal and complete your benefit selections for the upcoming year.\n\nIf you need any assistance with the enrollment process, please don't hesitate to contact the HR department.\n\nThank you,\nHR Department",
    time: "1:20 PM",
    date: "Today",
    labels: ["HR", "Important"],
  },
  {
    id: 5,
    sender: "Tech Support",
    email: "support@example.com",
    subject: "System Maintenance Notice",
    summary: "Scheduled system maintenance this Saturday from 10 PM to 2 AM. Services may be unavailable.",
    fullContent:
      "Dear Users,\n\nWe will be performing scheduled system maintenance this Saturday from 10 PM to 2 AM. During this time, some services may be unavailable.\n\nWe apologize for any inconvenience this may cause and appreciate your understanding as we work to improve our systems.\n\nBest regards,\nTech Support Team",
    time: "2:30 PM",
    date: "Today",
    labels: ["System"],
  },
]

export default function TodaySummary() {
  const [expandedEmails, setExpandedEmails] = useState<number[]>([])

  const toggleEmailExpand = (id: number) => {
    setExpandedEmails((prev) => (prev.includes(id) ? prev.filter((emailId) => emailId !== id) : [...prev, id]))
  }

  const isExpanded = (id: number) => expandedEmails.includes(id)

  return (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Today's Email Summary</CardTitle>
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
          <p className="text-sm text-gray-600">You have {emailSummaries.length} emails summarized today.</p>
        </CardContent>
      </Card>

      <div className="space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto pr-2">
        {emailSummaries.map((email) => (
          <Card key={email.id} className="border border-gray-200">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-gray-400" />
                  <div>
                    <h3 className="font-medium text-gray-900">{email.sender}</h3>
                    <p className="text-xs text-gray-500">{email.email}</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500">{email.time}</div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <h4 className="font-medium text-gray-800">{email.subject}</h4>
                <div className="flex gap-1">
                  {email.labels.map((label) => (
                    <Badge key={label} variant="outline" className="text-xs">
                      {label}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-2">{email.summary}</p>

              {isExpanded(email.id) && (
                <div className="mt-4 p-3 bg-gray-50 rounded-md text-sm text-gray-700 whitespace-pre-line">
                  {email.fullContent}
                </div>
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
    </div>
  )
}
