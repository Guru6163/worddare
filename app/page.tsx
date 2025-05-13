import Link from "next/link"
import { ArrowRight, CheckCircle, Mail, Sparkles, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-500" />
            <span className="font-semibold text-gray-900">Email Summary Bot</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#features" className="text-sm text-gray-600 hover:text-blue-600">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-gray-600 hover:text-blue-600">
              How It Works
            </Link>
            <Link href="/login" className="text-sm text-gray-600 hover:text-blue-600">
              Dashboard
            </Link>
            <Button asChild size="sm">
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Never Miss Important Emails Again
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Get daily summaries of your most important emails, delivered when and how you want them. Save time and
                stay on top of your inbox.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="px-8">
                  <Link href="/dashboard">Try for Free</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#how-it-works" className="flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <h3 className="font-medium text-gray-900">Today's Summary</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Project Update - Q2 Goals",
                    "Team Lunch Invitation - Friday",
                    "New Marketing Campaign - Review Required",
                  ].map((subject, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-md">
                      <p className="text-sm font-medium text-gray-800">{subject}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {i === 0
                          ? "The team has completed 80% of Q2 goals..."
                          : i === 1
                            ? "Team lunch scheduled for Friday at 12:30 PM..."
                            : "New marketing campaign ready for review..."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our email summary bot is designed to save you time and keep you informed with the features you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "Smart Summaries",
                description: "AI-powered summaries that extract the most important information from your emails.",
              },
              {
                icon: Clock,
                title: "Scheduled Delivery",
                description: "Get your summaries delivered when you want them, daily, weekly, or on your schedule.",
              },
              {
                icon: Sparkles,
                title: "Custom Filters",
                description: "Choose which emails to summarize based on folders, labels, or senders.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started with Email Summary Bot is easy. Follow these simple steps:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Connect Your Email",
                description: "Securely connect your email account to our service.",
              },
              {
                step: "2",
                title: "Configure Settings",
                description: "Choose which emails to summarize and when to receive your summaries.",
              },
              {
                step: "3",
                title: "Get Summaries",
                description: "Receive concise summaries of your emails on your preferred schedule.",
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-blue-50 h-16 w-16 rounded-full flex items-center justify-center mb-4 text-blue-600 font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-100 -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/Benefits */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Users Love Us</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of professionals who save time with Email Summary Bot.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Save up to 1 hour per day by not reading every email",
              "Never miss important information buried in long threads",
              "Reduce email anxiety with organized summaries",
              "Stay on top of your inbox even when you're busy",
              "Customize summaries to fit your workflow",
              "Access your email history with powerful search",
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to take control of your inbox?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start using Email Summary Bot today and never miss an important email again.
            </p>
            <Button asChild size="lg" className="px-8">
              <Link href="/dashboard">Get Started for Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Sparkles className="h-5 w-5 text-blue-500" />
              <span className="font-semibold text-gray-900">Email Summary Bot</span>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Email Summary Bot. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
