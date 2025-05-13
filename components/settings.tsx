"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Folder, Sliders, Bell } from "lucide-react"

export default function Settings() {
  const [slackNotifications, setSlackNotifications] = useState(false)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Bot Settings</CardTitle>
          <CardDescription>Configure how your email summaries are delivered</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="delivery">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="delivery" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="hidden sm:inline">Delivery</span>
              </TabsTrigger>
              <TabsTrigger value="folders" className="flex items-center gap-2">
                <Folder className="h-4 w-4" />
                <span className="hidden sm:inline">Folders</span>
              </TabsTrigger>
              <TabsTrigger value="summary" className="flex items-center gap-2">
                <Sliders className="h-4 w-4" />
                <span className="hidden sm:inline">Summary</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="delivery" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="delivery-time">Delivery Time</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Select defaultValue="9">
                    <SelectTrigger id="delivery-time">
                      <SelectValue placeholder="Hour" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }, (_, i) => (
                        <SelectItem key={i} value={i.toString()}>
                          {i.toString().padStart(2, "0")}:00
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue placeholder="Frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekdays">Weekdays only</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="utc-8">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                    <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                    <SelectItem value="utc+0">UTC</SelectItem>
                    <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                    <SelectItem value="utc+8">China Standard Time (UTC+8)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="folders" className="space-y-4">
              <div className="space-y-2">
                <Label>Email Folders to Summarize</Label>
                <div className="grid gap-2">
                  {["Inbox", "Work", "Personal", "Updates", "Promotions"].map((folder) => (
                    <div key={folder} className="flex items-center space-x-2">
                      <Checkbox id={`folder-${folder.toLowerCase()}`} defaultChecked={folder === "Inbox"} />
                      <Label htmlFor={`folder-${folder.toLowerCase()}`}>{folder}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <Label htmlFor="custom-folder">Add Custom Folder</Label>
                <div className="flex gap-2">
                  <Input id="custom-folder" placeholder="Enter folder name" />
                  <Button variant="outline">Add</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="summary" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="summary-length">Summary Length</Label>
                <Select defaultValue="medium">
                  <SelectTrigger id="summary-length">
                    <SelectValue placeholder="Select length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short (1-2 sentences)</SelectItem>
                    <SelectItem value="medium">Medium (3-4 sentences)</SelectItem>
                    <SelectItem value="long">Long (5+ sentences)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Summary Style</Label>
                <div className="grid gap-2">
                  {[
                    { id: "bullet", label: "Bullet Points" },
                    { id: "paragraph", label: "Paragraph" },
                    { id: "highlights", label: "Key Highlights" },
                  ].map((style) => (
                    <div key={style.id} className="flex items-center space-x-2">
                      <Checkbox id={`style-${style.id}`} defaultChecked={style.id === "paragraph"} />
                      <Label htmlFor={`style-${style.id}`}>{style.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Include in Summary</Label>
                <div className="grid gap-2">
                  {[
                    { id: "attachments", label: "Mention Attachments" },
                    { id: "links", label: "Include Links" },
                    { id: "dates", label: "Highlight Dates & Deadlines" },
                  ].map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox id={`include-${option.id}`} defaultChecked />
                      <Label htmlFor={`include-${option.id}`}>{option.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="slack-notifications">Slack Notifications</Label>
                  <p className="text-sm text-gray-500">Receive summaries in Slack</p>
                </div>
                <Switch id="slack-notifications" checked={slackNotifications} onCheckedChange={setSlackNotifications} />
              </div>

              {slackNotifications && (
                <div className="space-y-2 pt-2">
                  <Label htmlFor="slack-webhook">Slack Webhook URL</Label>
                  <Input id="slack-webhook" placeholder="https://hooks.slack.com/services/..." />
                  <p className="text-xs text-gray-500 mt-1">Enter your Slack webhook URL to receive notifications</p>
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-gray-500">Receive summaries via email</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <Label htmlFor="browser-notifications">Browser Notifications</Label>
                  <p className="text-sm text-gray-500">Receive browser notifications</p>
                </div>
                <Switch id="browser-notifications" />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end mt-6">
            <Button>Save Settings</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
