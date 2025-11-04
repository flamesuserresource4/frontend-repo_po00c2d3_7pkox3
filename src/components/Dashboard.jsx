import React from 'react';
import { Users, Trophy, Calendar, MapPin, Building, ListChecks } from 'lucide-react';

const SummaryCard = ({ icon: Icon, label, value, accent }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-center gap-3">
      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${accent}`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
      </div>
    </div>
  </div>
);

const QuickLink = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:shadow-md"
  >
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-medium text-slate-900">{label}</p>
        <p className="text-sm text-slate-500">Manage {label.toLowerCase()}</p>
      </div>
    </div>
    <span className="text-xs font-medium text-indigo-700">Open</span>
  </button>
);

const ReportTable = ({ title, headers, rows }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <h3 className="mb-3 text-sm font-semibold text-slate-800">{title}</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-3 py-2 text-left font-medium text-slate-600">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, idx) => (
            <tr key={idx} className="hover:bg-slate-50/60">
              {row.map((cell, i) => (
                <td key={i} className="px-3 py-2 text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function Dashboard({ role = 'admin' }) {
  // Sample mock data to illustrate the UI
  const stats = [
    { icon: Users, label: 'Teams', value: 24, accent: 'bg-indigo-600' },
    { icon: Users, label: 'Players', value: 186, accent: 'bg-violet-600' },
    { icon: Trophy, label: 'Tournaments', value: 8, accent: 'bg-emerald-600' },
    { icon: Calendar, label: 'Matches', value: 64, accent: 'bg-rose-600' },
    { icon: MapPin, label: 'Venues', value: 12, accent: 'bg-amber-600' },
    { icon: Building, label: 'Sponsors', value: 15, accent: 'bg-blue-600' },
  ];

  const quickLinks = [
    { icon: Users, label: 'Teams' },
    { icon: Users, label: 'Players' },
    { icon: MapPin, label: 'Venues' },
    { icon: Trophy, label: 'Tournaments' },
    { icon: Calendar, label: 'Matches' },
    { icon: Building, label: 'Sponsors' },
  ];

  // Mock report rows
  const matchesPerTournament = [
    ['Spring Cup', 12],
    ['Summer Clash', 8],
    ['Championship', 16],
  ];

  const playersWinningTeams = [
    ['Alex Morgan', 'Falcons'],
    ['Jamie Lee', 'Titans'],
    ['Priya Singh', 'Valkyries'],
  ];

  const tournamentsSponsors = [
    ['Championship', 'Acme Corp'],
    ['Spring Cup', 'Nova Media'],
    ['Summer Clash', 'Peak Drinks'],
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-6 flex items-center gap-2 text-slate-600">
        <ListChecks className="h-4 w-4" />
        <span className="text-sm">Signed in as</span>
        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium capitalize text-slate-700">{role}</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <SummaryCard key={s.label} icon={s.icon} label={s.label} value={s.value} accent={s.accent} />)
        )}
      </div>

      <h2 id="features" className="mt-10 mb-4 text-lg font-semibold text-slate-900">Quick management</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quickLinks.map((q) => (
          <QuickLink key={q.label} icon={q.icon} label={q.label} onClick={() => alert(`${q.label} management coming next`)} />
        ))}
      </div>

      <h2 className="mt-10 mb-4 text-lg font-semibold text-slate-900">Reports snapshot</h2>
      <div className="grid gap-4 lg:grid-cols-2">
        <ReportTable
          title="Matches per tournament"
          headers={["Tournament", "Matches"]}
          rows={matchesPerTournament}
        />
        <ReportTable
          title="Players in winning teams"
          headers={["Player", "Team"]}
          rows={playersWinningTeams}
        />
        <ReportTable
          title="Tournaments and sponsors"
          headers={["Tournament", "Sponsor"]}
          rows={tournamentsSponsors}
        />
      </div>
    </section>
  );
}
