import Link from 'next/link';
import { site } from '@/config/site';

const productLinks = [
  { href: '/#top', label: 'الرئيسية' },
  { href: '/features#chat-features', label: 'مزايا التطبيق' },
  { href: '/download', label: 'تنزيل كراكساب' },
  { href: '/about#about-overview', label: 'عن المنصة' },
];

const communityLinks = [
  { href: '/features#activity-features', label: 'القنوات العامة' },
  { href: '/features#group-features', label: 'المجموعات والمجتمعات' },
  { href: '/help-center#daily-tasks', label: 'إدارة المشرفين' },
  { href: '/blog', label: 'التحديثات والأخبار' },
];

const trustLinks = [
  { href: '/privacy#privacy-controls', label: 'الخصوصية' },
  { href: '/security#account-security', label: 'أمان البيانات' },
  { href: '/terms#accepted-use', label: 'الشروط والأحكام' },
  { href: '/agreements#policy-summary', label: 'الاتفاقيات والسياسات' },
];

const supportLinks = [
  { href: '/help-center#start-here', label: 'مركز المساعدة' },
  { href: '/contact#contact-usage', label: 'تواصل مع الفريق' },
  { href: '/report-issue', label: 'الإبلاغ عن مشكلة' },
  { href: '/faq#faq-1', label: 'الأسئلة الشائعة' },
];

function SocialIcon({ name }) {
  const shared = {
    viewBox: '0 0 24 24',
    className: 'h-5 w-5',
    fill: 'currentColor',
  };

  switch (name) {
    case 'x':
      return (
        <svg {...shared}>
          <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.2L6.5 22H2l7.4-8.6L1 2h6.3l4.4 5.6L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...shared}>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 12 16a4.5 4.5 0 0 1 0-9zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.8 6.2a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...shared}>
          <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31.6 31.6 0 0 0 2 12a31.6 31.6 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 22 12a31.6 31.6 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      );
    default:
      return null;
  }
}

function FooterColumn({ title, caption, links }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6 text-right shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-700">{caption}</p>
      <h4 className="mt-3 text-xl font-black text-slate-950">{title}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <Link
              prefetch={false}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialEntries = [
    { name: 'x', href: site.socials.x },
    { name: 'instagram', href: site.socials.instagram },
    { name: 'youtube', href: site.socials.youtube },
  ].filter((item) => item.href);

  return (
    <footer className="border-t border-slate-200 bg-[linear-gradient(180deg,#f7f9fc_0%,#eef4fb_100%)] py-14 text-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] border border-white/80 bg-white/70 p-8 shadow-[0_22px_70px_rgba(15,23,42,0.07)] backdrop-blur sm:p-10">
          <div className="grid gap-8 border-b border-slate-200 pb-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="text-right">
              <div className="inline-flex items-center gap-3">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f766e,#0284c7)] text-xl font-black text-white shadow-lg shadow-cyan-500/20">
                  C
                </span>
                <div>
                  <h3 className="text-3xl font-black text-slate-950">كراكساب</h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.38em] text-slate-500">Craxad</p>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                كراكساب منصة مراسلة حديثة تركّز على الدردشات الخاصة، القنوات العامة، والمجموعات المنظمة. التذييل هنا
                يعرض فقط المسارات التي تهم مستخدم تطبيق دردشة فعلي: البدء، المجتمعات، الأمان، والدعم.
              </p>

              <div className="mt-6 flex flex-wrap justify-end gap-3">
                <span className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-900">
                  دردشات خاصة
                </span>
                <span className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-900">
                  قنوات عامة
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                  مجموعات ومجتمعات
                </span>
              </div>
            </div>

            <div className="rounded-[28px] bg-[linear-gradient(145deg,#082f49,#0284c7)] p-6 text-right text-white shadow-[0_18px_50px_rgba(2,132,199,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/55">Support</p>
              <h4 className="mt-3 text-2xl font-black">ابدأ مع كراكساب من المكان الصحيح</h4>
              <p className="mt-3 text-sm leading-7 text-white/75">
                إذا كنت تريد تنزيل التطبيق، فهم القنوات والمجموعات، أو مراسلة الفريق، فهذه الروابط المختصرة هي الأهم.
              </p>
              <a
                className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                href={`mailto:${site.supportEmail}`}
              >
                {site.supportEmail}
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <FooterColumn title="المنتج" caption="Product" links={productLinks} />
            <FooterColumn title="القنوات والمجتمعات" caption="Channels" links={communityLinks} />
            <FooterColumn title="الأمان والخصوصية" caption="Trust" links={trustLinks} />
            <FooterColumn title="الدعم والمساعدة" caption="Support" links={supportLinks} />
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">&copy; {currentYear} كراكساب. جميع الحقوق محفوظة.</p>

            <div className="flex flex-wrap items-center justify-end gap-3">
              <span className="text-sm text-slate-500">تجربة مراسلة وقنوات ومجموعات بهوية عربية حديثة</span>
              {socialEntries.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-cyan-300 hover:text-cyan-900"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
