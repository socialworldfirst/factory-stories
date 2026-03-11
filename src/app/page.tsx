import Header from "@/components/Header";
import Footer from "@/components/Footer";

const navItems = [
  { label: "The Series", href: "#series" },
  { label: "What You'll See", href: "#inside" },
  { label: "Why Different", href: "#different" },
  { label: "Season 1", href: "#season1" },
  { label: "Early Access", href: "#signup", highlight: true },
];

export default function Home() {
  return (
    <main>
      <Header navItems={navItems} />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-wf-text py-24 lg:py-36">
        {/* Subtle factory grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #fff 40px, #fff 41px),
                            repeating-linear-gradient(90deg, transparent, transparent 40px, #fff 40px, #fff 41px)`
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-wf-red font-medium text-sm tracking-widest uppercase mb-6">
            A Documentary Series by WorldFirst
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white max-w-4xl leading-[1.1] -tracking-tight">
            Inside China&apos;s{" "}
            <span className="text-wf-red">Source Factories</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">
            We go behind the gates of the factories your products actually come from.
            No middlemen. No showrooms. Just the raw truth of how things are made.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a href="#signup" className="btn-pill px-10 py-4 bg-wf-red text-white font-medium hover:bg-wf-red-hover text-center">
              Get Early Access
            </a>
            <a href="#series" className="btn-pill px-10 py-4 border border-white/20 text-white font-medium hover:border-white/40 text-center">
              Learn More
            </a>
          </div>
          {/* Episode tag */}
          <div className="mt-16 flex items-center gap-3 text-white/40 text-sm">
            <span className="w-2 h-2 rounded-full bg-wf-red animate-pulse" />
            Season 1 — 10 Episodes — 5 Factories Confirmed — Filming Q2 2026
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-wf-bg border-b border-wf-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">
            <div>
              <p className="text-4xl lg:text-5xl font-semibold text-wf-text -tracking-tight">92%</p>
              <p className="text-wf-text-muted text-sm mt-2 max-w-[200px] mx-auto">
                of importers have never stepped inside their supplier&apos;s factory
              </p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-semibold text-wf-text -tracking-tight">3+</p>
              <p className="text-wf-text-muted text-sm mt-2 max-w-[200px] mx-auto">
                middlemen between you and the actual manufacturer
              </p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-semibold text-wf-text -tracking-tight">0</p>
              <p className="text-wf-text-muted text-sm mt-2 max-w-[200px] mx-auto">
                transparency into how your products are really made
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE'RE BUILDING ─── */}
      <section id="series" className="bg-wf-bg-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-wf-text -tracking-tight">
              Real Factories. Real Stories.{" "}
              <span className="accent-word">No Middlemen.</span>
            </h2>
            <p className="text-wf-text-secondary mt-4 max-w-2xl mx-auto text-lg">
              Factory Stories takes you inside verified source manufacturers across China — the ones your products actually come from.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl border border-wf-border bg-white p-8 card-hover">
              <div className="w-12 h-12 rounded-xl bg-wf-red/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-wf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-wf-text mb-3">Full Access</h3>
              <p className="text-wf-text-secondary leading-relaxed">
                We go inside the production line. Every step, from raw material to finished product — filmed in full detail.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-wf-border bg-white p-8 card-hover">
              <div className="w-12 h-12 rounded-xl bg-wf-red/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-wf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-wf-text mb-3">The People Behind Your Products</h3>
              <p className="text-wf-text-secondary leading-relaxed">
                Meet the factory owners. Hear their 20-year stories. Understand who you&apos;re really buying from.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-wf-border bg-white p-8 card-hover">
              <div className="w-12 h-12 rounded-xl bg-wf-red/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-wf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-wf-text mb-3">Source Direct</h3>
              <p className="text-wf-text-secondary leading-relaxed">
                Every factory we feature is a verified source manufacturer — not a trading company, not a reseller, not a middleman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU'LL SEE — SPLIT FEATURES ─── */}
      <section id="inside" className="bg-wf-bg py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-wf-text -tracking-tight">
              What You&apos;ll See <span className="accent-word">Inside</span>
            </h2>
          </div>

          {/* Split 1 — Production Line */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-20">
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative group">
                <img src="./episodes/image2.jpg" alt="Inside an auto parts factory — CNC machining and quality inspection" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Filming Scheduled
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-wf-red font-medium text-sm tracking-widest uppercase mb-3">The Process</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-wf-text mb-4 -tracking-tight">
                Watch your products being made
              </h3>
              <p className="text-wf-text-secondary text-lg leading-relaxed">
                Step by step, from raw materials to packaging. See the machines, the quality checkpoints, the scale of operation.
                This is the footage that no product listing will ever show you.
              </p>
            </div>
          </div>

          {/* Split 2 — Craftsmanship (reversed) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16 mb-20">
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative group">
                <img src="./episodes/image3.jpg" alt="Silicone moulding production — precision manufacturing" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Filming Scheduled
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-wf-red font-medium text-sm tracking-widest uppercase mb-3">The Craft</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-wf-text mb-4 -tracking-tight">
                30 years of skill vs. day one
              </h3>
              <p className="text-wf-text-secondary text-lg leading-relaxed">
                See the difference real craftsmanship makes. The precision that comes from decades of practice.
                The quality gap between a master artisan and a machine — and why it matters for your product.
              </p>
            </div>
          </div>

          {/* Split 3 — The Story */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative group">
                <img src="./episodes/image1.jpg" alt="Factory floor visit — cycling apparel production" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Pre-Production
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-wf-red font-medium text-sm tracking-widest uppercase mb-3">The Story</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-wf-text mb-4 -tracking-tight">
                The stories no catalog tells you
              </h3>
              <p className="text-wf-text-secondary text-lg leading-relaxed">
                The founder who survived three market crashes and still ships to 40 countries.
                The second-generation factory owner who turned a family workshop into a global supplier.
                These are the people behind your products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY THIS IS DIFFERENT ─── */}
      <section id="different" className="bg-wf-bg-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-wf-text -tracking-tight">
              Why This Is <span className="accent-word">Different</span>
            </h2>
            <p className="text-wf-text-secondary mt-4 max-w-2xl mx-auto text-lg">
              This isn&apos;t marketing. It&apos;s access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Grid Card 1 */}
            <div className="rounded-2xl border border-wf-border bg-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-wf-text flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-wf-text">Not an Ad</h3>
              </div>
              <p className="text-wf-text-secondary leading-relaxed">
                We don&apos;t sell factory placements. We find the best source manufacturers and show you everything — the good and the real.
              </p>
            </div>

            {/* Grid Card 2 */}
            <div className="rounded-2xl border border-wf-border bg-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-wf-text flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-wf-text">Not a Showroom</h3>
              </div>
              <p className="text-wf-text-secondary leading-relaxed">
                Alibaba gives you a product page. We give you the entire factory floor — the machines, the people, the process.
              </p>
            </div>

            {/* Grid Card 3 */}
            <div className="rounded-2xl border border-wf-border bg-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-wf-text flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-wf-text">Not a Sourcing Agent</h3>
              </div>
              <p className="text-wf-text-secondary leading-relaxed">
                Agents take a cut. We connect you directly to the source. No commission, no markup, no hidden fees.
              </p>
            </div>

            {/* Grid Card 4 */}
            <div className="rounded-2xl border border-wf-border bg-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-wf-red flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-wf-text">Verified by WorldFirst</h3>
              </div>
              <p className="text-wf-text-secondary leading-relaxed">
                Every featured factory is payment-verified through WorldFirst&apos;s global network. Real businesses, real track records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEASON 1 PREVIEW ─── */}
      <section id="season1" className="bg-wf-text py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-wf-red font-medium text-sm tracking-widest uppercase mb-4">Coming Q3 2026</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white -tracking-tight">
              Season 1: 10 Factories. 10 Stories.
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto text-lg">
              Our crew is heading into China&apos;s manufacturing heartland. Here&apos;s what we&apos;re filming.
            </p>
          </div>

          {/* Featured Episodes — photo cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {[
              { num: "01", category: "Cycling Apparel", region: "Guangzhou", image: "./episodes/image1.jpg", status: "in-production", desc: "From lycra rolls to race-ready kits — inside one of South China\u2019s biggest cycling gear factories." },
              { num: "02", category: "Auto & Motorcycle Parts", region: "Chongqing", image: "./episodes/image2.jpg", status: "in-production", desc: "CNC precision at scale. A 20-year family operation stamping parts for 40+ countries." },
              { num: "03", category: "Silicone Intimates", region: "Dongguan", image: "./episodes/image3.jpg", status: "in-production", desc: "The factory behind a product most people never think about being manufactured." },
              { num: "04", category: "Custom Apparel (POD)", region: "Guangzhou", image: "./episodes/image4.jpg", status: "in-production", desc: "Print-on-demand at industrial speed. 10,000 custom pieces shipped per day." },
              { num: "05", category: "Art & Craft Kits", region: "Xiamen", image: "./episodes/image5.jpg", status: "in-production", desc: "Where digital oil paintings go from pixel to canvas — and ship to 60 countries." },
              { num: "06", category: "Consumer Electronics", region: "Shenzhen", image: null, status: "scouting", desc: "Shenzhen\u2019s hardware strip. PCBs, injection moulds, and the speed of Huaqiangbei." },
            ].map((ep) => (
              <a key={ep.num} href="#signup" className="group relative rounded-2xl overflow-hidden aspect-[4/3] block episode-card">
                {ep.image ? (
                  <img src={ep.image} alt={ep.category} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-sm text-[11px] font-medium ${
                    ep.status === "in-production"
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-amber-500/20 text-amber-300"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                      ep.status === "in-production" ? "bg-emerald-400" : "bg-amber-400"
                    }`} />
                    {ep.status === "in-production" ? "In Production" : "Scouting"}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-white/30 text-2xl font-semibold">{ep.num}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-base">{ep.category}</p>
                  <p className="text-white/50 text-xs mt-0.5">{ep.region}</p>
                  <p className="text-white/60 text-xs mt-2 leading-relaxed line-clamp-2">{ep.desc}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Remaining episodes — compact row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { num: "07", category: "Home & Kitchen", region: "Yiwu", status: "scouting" },
              { num: "08", category: "LED & Lighting", region: "Zhongshan", status: "scouting" },
              { num: "09", category: "Beauty & Personal Care", region: "Guangzhou", status: "scouting" },
              { num: "10", category: "TBA", region: "To Be Announced", status: "tba" },
            ].map((ep) => (
              <div key={ep.num} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-2xl font-semibold text-white/15 mb-1.5">{ep.num}</p>
                <p className="text-sm font-medium text-white/70">{ep.category}</p>
                <p className="text-xs text-white/40 mt-0.5">{ep.region}</p>
                {ep.status !== "tba" && (
                  <span className="inline-flex items-center gap-1 mt-2 text-[10px] text-amber-300/70">
                    <span className="w-1 h-1 rounded-full bg-amber-400/60" />
                    Scouting
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-white/30 text-sm mt-10">
            5 factories confirmed. Filming begins Q2 2026 post-Canton Fair.
          </p>
        </div>
      </section>

      {/* ─── CTA — EMAIL SIGNUP ─── */}
      <section id="signup" className="bg-wf-text py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white -tracking-tight">
            Be First Inside the Factory
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-xl mx-auto">
            Get notified when new episodes drop. Plus exclusive sourcing insights you won&apos;t find anywhere else.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your work email"
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-wf-red text-sm"
            />
            <button className="btn-pill px-8 py-3.5 bg-wf-red text-white font-medium hover:bg-wf-red-hover whitespace-nowrap">
              Get Early Access
            </button>
          </div>
          <p className="text-white/30 text-xs mt-4">
            No spam. Unsubscribe anytime. We respect your inbox.
          </p>
        </div>
      </section>

      {/* ─── ABOUT WORLDFIRST ─── */}
      <section className="bg-wf-bg py-14 lg:py-20 border-b border-wf-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="https://mdn.marmot-cloud.com/worldfirst/sites/15/2026/02/20260209154944733.webp"
            alt="WorldFirst"
            className="h-6 w-auto mx-auto mb-6"
          />
          <p className="text-wf-text-secondary leading-relaxed">
            WorldFirst helps businesses move money across borders — processing billions annually for importers, exporters, and e-commerce sellers in 200+ markets.
          </p>
          <p className="text-wf-text font-medium mt-4">
            Factory Stories is our way of giving source factories the global voice they deserve.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
