import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Gauge,
  KeyRound,
  LifeBuoy,
  Lock,
  MoveRight,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { PLANS } from "@/lib/plans";
import { cn } from "@/lib/utils";
import heroSlab from "@/assets/hero-slab.jpg";
import ribbon from "@/assets/ribbon.jpg";
import fibre from "@/assets/fibre.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Halcyon Hosting — Fast cPanel Hosting, Live in 60 Seconds" },
      {
        name: "description",
        content:
          "Premium NVMe cPanel hosting for studios and stores. Free migration, daily backups, 24/7 humans. Pay once and your full cPanel login lands in your inbox.",
      },
      { property: "og:title", content: "Halcyon Hosting — Fast cPanel Hosting" },
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
          <span className="font-display text-lg font-bold tracking-tight">Halcyon</span>
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
        <Reveal className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            <Zap className="h-3.5 w-3.5 text-flame" /> UK NVMe · LiteSpeed · cPanel
          </span>
          <h1 className="mt-7 text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] font-extrabold">
            Hosting that
            <br />
            behaves like
            <br />
            <span className="text-spectrum">infrastructure.</span>
          </h1>
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <Reveal delay={120}>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
              No dashboards you have to decode. No queue for support. Choose a package, pay, and
              your <strong className="font-semibold text-foreground">full cPanel login</strong>{" "}
              arrives in under a minute — root of your own house, keys included.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/checkout"
                search={{ plan: "studio" }}
                className="bg-spectrum group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold text-flame-foreground shadow-float transition-transform hover:scale-[1.02]"
              >
                Start hosting
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
            <div className="relative overflow-hidden rounded-[2rem] bg-sand shadow-float">
              <img
                src={heroSlab}
                alt="Illuminated NVMe server slab floating in a bright studio"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="floaty absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-card/90 px-5 py-4 shadow-lift backdrop-blur-md sm:-left-10">
              <KeyRound className="h-5 w-5 text-flame" />
              <div>
                <p className="text-sm font-semibold">cPanel credentials sent</p>
                <p className="text-xs text-muted-foreground">studio-ledger.co.uk · 41s ago</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <Marquee />
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
      icon: Gauge,
      title: "Built for speed you can feel",
      body: "NVMe arrays, LiteSpeed, and per-site object caching. Pages that used to crawl land in the first paint budget.",
    },
    {
      icon: ShieldCheck,
      title: "Protected without a plugin bill",
      body: "WAF, brute-force shielding, malware sweeps and free SSL are baked in — not sold back to you at renewal.",
    },
    {
      icon: LifeBuoy,
      title: "Humans, day or night",
      body: "Average first reply: 3 minutes. Real engineers who will open your cPanel with you, not a script.",
    },
    {
      icon: Lock,
      title: "You own the keys",
      body: "Full cPanel, WHM-grade access on Foundry, SSH, cron, phpMyAdmin. Leave whenever you like — we'll help you pack.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="max-w-3xl">
        <h2 className="text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] font-bold">
          Everything the cheap hosts charge extra for,{" "}
          <span className="text-spectrum">standard.</span>
        </h2>
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

function Editorial() {
  return (
    <section className="bg-sand py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <figure className="overflow-hidden rounded-[2rem] shadow-float">
            <img
              src={fibre}
              alt="Fibre optic strands glowing in coral and blue"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
          </figure>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">
            The network
          </p>
          <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.03] font-bold">
            London, Manchester, and 34 edge cities in between.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Your origin sits on UK metal with redundant 10 Gbit uplinks. Static assets fan out to
            the edge automatically, so a visitor in Leeds and a visitor in Lisbon get the same
            first byte.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Free white-glove migration, done overnight",
              "Automatic PHP + WordPress core patching",
              "Isolated accounts — one bad neighbour can't touch you",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-foreground">
                <Check className="mt-1 h-4 w-4 shrink-0 text-flame" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(true);
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

function Compare() {
  const rows: [string, string, string][] = [
    ["Full cPanel account included", "Halcyon", "Budget hosts"],
    ["Storage medium", "NVMe, no throttling", "Shared SATA, capped IOPS"],
    ["Migration", "Free, overnight, done for you", "£70 or DIY"],
    ["Backups", "Daily → hourly, self-restore", "Weekly, paid restore"],
    ["SSL", "Free forever, auto-renewed", "Free year one, then billed"],
    ["Support", "Engineers in ~3 minutes", "Tier-1 chat script"],
    ["Renewal price", "Same as day one", "2–4× introductory rate"],
  ];
  return (
    <section id="compare" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] font-bold">
            The difference shows up on the invoice.
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-12 overflow-hidden rounded-[1.75rem] bg-card shadow-lift">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-4 border-b border-border px-6 py-4 text-[0.7rem] font-bold tracking-[0.14em] uppercase sm:px-9">
            <span className="text-muted-foreground"> </span>
            <span className="text-spectrum">Halcyon</span>
            <span className="text-muted-foreground">Typical host</span>
          </div>
          {rows.map(([label, ours, theirs]) => (
            <div
              key={label}
              className="grid grid-cols-[1.4fr_1fr_1fr] items-start gap-4 border-b border-border/60 px-6 py-5 text-sm last:border-0 sm:px-9"
            >
              <span className="font-semibold">{label}</span>
              <span className="text-foreground">{ours}</span>
              <span className="text-muted-foreground">{theirs}</span>
            </div>
          ))}
        </Reveal>
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

function Proof() {
  const quotes = [
    {
      q: "We moved 22 client sites in one night and nobody noticed — except the Core Web Vitals graph.",
      n: "Priya Raman",
      r: "Founder, Studio Oakley",
    },
    {
      q: "The cPanel login was in my inbox before I'd finished making coffee. That set the tone.",
      n: "Tom Bewley",
      r: "Owner, Bewley Cycles",
    },
    {
      q: "Support answered at 2am on a Sunday with an actual fix. I've stopped shopping around.",
      n: "Marta Kovač",
      r: "CTO, Parquet",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal className="flex items-center gap-3">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-flame text-flame" />
          ))}
        </div>
        <p className="text-sm font-semibold text-muted-foreground">
          4.9 / 5 from 2,140 UK customers
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {quotes.map((c, i) => (
          <Reveal key={c.n} delay={i * 90}>
            <blockquote className="flex h-full flex-col justify-between rounded-[1.75rem] border border-border bg-card p-8">
              <p className="font-display text-xl leading-snug font-semibold">“{c.q}”</p>
              <footer className="mt-8">
                <p className="text-sm font-bold">{c.n}</p>
                <p className="text-sm text-muted-foreground">{c.r}</p>
              </footer>
            </blockquote>
          </Reveal>
        ))}
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
          <span className="font-display font-bold">Halcyon Hosting</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Halcyon Hosting Ltd · Registered in England
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
        <Editorial />
        <Pricing />
        <Compare />
        <Handover />
        <Proof />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
