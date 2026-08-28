import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ArrowLeft, Check, CreditCard, KeyRound, Lock, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PLANS, getPlan } from "@/lib/plans";
import { cn } from "@/lib/utils";

const searchSchema = z.object({
  plan: z.enum(["launch", "studio", "foundry"]).catch("studio"),
});

export const Route = createFileRoute("/checkout")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Checkout — Halcyon Hosting" },
      {
        name: "description",
        content:
          "Complete your Halcyon hosting order. Pick a package, pay securely, and receive your full cPanel account login by email.",
      },
      { property: "og:title", content: "Checkout — Halcyon Hosting" },
      {
        property: "og:description",
        content: "Pay securely and receive your full cPanel account login by email.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Checkout,
});

const STEPS = ["Your account", "Payment", "cPanel handover"];

function Checkout() {
  const { plan: planId } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [step, setStep] = useState(0);
  const [annual, setAnnual] = useState(true);
  const plan = getPlan(planId);
  const price = annual ? plan.annual : plan.monthly;

  return (
    <div className="min-h-screen bg-sand text-foreground">
      <header className="border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="bg-spectrum h-7 w-7 rounded-lg" />
            <span className="font-display text-lg font-bold">Halcyon</span>
          </Link>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Lock className="h-3.5 w-3.5" /> Secure checkout
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to packages
        </Link>
        <h1 className="mt-6 text-[clamp(2rem,5vw,3.25rem)] leading-[1.02] font-bold">
          Complete your <span className="text-spectrum">{plan.name}</span> order
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-lift sm:p-9">
            <ol className="flex flex-wrap items-center gap-3 text-sm">
              {STEPS.map((s, i) => (
                <li key={s} className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold",
                      i <= step
                        ? "bg-spectrum text-flame-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {i < step ? <Check className="h-3.5 w-3.5" /> : i + 1}
                  </span>
                  <span className={cn(i === step ? "font-semibold" : "text-muted-foreground")}>
                    {s}
                  </span>
                  {i < STEPS.length - 1 && <span className="h-px w-6 bg-border" />}
                </li>
              ))}
            </ol>

            <div className="mt-9">
              {step === 0 && (
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full name" placeholder="Alex Marsden" />
                  <Field id="email" label="Email" placeholder="alex@studio.co.uk" type="email" />
                  <Field
                    id="domain"
                    label="Domain to host"
                    placeholder="studio.co.uk"
                    className="sm:col-span-2"
                  />
                  <Field
                    id="username"
                    label="Preferred cPanel username"
                    placeholder="studioco"
                    className="sm:col-span-2"
                  />
                </div>
              )}

              {step === 1 && (
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="card"
                    label="Card number"
                    placeholder="4242 4242 4242 4242"
                    className="sm:col-span-2"
                  />
                  <Field id="exp" label="Expiry" placeholder="09 / 29" />
                  <Field id="cvc" label="CVC" placeholder="123" />
                  <p className="flex items-start gap-2.5 rounded-2xl bg-sand p-4 text-xs text-muted-foreground sm:col-span-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                    This is a checkout concept. No payment provider is connected yet, so nothing is
                    charged and no card details are stored or transmitted.
                  </p>
                </div>
              )}

              {step === 2 && (
                <div className="rounded-2xl border border-border p-6">
                  <KeyRound className="h-6 w-6 text-flame" />
                  <h2 className="mt-4 text-xl font-bold">What lands in your inbox</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Within about 60 seconds of a successful payment you receive your full cPanel
                    account — nothing withheld:
                  </p>
                  <dl className="mt-6 space-y-3 font-mono text-sm">
                    {[
                      ["cPanel URL", "https://srv-uk-14.halcyon.host:2083"],
                      ["Username", "studioco"],
                      ["Password", "one-time link, you set it on first login"],
                      ["Nameservers", "ns1.halcyon.host / ns2.halcyon.host"],
                      ["FTP + SSH", "enabled"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex flex-wrap justify-between gap-2 border-b border-border/60 pb-2">
                        <dt className="text-muted-foreground">{k}</dt>
                        <dd className="font-semibold">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-6 rounded-2xl bg-sand p-4 text-xs text-muted-foreground">
                    Demonstration only: account provisioning is not connected, so no real cPanel
                    account is created by this flow.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              {step > 0 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
                >
                  Back
                </button>
              )}
              {step < 2 ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  className="bg-spectrum inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-flame-foreground shadow-lift transition-transform hover:scale-[1.02]"
                >
                  {step === 1 ? (
                    <>
                      <CreditCard className="h-4 w-4" /> Review handover
                    </>
                  ) : (
                    "Continue to payment"
                  )}
                </button>
              ) : (
                <span className="text-sm text-muted-foreground">
                  Connect payments and provisioning to make this order live.
                </span>
              )}
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-lg font-bold">Order summary</h2>
            <div className="mt-5 flex gap-2 rounded-full bg-muted p-1 text-xs font-semibold">
              {[
                ["Monthly", false],
                ["Annual −20%", true],
              ].map(([label, val]) => (
                <button
                  key={String(label)}
                  onClick={() => setAnnual(val as boolean)}
                  className={cn(
                    "flex-1 rounded-full px-3 py-2 transition-all",
                    annual === val
                      ? "bg-spectrum text-flame-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="mt-6 space-y-2">
              {PLANS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => navigate({ search: { plan: p.id } })}
                  className={cn(
                    "flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition-colors",
                    p.id === plan.id
                      ? "border-flame/50 bg-sand font-semibold"
                      : "border-border hover:bg-muted",
                  )}
                >
                  <span>{p.name}</span>
                  <span>£{(annual ? p.annual : p.monthly).toFixed(2)}/mo</span>
                </button>
              ))}
            </div>
            <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
              <Row label={`${plan.name} hosting`} value={`£${price.toFixed(2)}/mo`} />
              <Row label="Setup fee" value="£0.00" />
              <Row label="Migration" value="Included" />
              <div className="flex justify-between pt-3 text-base font-bold">
                <span>Due today</span>
                <span>£{(annual ? price * 12 : price).toFixed(2)}</span>
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-xs text-muted-foreground">
              {[
                "Full cPanel account after payment",
                "30-day money-back guarantee",
                "Cancel or upgrade at any time",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-flame" />
                  {f}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </main>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-muted-foreground">
      <span>{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  className,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} className="h-12 rounded-xl" />
    </div>
  );
}
