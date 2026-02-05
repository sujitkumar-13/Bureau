export default function DisclaimerPage() {
  return (
    <section className="bg-white text-gray-800 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Disclaimer
        </h1>

        <p className="text-gray-600 mb-6">
          The information provided on this website by{" "}
          <strong>Stock Bureau India</strong> is for general informational and
          educational purposes only. It should not be considered as investment
          advice, financial planning advice, or a recommendation to buy, sell,
          or hold any securities.
        </p>

        {/* No Investment Advice */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          No Investment Advice
        </h2>
        <p className="text-gray-600">
          Stock Bureau India does not provide guaranteed returns, assured
          profits, or risk-free investment solutions. All content, communication,
          and material shared through the website, calls, messages, or meetings
          is intended solely to help users understand market concepts and
          investment strategies.
        </p>

        {/* Market Risk */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Market Risk Disclosure
        </h2>
        <p className="text-gray-600">
          Investments in the stock market are subject to market risks, including
          the risk of loss of capital. Market fluctuations, economic conditions,
          political events, and global factors may affect investment performance.
        </p>
        <p className="text-gray-600 mt-2">
          Past performance of any security or strategy does not guarantee future
          results.
        </p>

        {/* User Responsibility */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          User Responsibility
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>All investment decisions are made at the user’s own discretion</li>
          <li>
            Stock Bureau India shall not be held responsible for any financial
            losses
          </li>
          <li>
            Users should evaluate their own risk profile before investing
          </li>
          <li>
            Independent professional advice may be sought if required
          </li>
        </ul>

        {/* Accuracy */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Accuracy of Information
        </h2>
        <p className="text-gray-600">
          While Stock Bureau India strives to provide accurate and updated
          information, we do not guarantee the completeness, reliability, or
          accuracy of any content. Information may change without prior notice.
        </p>

        {/* Third Party */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Third-Party Content & Links
        </h2>
        <p className="text-gray-600">
          This website may contain references or links to third-party websites.
          Stock Bureau India does not endorse or take responsibility for the
          content, accuracy, or privacy practices of such external sites.
        </p>

        {/* No Account Handling */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          No Client Account Handling
        </h2>
        <p className="text-gray-600">
          Stock Bureau India does not operate, manage, or execute trades in
          client demat or trading accounts. All transactions are carried out by
          clients through registered brokers at their own discretion.
        </p>

        {/* Limitation */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Limitation of Liability
        </h2>
        <p className="text-gray-600">
          Stock Bureau India shall not be liable for any direct or indirect
          financial losses, investment decisions based on shared information,
          technical issues, or service interruptions.
        </p>

        {/* Compliance */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Regulatory Compliance
        </h2>
        <p className="text-gray-600">
          Stock Bureau India operates in accordance with applicable Indian laws
          and regulatory guidelines.
        </p>

        {/* Consent */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Consent
        </h2>
        <p className="text-gray-600">
          By using this website and services, you acknowledge that you have read,
          understood, and agreed to this Disclaimer.
        </p>
      </div>
    </section>
  );
}
