export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Automated Health Inspection Monitoring
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Never Miss a Health Grade Change Again
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Automatically track restaurant health inspection grades, get instant alerts when scores change, and monitor competitor violations — all in one place.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Monitoring — $9/mo
        </a>
        <div className="mt-6 flex justify-center gap-8 text-sm text-[#8b949e]">
          <span>✓ Automated scraping</span>
          <span>✓ Email &amp; SMS alerts</span>
          <span>✓ Competitor tracking</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff]/40 rounded-xl p-8 bg-[#161b22] max-w-sm mx-auto">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-4xl font-bold text-white mb-1">$9<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay compliant and ahead of the competition.</p>
          <ul className="space-y-3 mb-8 text-sm">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Monitor up to 10 restaurants</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Instant grade change alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email &amp; SMS notifications</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Competitor violation tracking</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Inspection history &amp; trends</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Daily digest reports</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the monitoring work?</h3>
            <p className="text-[#8b949e] text-sm">We automatically query health department APIs and websites on a daily schedule. When a new inspection result is posted or a grade changes, you receive an immediate email and/or SMS alert.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which cities and counties are supported?</h3>
            <p className="text-[#8b949e] text-sm">We currently support major US metro areas including New York, Los Angeles, Chicago, Houston, and Miami. New regions are added regularly — contact us if your area isn't listed yet.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your account dashboard with no questions asked. Your subscription remains active until the end of the billing period.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} Restaurant Health Grade Tracker. All rights reserved.</p>
      </footer>
    </main>
  )
}
