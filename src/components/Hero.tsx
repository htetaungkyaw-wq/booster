import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f3e8ff] via-[#f8f3ff] to-[#e7e0ff]">
      {/* Ambient sparkles/clouds */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-white/30 blur-3xl" />
        <span className="absolute left-12 top-16 h-2 w-2 rounded-full bg-white/70 blur-[1px]" />
        <span className="absolute right-20 top-32 h-3 w-3 rounded-full bg-white/80 blur-[1px]" />
        <span className="absolute bottom-24 right-24 h-2 w-2 rounded-full bg-white/70 blur-[1px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:py-32 xl:px-12">
        {/* Left column */}
        <div className="max-w-xl text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-500">
            Performance marketing, leveled up
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            We buy the right clicks. You keep the {" "}
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-800 bg-clip-text text-transparent">
              customers.
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Creative tests, ROAS-first bidding, and reporting you’ll actually
            understand.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#pilot"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:scale-105 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
            >
              Start a Pilot (30 days)
            </a>
            <a
              href="#chat"
              className="inline-flex items-center justify-center rounded-full border border-purple-400/60 px-6 py-3 text-sm font-semibold text-purple-700 underline-offset-4 transition hover:-translate-y-0.5 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
            >
              Chat with Viper
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="relative flex w-full max-w-xl items-center justify-center lg:justify-end">
          <div className="relative h-[480px] w-full max-w-lg">
            {/* Top metrics card */}
            <div
              className="absolute right-6 top-0 w-64 rounded-2xl border border-white/60 bg-white/70 p-5 shadow-2xl backdrop-blur-xl transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-[1.02] animate-float"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-500">
                Weekly Highlights
              </p>
              <dl className="mt-4 space-y-3 text-slate-700">
                <div className="flex items-center justify-between">
                  <dt className="text-xs uppercase tracking-wide text-slate-500">
                    ROAS
                  </dt>
                  <dd className="text-lg font-semibold text-emerald-500">
                    ↑ 27%
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-xs uppercase tracking-wide text-slate-500">
                    CPC
                  </dt>
                  <dd className="text-lg font-semibold text-purple-600">
                    ↓ 3.408
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-xs uppercase tracking-wide text-slate-500">
                    CPA
                  </dt>
                  <dd className="text-lg font-semibold text-slate-900">
                    $3.07
                  </dd>
                </div>
              </dl>
            </div>

            {/* Middle app panel */}
            <div
              className="absolute left-4 top-28 w-72 rounded-2xl border border-white/50 bg-white/70 p-6 shadow-2xl backdrop-blur-xl transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-[1.02] animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-700">
                  Channel Sync
                </p>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-600">
                  Live
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg">
                  IG
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-black via-gray-900 to-gray-700 text-white shadow-lg">
                  TT
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg">
                  M
                </span>
              </div>

              <div className="mt-6 rounded-xl border border-white/60 bg-white/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Budget pacing
                </p>
                <div className="mt-3 h-24 rounded-lg bg-gradient-to-br from-purple-100 via-white to-purple-50 shadow-inner">
                  <div className="flex h-full items-end gap-2 px-3 pb-3">
                    <div className="flex-1 rounded-md bg-purple-400/70" style={{ height: "60%" }} />
                    <div className="flex-1 rounded-md bg-purple-500/80" style={{ height: "85%" }} />
                    <div className="flex-1 rounded-md bg-purple-300/80" style={{ height: "45%" }} />
                    <div className="flex-1 rounded-md bg-purple-600/80" style={{ height: "95%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom map card */}
            <div
              className="absolute bottom-0 left-16 w-72 rounded-2xl border border-white/50 bg-white/60 p-5 shadow-2xl backdrop-blur-xl transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-[1.02] animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-700">
                  Market Reach
                </p>
                <span className="text-xs uppercase tracking-wide text-slate-400">
                  Global
                </span>
              </div>
              <div className="mt-4 h-36 w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-200/80 via-white/70 to-purple-100/80">
                <div className="flex h-full items-center justify-center">
                  <div className="h-24 w-40 rounded-full bg-gradient-to-r from-purple-500/40 to-blue-400/40 blur-md" />
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>Top Regions</span>
                <span className="font-semibold text-purple-600">NY • LON • SGP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
