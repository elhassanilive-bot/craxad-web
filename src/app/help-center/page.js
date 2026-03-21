import { BulletList, InfoGrid, PageHero, SectionCard } from '@/components/brand-page';

export const metadata = {
  title: 'مركز المساعدة | كراكساب',
  description: 'مركز المساعدة الخاص بكراكساب يشرح التسجيل والدردشات والمجموعات والقنوات والأنشطة والمكالمات والإعدادات.',
  alternates: { canonical: '/help-center' },
};

const helpCards = [
  { icon: 'chat', title: 'الدردشات', text: 'مساعدة حول إرسال الرسائل والوسائط والردود والحذف والتعديل والأرشفة والحفظ.' },
  { icon: 'users', title: 'المجموعات', text: 'شرح إنشاء المجموعات ودعوة الأعضاء واختيار الخصوصية وإدارة المجتمع.' },
  { icon: 'story', title: 'الأنشطة والقنوات', text: 'مساعدة حول القصص والمنشورات والقنوات والتفاعلات والمشاهدات.' },
  { icon: 'phone', title: 'المكالمات', text: 'إرشادات تخص سجل المكالمات وجهات الاتصال والاتصال الصوتي والفيديو والبث المباشر.' },
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PageHero
        eyebrow="Help Center"
        title="مركز المساعدة في كراكساب يركّز على المهام الحقيقية التي يقوم بها المستخدم يوميًا"
        description="بدل الشروحات العامة، تم بناء هذه الصفحة حول ما يفعله المستخدم فعلًا داخل التطبيق: التسجيل، الدردشة، إدارة المجموعات، متابعة الأنشطة، استخدام القنوات، وإجراء المكالمات."
        icon="settings"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <InfoGrid items={helpCards} />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          <SectionCard id="start-here" eyebrow="ابدأ من هنا" title="أكثر ما يحتاجه المستخدم الجديد">
            <BulletList
              items={[
                'إنشاء حساب جديد باستخدام رقم الهاتف أو البريد الإلكتروني وكلمة المرور.',
                'إكمال الملف الشخصي وتعديل الاسم واسم المستخدم والصورة والنبذة وبقية البيانات.',
                'بدء محادثة جديدة وإرسال نص أو صورة أو فيديو أو مستند أو رسالة صوتية.',
                'إنشاء مجموعة أو قناة جديدة واختيار النوع والخصوصية.',
              ]}
            />
          </SectionCard>

          <SectionCard id="daily-tasks" eyebrow="المهام اليومية" title="ماذا يغطي مركز المساعدة؟">
            <BulletList
              items={[
                'الرد على الرسائل وإعادة توجيهها وتحريرها وحذفها.',
                'إدارة القصص والقنوات ومنشورات الأنشطة والتفاعل معها.',
                'الوصول إلى الرسائل المحذوفة مؤخرًا والدردشات المحذوفة مؤخرًا.',
                'فهم إعدادات الإشعارات والصوت واللغة والمظهر والخط.',
                'استخدام تبويب المكالمات وجهات الاتصال ولوحة المفاتيح.',
              ]}
            />
          </SectionCard>
        </div>
      </section>
    </div>
  );
}
