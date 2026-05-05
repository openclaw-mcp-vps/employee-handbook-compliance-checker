export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR Compliance Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Is Your Employee Handbook<br />
          <span className="text-[#58a6ff]">Legally Compliant?</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload your handbook and get an instant AI-powered compliance report. Identify missing required clauses, outdated policies, and state-specific legal gaps before they become costly lawsuits.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-lg transition-colors duration-200"
        >
          Start Compliance Check — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Covers all 50 states.</p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📋</div>
            <h3 className="font-semibold text-white mb-2">Missing Clause Detection</h3>
            <p className="text-sm text-[#8b949e]">Instantly flags required policies your handbook is missing based on federal and state law.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🗺️</div>
            <h3 className="font-semibold text-white mb-2">State-Specific Requirements</h3>
            <p className="text-sm text-[#8b949e]">Checks compliance against all 50 states so multi-state employers stay protected everywhere.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📝</div>
            <h3 className="font-semibold text-white mb-2">Policy Templates</h3>
            <p className="text-sm text-[#8b949e]">Generate ready-to-use updated policy templates to fill every compliance gap found.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to stay compliant</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited handbook uploads",
              "Full 50-state compliance checks",
              "Detailed gap reports with citations",
              "AI-generated policy templates",
              "Email compliance alerts",
              "Priority support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What file formats are supported?</h3>
            <p className="text-sm text-[#8b949e]">We support PDF, DOCX, and plain text files. Most handbooks can be uploaded directly without any conversion.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How current is the compliance database?</h3>
            <p className="text-sm text-[#8b949e]">Our legal database is updated monthly to reflect new federal regulations and state law changes, so your reports always reflect the latest requirements.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is this a substitute for legal counsel?</h3>
            <p className="text-sm text-[#8b949e]">This tool helps HR teams identify compliance gaps quickly, but we recommend consulting an employment attorney for final review of critical policy changes.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} Handbook Compliance Checker. All rights reserved.
      </footer>
    </main>
  );
}
