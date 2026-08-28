import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Download,
  Gauge,
  KeyRound,
  LifeBuoy,
  Lock,
  MoveRight,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { SignalCanvas } from "@/components/site/SignalCanvas";
import { PLANS } from "@/lib/plans";
import { cn } from "@/lib/utils";
import heroSlab from "@/assets/hero-slab.jpg";
import ribbon from "@/assets/ribbon.jpg";
import fibre from "@/assets/fibre.jpg";

const HANDBOOK_URL = "/Orchestrating_Digital_Worlds.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naga Host Hosting — Fast cPanel Hosting, Live in 60 Seconds" },
      {
        name: "description",
        content:
          "Premium NVMe cPanel hosting for studios and stores. Free migration, daily backups, 24/7 humans. Pay once and your full cPanel login lands in your inbox.",
      },
      { property: "og:title", content: "Naga Host Hosting — Fast cPanel Hosting" },
      {
        property: "og:description",
        content:
          "Premium NVMe cPanel hosting. Free migration, daily backups, 24/7 humans, and your full cPanel login the moment payment clears.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const LOGOS = [
  "NORTHFIELD",
  "STUDIO OAKLEY",
  "PARQUET",
  "MERIDIAN&CO",
  "BLUEHOUSE",
  "AVERY LABS",
  "TIDE",
  "KILN",
];

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="bg-spectrum h-7 w-7 rounded-lg" />
          <span className="font-display text-lg font-bold tracking-tight">NagaVision Hosting</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#plans" className="transition-colors hover:text-foreground">
            Plans
          </a>
          <a href="#compare" className="transition-colors hover:text-foreground">
            Compare
          </a>
          <a href="#handover" className="transition-colors hover:text-foreground">
            How it works
          </a>
          <a href="#reality-sprint" className="transition-colors hover:text-foreground">
            Reality Sprint
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            FAQ
          </a>
        </nav>
        <Link
          to="/checkout"
          search={{ plan: "studio" }}
          className="bg-spectrum inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-flame-foreground shadow-lift transition-transform hover:scale-[1.03]"
        >
          Get hosting <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="bg-spectrum pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[70rem] -translate-x-1/2 rounded-full opacity-[0.18] blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8 sm:pt-24">
        <div
          aria-hidden
          className="hero-vector pointer-events-none absolute inset-0 overflow-hidden"
        >
          <svg
            viewBox="0 0 900 520"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="hero-path"
              d="M410 440C490 370 420 280 520 230C620 180 700 250 790 110"
            />
            <path
              className="hero-path hero-path-secondary"
              d="M500 490C585 410 520 330 630 270C720 220 790 250 860 170"
            />
            <circle className="hero-orbit" cx="600" cy="245" r="118" />
            <circle className="hero-node hero-node-one" cx="520" cy="230" r="8" />
            <circle className="hero-node hero-node-two" cx="790" cy="110" r="6" />
            <circle className="hero-node hero-node-three" cx="630" cy="270" r="5" />
          </svg>
        </div>
        <SignalCanvas className="signal-canvas-hero" />
        <Reveal className="relative z-10 max-w-4xl">
          <h1 className="mt-7 text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] font-extrabold">
            Hosting built for
            <br />
            <span className="text-spectrum">founders, creators</span>
            <br />
            &amp; businesses.
          </h1>
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <Reveal delay={120}>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Choose your plan, pay securely, and get full cPanel access by email. You control your
              files, your data, and your self-hosted WordPress site.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/checkout"
                search={{ plan: "studio" }}
                className="bg-spectrum group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold text-flame-foreground shadow-float transition-transform hover:scale-[1.02]"
              >
                Choose your plan
                <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#plans"
                className="text-sm font-semibold text-muted-foreground underline-offset-8 transition-colors hover:text-foreground hover:underline"
              >
                See the three packages
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-7">
              {[
                ["99.99%", "uptime, 12-mo rolling"],
                ["189 ms", "median TTFB, UK"],
                ["< 60 s", "to cPanel handover"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-display text-2xl font-bold sm:text-3xl">{k}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={220} className="relative">
            <div className="hero-image group relative overflow-hidden rounded-[2rem] bg-sand shadow-float">
              <img
                src={heroSlab}
                alt="Illuminated NVMe server slab floating in a bright studio"
                width={1600}
                height={1200}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />
            </div>
            <div className="floaty absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-card/90 px-5 py-4 shadow-lift backdrop-blur-md sm:-left-10">
              <KeyRound className="h-5 w-5 text-flame" />
              <div>
                <p className="text-sm font-semibold">cPanel credentials sent</p>
                <p className="text-xs text-muted-foreground">
                  Account ready · credentials by email
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <Marquee />
    </section>
  );
}

function HandbookBanner() {
  return (
    <section className="px-5 pb-16 sm:px-8 sm:pb-24">
      <Reveal>
        <div className="handbook-banner relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-foreground px-6 py-12 text-center text-background shadow-float sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="handbook-grid pointer-events-none absolute inset-0 opacity-40"
          />
          <div
            aria-hidden
            className="handbook-glow pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-spectrum opacity-30 blur-3xl"
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.28em] text-background/60 uppercase">
              Free handbook
            </p>
            <h2 className="mt-5 text-[clamp(2.25rem,6vw,4.75rem)] leading-[0.96] font-extrabold">
              The Vibecoders Handbook
            </h2>
            <p className="mt-4 text-xl font-semibold text-spectrum sm:text-2xl">
              Orchestrating Digital Worlds
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
              A practical guide to turning ideas, tools, and AI into digital experiences people can
              use.
            </p>
            <a
              href={HANDBOOK_URL}
              download="The_Vibecoders_Handbook_Orchestrating_Digital_Worlds.pdf"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-background px-6 py-3.5 text-sm font-bold text-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Download the free PDF
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Marquee() {
  return (
    <div className="mt-14 overflow-hidden border-y border-border/60 py-6">
      <div className="marquee-track flex w-max gap-14 pr-14">
        {[...LOGOS, ...LOGOS].map((l, i) => (
          <span
            key={`${l}-${i}`}
            className="font-display text-sm font-semibold tracking-[0.28em] text-muted-foreground/60"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

function Benefits() {
  const items = [
    {
      icon: KeyRound,
      title: "Full cPanel access",
      body: "Manage your hosting account, domains, email, databases, files, and backups from one familiar control panel.",
    },
    {
      icon: Lock,
      title: "Your files and data",
      body: "Your site stays under your control. Use File Manager, FTP, SSH, cron, and phpMyAdmin where your plan supports them.",
    },
    {
      icon: Zap,
      title: "One-click installs",
      body: "Install WordPress and other supported applications without building the setup from scratch.",
    },
    {
      icon: ShieldCheck,
      title: "Email, backups, and SSL",
      body: "Professional email allowances, automated backups, and SSL are included according to the package you choose.",
    },
    {
      icon: Sparkles,
      title: "NagaVision tools",
      body: "Hosting customers get access to upcoming NagaVision AI tools and web apps at no extra charge.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="max-w-3xl">
        <h2 className="text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] font-bold">
          Everything the cheap hosts charge extra for,{" "}
          <span className="text-spectrum">standard.</span>
        </h2>
        <p className="mt-5 text-lg font-semibold text-muted-foreground sm:text-xl">
          Simple hosting. <span className="text-foreground">Full control.</span>
        </p>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 90}>
            <article className="group h-full rounded-[1.75rem] border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-lift sm:p-10">
              <it.icon className="h-7 w-7 text-flame" />
              <h3 className="mt-6 text-2xl font-bold">{it.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{it.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Infrastructure() {
  const rows: [string, string, string][] = [
    ["Full cPanel account", "Included", "Often restricted"],
    ["Storage", "NVMe", "Shared / capped"],
    ["Migration", "Included", "DIY or extra fee"],
    ["Backups", "Daily → hourly", "Weekly / paid restore"],
    ["SSL", "Included and renewed", "May renew separately"],
    ["Renewal", "Same price", "Intro rate may rise"],
  ];
  return (
    <section id="compare" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">
            The infrastructure behind your site
          </p>
          <h2 className="mt-5 text-[clamp(2.3rem,6vw,5rem)] leading-[0.98] font-extrabold">
            London, Manchester, and <span className="text-spectrum">34 edge cities</span> in
            between.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            UK NVMe hosting with full cPanel access, practical migration help, and the tools to keep
            control of your files, data, and WordPress site.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold text-foreground">
            {["UK NVMe", "10 Gbit uplinks", "Full cPanel", "Free migration"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-background px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal
          delay={120}
          className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] bg-card shadow-float"
        >
          <div className="grid grid-cols-[1.35fr_1fr_1fr] gap-4 border-b border-border px-5 py-4 text-[0.68rem] font-bold tracking-[0.14em] uppercase sm:px-8">
            <span className="text-muted-foreground">What you get</span>
            <span className="text-spectrum">Naga Host</span>
            <span className="text-muted-foreground">Typical host</span>
          </div>
          {rows.map(([label, ours, theirs]) => (
            <div
              key={label}
              className="grid grid-cols-[1.35fr_1fr_1fr] items-start gap-4 border-b border-border/60 px-5 py-4 text-sm last:border-0 sm:px-8"
            >
              <span className="font-semibold">{label}</span>
              <span>{ours}</span>
              <span className="text-muted-foreground">{theirs}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(false);
  return (
    <section id="plans" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">
            Packages
          </p>
          <h2 className="mt-5 text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] font-bold">
            Three sizes. One <span className="text-spectrum">very good</span> platform.
          </h2>
        </div>
        <div className="inline-flex shrink-0 items-center rounded-full border border-border bg-card p-1 text-sm font-semibold">
          {[
            ["Monthly", false],
            ["Annual · save 20%", true],
          ].map(([label, val]) => (
            <button
              key={String(label)}
              onClick={() => setAnnual(val as boolean)}
              className={cn(
                "rounded-full px-5 py-2 transition-all",
                annual === val
                  ? "bg-spectrum text-flame-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.id} delay={i * 100}>
            <article
              className={cn(
                "relative flex h-full flex-col rounded-[1.75rem] border p-8 transition-all hover:-translate-y-1 sm:p-10",
                plan.highlight
                  ? "border-transparent bg-card shadow-float ring-2 ring-flame/40"
                  : "border-border bg-card hover:shadow-lift",
              )}
            >
              {plan.highlight && (
                <span className="bg-spectrum absolute -top-3 left-8 rounded-full px-3 py-1 text-[0.7rem] font-bold tracking-[0.12em] text-flame-foreground uppercase">
                  Most chosen
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>
              <div className="mt-8 flex items-end gap-1.5">
                <span className="font-display text-5xl font-extrabold tracking-tight">
                  £{(annual ? plan.annual : plan.monthly).toFixed(2)}
                </span>
                <span className="pb-2 text-sm text-muted-foreground">/mo</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {annual ? "billed yearly · 30-day refund" : "billed monthly · cancel anytime"}
              </p>
              <dl className="mt-7 grid grid-cols-3 gap-3 rounded-2xl bg-sand p-4">
                {plan.specs.map((s) => (
                  <div key={s.label}>
                    <dt className="text-[0.68rem] leading-tight text-muted-foreground">
                      {s.label}
                    </dt>
                    <dd className="mt-1 text-sm font-bold">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-7 flex-1 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/checkout"
                search={{ plan: plan.id }}
                className={cn(
                  "mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]",
                  plan.highlight
                    ? "bg-spectrum text-flame-foreground shadow-lift"
                    : "border border-foreground/15 bg-foreground text-background",
                )}
              >
                Choose {plan.name} <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Handover() {
  const steps = [
    {
      n: "01",
      t: "Pick your package",
      b: "Monthly or annual. Add a domain, or point one you already own — both take a minute.",
    },
    {
      n: "02",
      t: "Pay securely",
      b: "Card, Apple Pay or Google Pay through an encrypted checkout. No setup fee, ever.",
    },
    {
      n: "03",
      t: "Your cPanel account is created",
      b: "Provisioning fires the moment payment clears: account, SSL, mailboxes, PHP stack.",
    },
    {
      n: "04",
      t: "Credentials land in your inbox",
      b: "Server hostname, cPanel URL, username and a one-time password you set on first login. Full access, no gatekeeping.",
    },
  ];
  return (
    <section id="handover" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">
            After payment
          </p>
          <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.03] font-bold">
            You get the whole <span className="text-spectrum">cPanel</span>, not a watered-down
            panel.
          </h2>
          <ol className="mt-10 space-y-8">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 80}>
                <div className="flex gap-5">
                  <span className="font-display text-sm font-bold text-flame">{s.n}</span>
                  <div>
                    <h3 className="text-xl font-bold">{s.t}</h3>
                    <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">{s.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={140}>
          <figure className="overflow-hidden rounded-[2rem] bg-sand shadow-float">
            <img
              src={ribbon}
              alt="Glossy gradient ribbon sculpture in coral, magenta and blue"
              loading="lazy"
              width={1408}
              height={1408}
              className="h-full w-full object-cover"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function RealitySprint() {
  const offers = [
    {
      label: "01 · The Reality Sprint",
      title: "Define reality.",
      price: "30 days / £5,000",
      body: "Strategic clarity, creative direction, and technology for founders who need an idea turned into something people can see, touch and believe in.",
      items: [
        "Strategy session",
        "Creative & brand direction",
        "Commercial & funding strategy",
        "Working website, MVP or AI prototype",
      ],
    },
    {
      label: "02 · The Launchpad",
      title: "Idea → market ready.",
      price: "£5,000–£10,000+",
      body: "For founders moving from a promising idea to an investor-ready or market-ready proposition.",
      items: [
        "Full brand identity",
        "Working MVP or prototype",
        "Investor narrative & pitch deck",
        "Go-to-market strategy",
      ],
    },
    {
      label: "03 · Creative & Commercial Retainer",
      title: "Your external innovation department.",
      price: "£1,500–£5,000/mo",
      body: "Ongoing strategic leadership across creative direction, commercial strategy, funding, and technology.",
      items: [
        "Curtis · Creative / product",
        "Dr Jack · Commercial / funding",
        "NagaVision · Tech / AI",
        "Ongoing strategic leadership",
      ],
    },
  ];

  return (
    <section id="reality-sprint" className="bg-foreground py-24 text-background sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-background/60 uppercase">
            More than hosting
          </p>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.98] font-bold">
            When your site needs a next version, <span className="text-spectrum">build it.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-background/70">
            Naga Host keeps your website and data under your control. When the next move is bigger
            than hosting, NagaVision’s Reality Sprint turns the idea into a working website, MVP, AI
            prototype, or launch plan.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <Reveal key={offer.label} delay={i * 90}>
              <article className="flex h-full flex-col rounded-[1.75rem] border border-background/15 bg-background/5 p-7 transition-all hover:-translate-y-1 hover:bg-background/10 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.18em] text-flame uppercase">
                  {offer.label}
                </p>
                <h3 className="mt-6 text-2xl font-bold">{offer.title}</h3>
                <p className="mt-3 font-display text-lg text-background/90">{offer.price}</p>
                <p className="mt-5 text-sm leading-relaxed text-background/65">{offer.body}</p>
                <ul className="mt-7 flex-1 space-y-3 text-sm text-background/80">
                  {offer.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal
          delay={180}
          className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-background/15 pt-7 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl text-sm leading-relaxed text-background/65">
            Start with the hosting. If the next move is bigger than infrastructure, book the Reality
            Sprint directly with the NagaVision team.
          </p>
          <a
            href="https://reality-sprint.lovable.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3 text-sm font-semibold text-flame-foreground transition-transform hover:scale-[1.02]"
          >
            Explore Reality Sprint <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  const faqs: [string, string][] = [
    [
      "Do I really get a full cPanel account?",
      "Yes. Once payment clears we create a dedicated cPanel account on your allocated server and email you the cPanel URL, username and a one-time password. File Manager, phpMyAdmin, email, cron, SSH and Softaculous are all enabled.",
    ],
    [
      "How fast is provisioning?",
      "Typically under 60 seconds. If a domain registration is part of the order it can take a few minutes longer while the registrar responds.",
    ],
    [
      "Can you move my existing site?",
      "We migrate unlimited sites free of charge on Studio and Foundry, and one site on Launch. We schedule the cutover overnight and verify it before touching DNS.",
    ],
    [
      "What happens at renewal?",
      "You renew at the price you signed up at. No introductory-rate games.",
    ],
    [
      "Is there a refund window?",
      "30 days, no questions. Annual plans are refunded pro-rata after that.",
    ],
    [
      "Can I upgrade later?",
      "Any time, from inside your account. Upgrades are instant and pro-rated; nothing is re-provisioned or moved.",
    ],
    [
      "What do hosting customers get from NagaVision?",
      "Customers get access to upcoming NagaVision AI tools and web apps at no extra charge. We will announce each tool as it becomes available.",
    ],
  ];
  return (
    <section id="faq" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.03] font-bold">
            Questions, answered plainly.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Still unsure? Our team replies in about three minutes, day or night.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map(([q, a]) => (
              <AccordionItem key={q} value={q} className="border-border">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36">
      <div
        aria-hidden
        className="bg-spectrum pointer-events-none absolute inset-x-0 top-1/3 mx-auto h-[26rem] max-w-5xl rounded-full opacity-25 blur-[130px]"
      />
      <Reveal className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.95] font-extrabold">
          Move your site to
          <br />
          <span className="text-spectrum">something better.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-lg text-muted-foreground">
          Thirty-day refund. Free migration. Your cPanel login in under a minute.
        </p>
        <Link
          to="/checkout"
          search={{ plan: "studio" }}
          className="bg-spectrum group mt-10 inline-flex items-center gap-2.5 rounded-full px-9 py-4.5 text-base font-semibold text-flame-foreground shadow-float transition-transform hover:scale-[1.02]"
        >
          Choose your package
          <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center">
        <div className="flex items-center gap-2.5">
          <span className="bg-spectrum h-6 w-6 rounded-md" />
          <span className="font-display font-bold">NagaVision Hosting</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} NagaVision LTD · Registered in England
        </p>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <Handover />
        <Pricing />
        <HandbookBanner />
        <Infrastructure />
        <RealitySprint />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
