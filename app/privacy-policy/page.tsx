// app/privacy-policy/page.tsx

export default function page() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Last updated: May 13, 2025</p>

      <p className="mb-4">
        Welcome to <strong>Worddare</strong>. Your privacy is important to us.
        This Privacy Policy explains how we collect, use, and protect your
        personal information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Email address (for login and Gmail access)</li>
        <li>Email metadata (subject, sender, snippet)</li>
        <li>Summaries generated using OpenAI</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your email data solely to generate daily summaries. We do not
        store or share your email contents beyond the current session.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Third-Party Services</h2>
      <p className="mb-4">
        Worddare uses Google APIs to access your Gmail and OpenAI to summarize
        emails. Your data is transmitted securely and is not used for any
        purpose other than summarization.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect your data but cannot guarantee
        100% security due to the nature of the internet.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You can disconnect Worddare from your Google account at any time. We do
        not retain your data after the session ends.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this policy, please contact us at
        support@worddare.com.
      </p>
    </div>
  );
}
