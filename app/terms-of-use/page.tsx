// app/terms-of-use/page.tsx

export default function page() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
      <p className="mb-4">Last updated: May 13, 2025</p>

      <p className="mb-4">
        By using <strong>Worddare</strong>, you agree to these Terms of Use.
        Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of the Service</h2>
      <p className="mb-4">
        Worddare provides summaries of your recent emails using OpenAI. You must
        be at least 13 years old and have permission to access your Gmail
        account.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Account and Access</h2>
      <p className="mb-4">
        You grant us temporary read-only access to your Gmail account through
        Google's secure OAuth flow. We do not store or save your emails.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Acceptable Use</h2>
      <p className="mb-4">
        You agree not to misuse the service, reverse engineer it, or use it to
        harm others or violate laws.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
      <p className="mb-4">
        All rights to the Worddare brand, interface, and design belong to the
        creators of Worddare. You may not reproduce or copy without permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend access to Worddare if you violate these
        terms or engage in misuse.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Disclaimer</h2>
      <p className="mb-4">
        Worddare is provided “as is” with no guarantees of accuracy, availability, or
        suitability for any particular purpose.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p className="mb-4">
        For questions or concerns, reach out to support@worddare.com.
      </p>
    </div>
  );
}
