import React from 'react';
import { Home, Trophy, Users, BarChart2, LogIn, LogOut } from 'lucide-react';

const NavButton = ({ active, icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
      active ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'
    }`}
  >
    <Icon className="w-4 h-4" />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default function Navbar({ currentView, onNavigate, isAuthenticated, onLogout }) {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-600 text-white font-bold">E</div>
            <div className="text-slate-900 font-semibold">Esports Manager</div>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <NavButton
              icon={Home}
              label="Home"
              active={currentView === 'home'}
              onClick={() => onNavigate('home')}
            />
            <NavButton
              icon={Users}
              label="Dashboard"
              active={currentView === 'dashboard'}
              onClick={() => onNavigate('dashboard')}
            />
            <NavButton
              icon={Trophy}
              label="Tournaments"
              active={currentView === 'dashboard'}
              onClick={() => onNavigate('dashboard')}
            />
            <NavButton
              icon={BarChart2}
              label="Reports"
              active={currentView === 'reports'}
              onClick={() => onNavigate('reports')}
            />
          </nav>

          <div className="flex items-center gap-2">
            {!isAuthenticated ? (
              <button
                onClick={() => onNavigate('auth')}
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-500"
              >
                <LogIn className="w-4 h-4" />
                <span className="text-sm font-medium">Sign in</span>
              </button>
            ) : (
              <button
                onClick={onLogout}
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
