import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AuthForms from './components/AuthForms';
import Dashboard from './components/Dashboard';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleAuthed = ({ email, role }) => {
    setUser({ email, role });
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar
        currentView={currentView}
        isAuthenticated={isAuthenticated}
        onNavigate={setCurrentView}
        onLogout={handleLogout}
      />

      {currentView === 'home' && (
        <>
          <Hero onGetStarted={() => setCurrentView('auth')} />
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid gap-6 md:grid-cols-3">
              {[{
                title: 'Admin control',
                desc: 'Create and manage teams, players, tournaments, matches, venues and sponsors.'
              }, {
                title: 'Player profiles',
                desc: 'Track rosters, match results and tournament progress with ease.'
              }, {
                title: 'Insightful reports',
                desc: 'Answer real questions with ready-made analytics over your data.'
              }].map((f) => (
                <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {currentView === 'auth' && (
        <AuthForms onAuthed={handleAuthed} />
      )}

      {currentView === 'dashboard' && (
        <Dashboard role={user?.role || 'user'} />
      )}

      {currentView === 'reports' && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-bold tracking-tight">Reports</h2>
          <p className="mt-2 text-slate-600">Explore the prebuilt analytics widgets in the dashboard for a quick snapshot. Full reports will be added next.</p>
        </section>
      )}

      <footer className="mt-16 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Esports Manager — Built for modern leagues.
        </div>
      </footer>
    </div>
  );
}
