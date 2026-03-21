import ContactForm from './ContactForm';
import { InfoGrid, PageHero, SectionCard } from '@/components/brand-page';

export const metadata = {
  title: 'اتصل بنا | كراكساب',
  description: 'تواصل مع فريق كراكساب للدعم الفني أو الاستفسارات العامة أو اقتراحات المنتج عبر صفحة تواصل احترافية.',
  alternates: { canonical: '/contact' },
};

const contactCards = [
  { icon: 'mail', title: 'الدعم الفني', text: 'استخدم هذه الصفحة عندما تواجه مشكلة في الرسائل أو المجموعات أو القنوات أو المكالمات أو الإعدادات.' },
  { icon: 'settings', title: 'ملاحظات المنتج', text: 'إذا كانت لديك فكرة لتحسين تجربة الدردشة أو القنوات أو الأنشطة، يمكن إرسالها مباشرة للفريق.' },
  { icon: 'shield', title: 'الخصوصية والسلامة', text: 'يمكنك مراسلتنا بخصوص الحسابات أو الإشعارات أو الأمور المرتبطة بالأمان والخصوصية.' },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PageHero
        eyebrow="Contact"
        title="صفحة التواصل مع فريق كراكساب"
        description="إذا كنت تحتاج دعمًا تقنيًا، تريد الإبلاغ عن مشكلة، أو تود مشاركة ملاحظة مهمة حول التطبيق، فهذه الصفحة هي المسار المباشر للوصول إلى الفريق."
        icon="mail"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <InfoGrid items={contactCards} columns="md:grid-cols-3" />
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-20 sm:px-6 lg:px-8">
        <SectionCard id="contact-usage" eyebrow="قبل الإرسال" title="متى تستخدم هذه الصفحة؟">
          <p>
            استخدم صفحة التواصل عند الحاجة إلى متابعة مباشرة من الفريق، خاصة إذا كانت المشكلة لا تكفيها الأسئلة الشائعة
            أو مركز المساعدة. من الأفضل توضيح نوع المشكلة، الصفحة أو التبويب المتأثر، والخطوات التي أدت إليها إن وُجدت.
          </p>
        </SectionCard>

        <ContactForm />
      </section>
    </div>
  );
}
