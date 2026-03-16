'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'GitHub', 'Contact'];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-border/80 bg-slate-950/75 px-4 py-3 backdrop-blur-xl md:px-6">
        <a href="#home" className="text-sm font-semibold tracking-[0.2em] text-slate-100">
          IRFAN<span className="text-primary">.DEV</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-slate-300 transition hover:text-primary">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild size="default" variant="outline">
            <a href="#contact">Let&apos;s Talk</a>
          </Button>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-lg border border-border p-2 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <ul className="mx-auto mt-2 max-w-6xl space-y-1 rounded-2xl border border-border bg-slate-950/95 p-4 md:hidden">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2 text-slate-300 transition hover:bg-slate-900 hover:text-primary"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
