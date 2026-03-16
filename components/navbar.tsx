'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';

const links = [
  'Home',
  'About',
  'Skills',
  'Projects',
  'Experience',
  'GitHub',
  'Contact',
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-slate-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          Irfan<span className="text-primary">.dev</span>
        </a>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-border p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <Menu size={18} />
        </button>

        <ul className="hidden gap-7 text-sm md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-slate-300 transition-colors hover:text-primary"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <ul className="space-y-3 border-t border-border px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link}>
              <a
                onClick={() => setOpen(false)}
                href={`#${link.toLowerCase()}`}
                className="block py-1 text-slate-300 hover:text-primary"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
