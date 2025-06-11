import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-400">
          Last updated: June 2025
        </p>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Overview</h2>
            <p>
              At <strong>Mohit Decodes</strong>, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, and usage data when you interact with our content, sign up for newsletters, or contact us directly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To improve user experience and website performance</li>
              <li>To send occasional updates or newsletters</li>
              <li>To respond to inquiries or feedback</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Cookies & Tracking</h2>
            <p>
              We may use cookies and third-party analytics tools to understand user behavior. You can manage your cookie preferences through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your data. However, please note that no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Third-Party Links</h2>
            <p>
              Our site may contain links to other websites. We are not responsible for the privacy practices or content of those third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Children’s Privacy</h2>
            <p>
              We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data. To exercise these rights, email us at <a href="mailto:hello@mohitdecodes.com" className="text-blue-600 dark:text-blue-400 underline">hello@mohitdecodes.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will be posted on this page with a new effective date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
