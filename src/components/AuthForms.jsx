import React, { useState } from 'react';
import { Mail, Lock, UserPlus, LogIn, Shield } from 'lucide-react';

export default function AuthForms({ onAuthed }) {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('admin');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password || (mode === 'signup' && !name)) {
      setError('Please fill in all required fields.');
      return;
    }

    // In a full implementation this would call the backend.
    // Here we simulate success and pass the selected role upstream.
    onAuthed({ email, role });
  };

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6 flex items-center justify-center gap-2 text-indigo-700">
        <Shield className="h-5 w-5" />
        <span className="text-sm font-medium">Secure authentication with role-based access</span>
      </div>

      <div className="mx-auto max-w-xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 grid grid-cols-2 rounded-lg bg-slate-100 p-1 text-sm">
          <button
            onClick={() => setMode('login')}
            className={`rounded-md px-3 py-2 font-medium transition ${
              mode === 'login' ? 'bg-white text-slate-900 shadow' : 'text-slate-600'
            }`}
          >
            Sign in
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`rounded-md px-3 py-2 font-medium transition ${
              mode === 'signup' ? 'bg-white text-slate-900 shadow' : 'text-slate-600'
            }`}
          >
            Create account
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Full name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 pl-9 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Jane Doe"
                />
                <UserPlus className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
              </div>
            </div>
          )}

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 pl-9 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="you@example.com"
              />
              <Mail className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 pl-9 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="••••••••"
              />
              <Lock className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="admin">Admin</option>
              <option value="player">Player</option>
              <option value="user">User</option>
            </select>
          </div>

          {error && (
            <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>
          )}

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 font-medium text-white hover:bg-indigo-500"
          >
            {mode === 'login' ? (
              <>
                <LogIn className="h-4 w-4" /> Sign in
              </>
            ) : (
              <>
                <UserPlus className="h-4 w-4" /> Create account
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
