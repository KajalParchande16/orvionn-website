import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Gradient Blobs */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-[#8CC63F] via-[#5DAE68] to-[#3C9C95] opacity-25 blur-[120px]" />

      <div className="absolute -bottom-40 -right-40 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-[#2C7CC9] via-[#3C9C95] to-[#8CC63F] opacity-25 blur-[120px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#000 1px,transparent 1px),
            linear-gradient(to bottom,#000 1px,transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center gap-16 px-6 py-24 lg:flex-row">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-md backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            The Power to Innovate
          </div>

          {/* Heading */}
          <h1 className="mt-8 font-heading text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            Building Intelligent
            <br />
            Digital Solutions
            <span className="block bg-gradient-to-r from-[#5DAE68] via-[#3C9C95] to-[#2C7CC9] bg-clip-text text-transparent">
              for Tomorrow.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Orvionn empowers startups, businesses, and enterprises with
            AI-driven software, cloud technologies, enterprise applications,
            and digital transformation services.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-[#8CC63F] via-[#3C9C95] to-[#2C7CC9] px-8 py-6 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-slate-300 bg-white px-8 py-6 text-base shadow-sm hover:bg-slate-100"
            >
              Explore Services
            </Button>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-slate-900">100+</h3>
              <p className="mt-2 text-sm text-slate-500">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-slate-900">50+</h3>
              <p className="mt-2 text-sm text-slate-500">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-slate-900">24×7</h3>
              <p className="mt-2 text-sm text-slate-500">
                Technical Support
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex w-full justify-center lg:w-1/2">
          <div className="relative h-[550px] w-full max-w-[520px] overflow-hidden rounded-[32px] border border-white/50 bg-white/70 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl">
            {/* Small Floating Card */}
            <div className="absolute right-8 top-8 rounded-2xl border border-white/50 bg-white/80 px-5 py-4 shadow-lg backdrop-blur-lg">
              <p className="text-sm text-slate-500">AI Services</p>
              <h4 className="mt-1 text-2xl font-bold text-[#2C7CC9]">
                Active
              </h4>
            </div>

            {/* Analytics Card */}
            <div className="absolute left-8 top-36 w-64 rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur-lg">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600">
                  Project Growth
                </span>
                <span className="text-sm font-bold text-emerald-600">
                  +32%
                </span>
              </div>

              <div className="flex h-24 items-end gap-2">
                {[40, 70, 50, 90, 65, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-lg bg-gradient-to-t from-[#2C7CC9] to-[#8CC63F]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Cloud Card */}
            <div className="absolute bottom-10 right-8 w-60 rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur-lg">
              <h4 className="font-semibold text-slate-800">
                Cloud Infrastructure
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Azure • AWS • Kubernetes
              </p>

              <div className="mt-4 h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-[#8CC63F] to-[#2C7CC9]" />
              </div>

              <p className="mt-2 text-sm font-semibold text-emerald-600">
                99.9% Uptime
              </p>
            </div>

            {/* Center Circle */}
            <div
              className="
    absolute
    left-[56%]
    top-[56%]
    flex
    h-[135px]
    w-[135px]
    -translate-x-1/2
    -translate-y-1/2
    items-center
    justify-center
    rounded-full
    border
    border-white/40
    bg-gradient-to-br
    from-[#8CC63F]
    via-[#3C9C95]
    to-[#2C7CC9]
    text-center
    shadow-[0_25px_60px_rgba(44,124,201,0.30)]
    backdrop-blur-xl
    transition-all
    duration-500
    hover:scale-105
  "
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-white/10" />

              {/* Inner Ring */}
              <div className="absolute inset-[8px] rounded-full border border-white/20" />

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold tracking-wide text-white">
                  ORVIONN
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-white/80">
                  AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}