"use client"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function History() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [month, setMonth] = useState<string>(new Date().toLocaleString("default", { month: "long" }))

  // Mock data for historical summaries
  const historicalData = [
    { date: "May 12, 2025", count: 12 },
    { date: "May 11, 2025", count: 8 },
    { date: "May 10, 2025", count: 15 },
    { date: "May 9, 2025", count: 10 },
    { date: "May 8, 2025", count: 7 },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Summary History</CardTitle>
          <CardDescription>View your past email summaries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium">Select Date</h3>
              <Select value={month} onValueChange={setMonth}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="January">January</SelectItem>
                  <SelectItem value="February">February</SelectItem>
                  <SelectItem value="March">March</SelectItem>
                  <SelectItem value="April">April</SelectItem>
                  <SelectItem value="May">May</SelectItem>
                  <SelectItem value="June">June</SelectItem>
                  <SelectItem value="July">July</SelectItem>
                  <SelectItem value="August">August</SelectItem>
                  <SelectItem value="September">September</SelectItem>
                  <SelectItem value="October">October</SelectItem>
                  <SelectItem value="November">November</SelectItem>
                  <SelectItem value="December">December</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Summaries</CardTitle>
          <CardDescription>Your most recent email summaries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {historicalData.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-medium">{item.date}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{item.count} emails</span>
                  <button className="text-xs text-blue-600 hover:text-blue-800">View</button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
