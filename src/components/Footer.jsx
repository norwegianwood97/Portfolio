import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="section-shell flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <p>{profile.title}</p>
      </div>
    </footer>
  );
}
