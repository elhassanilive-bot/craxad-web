export function BrandIcon({ name, className = 'h-6 w-6' }) {
  const shared = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    className,
  };

  switch (name) {
    case 'chat':
      return (
        <svg {...shared}>
          <path d="M5 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-5l-4 3v-3H8a3 3 0 0 1-3-3z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'users':
      return (
        <svg {...shared}>
          <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 19a4.5 4.5 0 0 1 9 0M13 19a3.5 3.5 0 0 1 7 0" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'channel':
      return (
        <svg {...shared}>
          <path d="M4 12a8 8 0 0 1 8-8" strokeLinecap="round" />
          <path d="M4 16A12 12 0 0 1 16 4" strokeLinecap="round" />
          <path d="M6 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...shared}>
          <path d="M12 3 5 6v5c0 4.5 2.7 8.5 7 10 4.3-1.5 7-5.5 7-10V6z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m9.5 12 1.8 1.8L15 10.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...shared}>
          <path d="M12 3 13.8 8.2 19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...shared}>
          <path d="M7 5h2l1 4-2 2a11 11 0 0 0 5 5l2-2 4 1v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'video':
      return (
        <svg {...shared}>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="m16 10 5-3v10l-5-3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'story':
      return (
        <svg {...shared}>
          <rect x="5" y="3" width="14" height="18" rx="4" />
          <path d="M9 8h6M9 12h6M9 16h4" strokeLinecap="round" />
        </svg>
      );
    case 'settings':
      return (
        <svg {...shared}>
          <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
          <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.1a1 1 0 0 0-.7-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.1a1 1 0 0 0 .9-.7 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.1a1 1 0 0 0 .7.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6h.1a2 2 0 1 1 0 4H20a1 1 0 0 0-.6.7Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...shared}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="m4 8 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'lock':
      return (
        <svg {...shared}>
          <path d="M7 11V8a5 5 0 1 1 10 0v3" strokeLinecap="round" />
          <rect x="5" y="11" width="14" height="10" rx="2" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" strokeLinecap="round" />
        </svg>
      );
    case 'archive':
      return (
        <svg {...shared}>
          <rect x="4" y="5" width="16" height="4" rx="1" />
          <path d="M5 9h14v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" />
          <path d="M10 13h4" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export function PageHero({ eyebrow, title, description, icon = 'spark' }) {
  return (
    <section className="border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="text-right">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-700">{eyebrow}</p>
            <h1 className="mt-4 text-5xl font-black leading-[1.15] text-slate-950 sm:text-6xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
          </div>

          <div className="rounded-[34px] border border-white/80 bg-white/85 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f766e,#0284c7)] text-white shadow-lg shadow-cyan-500/20">
              <BrandIcon name={icon} className="h-7 w-7" />
            </div>
            <p className="mt-5 text-sm leading-8 text-slate-600">
              تم إعداد هذه الصفحة بصياغة خاصة لتطبيق كراكساب اعتمادًا على بنية التطبيق الفعلية: الدردشات، المجموعات،
              القنوات، الأنشطة، المكالمات، والخصوصية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InfoGrid({ items, columns = 'md:grid-cols-2 xl:grid-cols-4' }) {
  return (
    <div className={`grid gap-5 ${columns}`}>
      {items.map((item) => (
        <article key={item.title} className="rounded-[28px] border border-white/80 bg-white/85 p-6 text-right shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800">
            <BrandIcon name={item.icon} />
          </div>
          <h2 className="mt-4 text-xl font-black text-slate-950">{item.title}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function SectionCard({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 rounded-[32px] border border-white/80 bg-white/88 p-8 text-right shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-black text-slate-950">{title}</h2>
      <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">{children}</div>
    </section>
  );
}

export function BulletList({ items }) {
  return (
    <ul className="space-y-3 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex items-start justify-end gap-3 text-right">
          <span>{item}</span>
          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-600" />
        </li>
      ))}
    </ul>
  );
}
