import Link from 'next/link';
import { BulletList, InfoGrid, PageHero, SectionCard } from '@/components/brand-page';

export const metadata = {
  title: 'الاتفاقيات والسياسات | كراكساب',
  description: 'مركز السياسات الذي يشرح كيف ينظم كراكساب استخدام الدردشات والقنوات والمجموعات والخصوصية والأمان.',
  alternates: { canonical: '/agreements' },
};

const policyCards = [
  { icon: 'shield', title: 'سياسات الثقة', text: 'تشمل الخصوصية وأمان البيانات وقواعد الحماية المرتبطة بالحسابات والرسائل والمحتوى.' },
  { icon: 'users', title: 'سياسات المجتمع', text: 'تنظم استخدام المجموعات والقنوات والقصص والمنشورات والتفاعل بين المستخدمين.' },
  { icon: 'settings', title: 'سياسات التشغيل', text: 'تشرح كيف تُدار الإعدادات والبلاغات والتحديثات وتقييد الاستخدام المسيء عند الحاجة.' },
];

export default function AgreementsPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PageHero
        eyebrow="الاتفاقيات والسياسات"
        title="الاتفاقيات والسياسات في كراكساب"
        description="لأن كراكساب يجمع بين الدردشة الخاصة، المجموعات، القنوات، القصص، المنشورات، والمكالمات، فقد تم توزيع القواعد والسياسات بشكل واضح حتى يفهم المستخدم ما الذي يحكم كل جزء من التطبيق."
        icon="spark"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <InfoGrid items={policyCards} columns="md:grid-cols-3" />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          <SectionCard id="policy-summary" eyebrow="ما الذي تغطيه هذه الصفحة؟" title="ملخص منظومة السياسات">
            <BulletList
              items={[
                'قواعد استخدام الحسابات وتسجيل الدخول وإدارة الملف الشخصي.',
                'معايير المحتوى المسموح والمرفوض في الرسائل والقنوات والمجموعات.',
                'ضوابط الخصوصية والأمان والإشعارات والبلاغات.',
                'إجراءات التقييد أو المراجعة عند إساءة الاستخدام.',
              ]}
            />
          </SectionCard>

          <SectionCard id="policy-links" eyebrow="روابط أساسية" title="انتقل مباشرة إلى الصفحات الأهم">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { href: '/privacy', label: 'سياسة الخصوصية', desc: 'كيف يدير كراكساب البيانات والحسابات والإعدادات الحساسة.' },
                { href: '/security', label: 'أمان البيانات', desc: 'كيف ترتبط حماية الحسابات والرسائل بالإشعارات وأدوات الحظر والإبلاغ.' },
                { href: '/terms', label: 'الشروط والأحكام', desc: 'القواعد العامة لاستخدام التطبيق والدردشات والمجموعات والقنوات.' },
                { href: '/help-center', label: 'مركز المساعدة', desc: 'صفحة عملية تشرح أهم المهام اليومية داخل التطبيق.' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 text-right transition hover:bg-white">
                  <p className="text-lg font-bold text-slate-950">{item.label}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</p>
                </Link>
              ))}
            </div>
          </SectionCard>
        </div>
      </section>
    </div>
  );
}
