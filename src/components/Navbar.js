'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  {
    href: '/#top',
    label: 'نظرة عامة',
    helper: 'تعريف سريع بكراكساب',
  },
  {
    href: '/features#chat-features',
    label: 'الدردشة والقنوات',
    helper: 'المحادثات والمجتمعات',
  },
  {
    href: '/security#account-security',
    label: 'الخصوصية والأمان',
    helper: 'حماية الحساب والبيانات',
  },
  {
    href: '/features#activity-features',
    label: 'الأنشطة والقصص',
    helper: 'القنوات والمنشورات اليومية',
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/55 bg-[#f5f7fb]/82 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-22 items-center justify-between gap-4 py-4">
          <div className="hidden min-w-0 flex-1 lg:block">
            <div className="flex justify-start">
              <Link
                href="/download"
                className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#0f766e,#0284c7)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:-translate-y-0.5"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v11m0 0 4-4m-4 4-4-4M5 19h14" />
                  </svg>
                </span>
                تنزيل التطبيق
              </Link>
            </div>
          </div>

          <div className="hidden flex-1 justify-center lg:flex">
            <div className="flex items-center gap-2 rounded-[28px] border border-white/90 bg-white/78 p-2 shadow-[0_14px_36px_rgba(15,23,42,0.08)] backdrop-blur">
              {links.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} helper={link.helper} />
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-1 items-center justify-between gap-3 lg:justify-end">
            <Link href="/" className="flex min-w-0 items-center gap-3 text-right">
              <div className="flex min-w-0 flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.42em] text-slate-500">Craxad</span>
                <span className="truncate text-2xl font-black text-slate-950">كراكساب</span>
              </div>
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f766e,#0284c7)] text-lg font-black text-white shadow-lg shadow-cyan-500/20">
                C
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50 lg:hidden"
              aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              aria-expanded={isOpen}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-slate-200 pb-4 pt-4 lg:hidden">
            <div className="grid gap-3">
              {links.map((link) => (
                <NavLinkMobile
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  helper={link.helper}
                  onClick={() => setIsOpen(false)}
                />
              ))}
              <Link
                href="/download"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center rounded-[22px] bg-[linear-gradient(135deg,#0f766e,#0284c7)] px-5 py-3.5 text-sm font-semibold text-white"
              >
                تنزيل التطبيق
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, label, helper }) {
  return (
    <Link
      href={href}
      className="group min-w-[155px] rounded-[22px] px-4 py-3 text-right transition hover:bg-slate-50"
    >
      <span className="block text-base font-bold text-slate-900">{label}</span>
      <span className="mt-1 block text-xs font-medium text-slate-500 transition group-hover:text-slate-700">{helper}</span>
    </Link>
  );
}

function NavLinkMobile({ href, label, helper, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-[24px] border border-slate-200 bg-white px-4 py-4 text-right shadow-sm transition hover:bg-slate-50"
    >
      <span className="block text-base font-bold text-slate-900">{label}</span>
      <span className="mt-1 block text-sm text-slate-500">{helper}</span>
    </Link>
  );
}
