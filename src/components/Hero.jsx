import React from 'react';
import { Trophy, Shield, ArrowRight } from 'lucide-react';

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-indigo-700">
              <Shield className="h-3.5 w-3.5" />
              Secure • Role-based access
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Manage your esports ecosystem in one place
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Teams, players, venues, tournaments and sponsors — organized with powerful dashboards and insightful reports.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white shadow-sm hover:bg-indigo-500"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
              >
                <Trophy className="h-4 w-4" />
                Explore features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-0 opacity-70 blur-3xl" aria-hidden>
              <div className="h-full w-full bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-emerald-200" />
            </div>
            <div className="relative rounded-xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Teams', value: 24 },
                  { title: 'Players', value: 186 },
                  { title: 'Tournaments', value: 8 },
                  { title: 'Matches', value: 64 },
                ].map((stat) => (
                  <div key={stat.title} className="rounded-lg border border-slate-200 p-4">
                    <div className="text-sm text-slate-500">{stat.title}</div>
                    <div className="mt-1 text-2xl font-bold text-slate-900">{stat.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 p-4 text-white">
                <p className="text-sm">Instant insights</p>
                <p className="text-lg font-semibold">Admin dashboard with live metrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
