import React from 'react';

const RefundPolicy = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Refund Policy</h1>
        <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-400">
          Last updated: June 2025
        </p>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Overview</h2>
            <p>
              At <strong>Mohit Decodes</strong>, we strive to offer high-quality content and resources. As most of our offerings are digital products, we follow a strict but fair refund policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Eligibility for Refunds</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Refunds are only applicable to purchases made directly from our website.</li>
              <li>You must submit your refund request within <strong>7 days</strong> of purchase.</li>
              <li>We may require a valid reason or explanation for your refund request.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Non-Refundable Items</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Downloadable products once accessed or downloaded.</li>
              <li>Completed mentorship sessions or consultations.</li>
              <li>Courses that have been more than 25% completed.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. How to Request a Refund</h2>
            <p>
              To request a refund, please contact us at{' '}
              <a href="mailto:hello@mohitdecodes.com" className="text-blue-600 dark:text-blue-400 underline">
                hello@mohitdecodes.com
              </a>{' '}
              with your order number and reason for the request. We typically respond within 2–3 business days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Refund Process</h2>
            <p>
              Once approved, refunds are processed to the original payment method. Depending on your bank or provider, it may take 5–10 business days for the funds to reflect.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Contact</h2>
            <p>
              If you have any questions regarding this policy, feel free to contact us at{' '}
              <a href="mailto:hello@mohitdecodes.com" className="text-blue-600 dark:text-blue-400 underline">
                hello@mohitdecodes.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
