import React from 'react';

const Terms = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>
        <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-400">
          Last updated: June 2025
        </p>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to <strong>Mohit Decodes</strong>. By accessing this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use this site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Intellectual Property</h2>
            <p>
              All content published on this site — including code, tutorials, videos, and graphics — is the intellectual property of Mohit Decodes, unless otherwise stated. You may not reproduce, distribute, or republish content without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. User Conduct</h2>
            <p>
              You agree to use this website only for lawful purposes. Any form of spamming, hacking, or distributing malware is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. External Links</h2>
            <p>
              Mohit Decodes may contain links to third-party websites. We are not responsible for the content, policies, or practices of any linked sites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Changes to Terms</h2>
            <p>
              These terms may be updated at any time without prior notice. It is your responsibility to check this page periodically for updates.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Disclaimer</h2>
            <p>
              All information provided on Mohit Decodes is for educational purposes only. We do not guarantee results or assume responsibility for your use of the content.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
            <p>
              For any questions regarding these terms, please contact us at <a href="mailto:hello@mohitdecodes.com" className="text-blue-600 dark:text-blue-400 underline">hello@mohitdecodes.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
