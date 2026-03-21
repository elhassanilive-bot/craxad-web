import Link from 'next/link';

export const metadata = {
  title: 'كراكساب - منصة دردشة وقنوات عصرية',
  description: 'كراكساب تطبيق عربي حديث للدردشة والتواصل يجمع المحادثات الخاصة، القنوات، والمجتمعات داخل واجهة سريعة وواضحة.',
  alternates: { canonical: '/' },
};

const highlights = [
  {
    title: 'دردشة أسرع',
    text: 'محادثات فردية وجماعية بواجهة نظيفة تساعدك على التركيز على الرسائل بدل التنقل المعقد بين الصفحات.',
  },
  {
    title: 'قنوات جاهزة للنشر',
    text: 'أنشئ قناة لعلامتك أو مجتمعك، انشر التحديثات، واسمح للمتابعين بمتابعة الأخبار والمحتوى من مكان واحد.',
  },
  {
    title: 'إدارة ذكية للمجتمعات',
    text: 'رتّب المشرفين، ثبّت الرسائل المهمة، وقدّم تجربة أكثر وضوحًا لأعضاء المجموعة منذ أول دخول.',
  },
];

const featureGrid = [
  {
    eyebrow: 'التواصل اليومي',
    title: 'محادثات خاصة ومجموعات مرنة',
    text: 'كل شيء مصمم ليجعل الوصول إلى الرسائل، الملفات، والوسائط أسرع وأكثر وضوحًا على الهاتف والويب.',
  },
  {
    eyebrow: 'القنوات',
    title: 'بث الأخبار والمحتوى من مكان واحد',
    text: 'القنوات في كراكساب تساعدك على نشر الإعلانات، التحديثات، والدروس أو الأخبار بدون تشويش على المحادثات الخاصة.',
  },
  {
    eyebrow: 'الخصوصية',
    title: 'تحكم واضح في من يصل إليك',
    text: 'إعدادات سهلة للفلاتر، الإشعارات، وظهور الحساب حتى تكون تجربة التواصل أكثر راحة وأقل فوضى.',
  },
  {
    eyebrow: 'التجربة',
    title: 'واجهة حديثة مهيأة للعربية',
    text: 'تصميم بصري جديد يركّز على السرعة، الوضوح، والمساحات البيضاء الذكية مع لمسات لونية تعكس منتجًا عصريًا.',
  },
];

const promoBanners = [
  {
    title: 'أطلق قناة علامتك التجارية',
    text: 'اجمع الأخبار، الإعلانات، والروابط المهمة في قناة واحدة يسهل متابعتها ومشاركتها.',
    cta: 'ابدأ الآن',
  },
  {
    title: 'انقل مجتمعك إلى مساحة أوضح',
    text: 'المجموعات والقنوات في كراكساب تمنحك تحكمًا أفضل في التنظيم، الرسائل المثبتة، ومسار الأعضاء.',
    cta: 'شاهد كيف تعمل',
  },
  {
    title: 'جرّب تجربة دردشة أخف',
    text: 'من الصفحة الرئيسية حتى شاشة المحادثة، كل تفصيل مصمم لتقليل التشتيت وتسريع الوصول.',
    cta: 'تنزيل التطبيق',
  },
];

const timeline = [
  {
    step: '01',
    title: 'ابدأ بمحادثاتك الأساسية',
    text: 'نقل التواصل اليومي إلى تجربة أبسط حيث تكون الدردشات المهمة، الملفات، والإشعارات مرتبة بوضوح.',
  },
  {
    step: '02',
    title: 'ابنِ قناتك الخاصة',
    text: 'للنشرات، تحديثات المشروع، أو المحتوى العام، يمكنك إنشاء قناة لها هوية واضحة ومساحة مخصصة للنشر.',
  },
  {
    step: '03',
    title: 'وسّع مجتمعك',
    text: 'حوّل المتابعين إلى مجتمع يتفاعل داخل مجموعات وقنوات منظمة تدعم التوسع بدون فوضى.',
  },
];

const comparisonColumns = ['كراكساب', 'Telegram', 'WhatsApp'];

const comparisonRows = [
  {
    feature: 'تركيز الواجهة على القنوات والمجتمعات',
    values: ['مصمم من البداية لإبراز القنوات والمجتمعات بوضوح', 'قوي في القنوات لكن الواجهة تميل للكثافة', 'أبسط في المحادثات لكنه أقل مرونة في المجتمعات الواسعة'],
  },
  {
    feature: 'وضوح تجربة العربية',
    values: ['واجهة تسويقية وبصرية موجهة للعربية بشكل مباشر', 'جيد جدًا لكن أقل تخصيصًا للهويات المحلية', 'مناسب للمحادثات اليومية مع مساحة أقل للتخصيص'],
  },
  {
    feature: 'اللافتات والترويج داخل المنتج',
    values: ['سهل دمج حملات ترويجية ورسائل مميزة للقنوات والمنتجات', 'متاح عبر الرسائل والقنوات لكن بطابع تقني أكثر', 'محدود مقارنة بحالات الاستخدام التسويقية'],
  },
  {
    feature: 'مرونة الهوية للعلامات والمشاريع',
    values: ['مناسب لإبراز العلامة، القناة، والمجتمع داخل واجهة واحدة', 'ممتاز للنشر الواسع لكن أقل دفئًا من ناحية تقديم الهوية', 'أقوى في التواصل المباشر أكثر من التقديم العام للعلامة'],
  },
  {
    feature: 'وضوح المقارنة للمستخدم الجديد',
    values: ['قيمة المنتج تظهر بسرعة من أول شاشة', 'يحتاج المستخدم وقتًا أكبر لفهم العمق الكامل للميزات', 'واضح وسهل لكنه يركّز على الرسائل أكثر من القنوات'],
  },
];

const faqCards = [
  {
    title: 'لمن صُمم كراكساب؟',
    text: 'للأفراد، الفرق، العلامات التجارية، وصناع المحتوى الذين يريدون دردشة يومية وقنوات ومجتمعات في تجربة متماسكة.',
  },
  {
    title: 'ما الذي يميّز الصفحة الجديدة؟',
    text: 'الواجهة تعرّف المنتج بسرعة، تروّج لمزاياه بصريًا، وتقدّم مقارنة مباشرة تساعد الزائر على اتخاذ قرار سريع.',
  },
  {
    title: 'هل التصميم مناسب للويب والموبايل؟',
    text: 'نعم، كل الأقسام مبنية بشبكات مرنة وبطاقات متجاوبة لتظهر بصورة قوية على الشاشات الكبيرة والصغيرة.',
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <section id="top" className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="text-right">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold text-cyan-900 shadow-sm">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f766e,#0284c7)] text-white">
                C
              </span>
              كراكساب | Craxad
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.15] text-slate-950 sm:text-6xl">
              منصة دردشة وقنوات
              <span className="block bg-[linear-gradient(135deg,#0f766e,#0284c7)] bg-clip-text text-transparent">
                تبدو حديثة من أول نظرة
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              كراكساب مصمم ليجمع المحادثات الخاصة، القنوات العامة، والمجتمعات في واجهة عربية واضحة تساعد المستخدم على
              التواصل بسرعة، وتمنح المشاريع والعلامات التجارية مساحة أفضل للترويج وبناء جمهورها.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f766e,#0284c7)] px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-cyan-500/20 transition-transform hover:-translate-y-0.5"
              >
                تنزيل كراكساب
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3.5 text-base font-semibold text-slate-900 shadow-sm transition hover:border-cyan-300 hover:text-cyan-900"
              >
                استكشاف المزايا
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-white/70 bg-white/80 p-5 text-right shadow-[0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur">
                  <h2 className="text-lg font-bold text-slate-950">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 top-8 h-36 w-36 rounded-full bg-cyan-300/30 blur-3xl" />
            <div className="absolute -left-4 bottom-6 h-40 w-40 rounded-full bg-teal-300/25 blur-3xl" />

            <article className="relative overflow-hidden rounded-[36px] border border-white/80 bg-[linear-gradient(160deg,#082f49,#0f766e_55%,#d7f3ff_180%)] p-7 text-white shadow-[0_28px_80px_rgba(2,132,199,0.25)]">
              <div className="flex items-center justify-between text-sm text-white/80">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">نسخة الويب</span>
                <span>محادثات + قنوات + مجتمع</span>
              </div>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/70">Primary Channel</p>
                      <h3 className="mt-2 text-2xl font-black">أخبار كراكساب</h3>
                    </div>
                    <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-sm text-emerald-100">نشطة الآن</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/75">
                    أطلق التحديثات، العروض، وروابط الانضمام داخل قناة واحدة مصممة للمتابعة السريعة.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[28px] border border-white/15 bg-slate-950/25 p-5">
                    <p className="text-sm text-white/60">رسائل اليوم</p>
                    <p className="mt-3 text-4xl font-black">24K</p>
                    <p className="mt-2 text-sm leading-7 text-white/70">تجربة تراسل سريعة مع واجهة تضع المحادثات المهمة في الواجهة.</p>
                  </div>
                  <div className="rounded-[28px] border border-white/15 bg-white/10 p-5">
                    <p className="text-sm text-white/60">نسبة التفاعل</p>
                    <p className="mt-3 text-4xl font-black">+68%</p>
                    <p className="mt-2 text-sm leading-7 text-white/70">اللافتات الترويجية والقنوات المنظمة تساعدك على إبراز الرسائل المهمة.</p>
                  </div>
                </div>

                <div className="rounded-[30px] bg-white p-5 text-right text-slate-950">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-500">لوحة سريعة</p>
                      <h3 className="mt-1 text-xl font-black">كل ما تحتاجه لإقناع المستخدم من أول صفحة</h3>
                    </div>
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-900">واجهة حديثة</span>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <MetricCard value="03" label="أنماط ترويج" />
                    <MetricCard value="08" label="مساحات محتوى" />
                    <MetricCard value="RTL" label="مصمم للعربية" />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {promoBanners.map((banner, index) => (
            <article
              key={banner.title}
              className={`rounded-[32px] p-7 text-right shadow-[0_18px_50px_rgba(15,23,42,0.08)] ${
                index === 1
                  ? 'bg-[linear-gradient(140deg,#0f172a,#155e75)] text-white'
                  : 'border border-white/75 bg-white/85 text-slate-950'
              }`}
            >
              <p className={`text-xs font-semibold uppercase tracking-[0.4em] ${index === 1 ? 'text-white/55' : 'text-slate-400'}`}>
                Banner
              </p>
              <h2 className="mt-4 text-2xl font-black">{banner.title}</h2>
              <p className={`mt-4 text-base leading-8 ${index === 1 ? 'text-white/75' : 'text-slate-600'}`}>{banner.text}</p>
              <span
                className={`mt-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
                  index === 1 ? 'bg-white text-slate-950' : 'bg-slate-950 text-white'
                }`}
              >
                {banner.cta}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-right">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-slate-400">Core Experience</p>
          <h2 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">واجهة رئيسية جديدة بالكامل تشرح المنتج بدل أن تشتته</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            تم حذف العناصر القديمة واستبدالها بترتيب يركّز على القيمة الأساسية: الدردشة، القنوات، إدارة المجتمع، وإبراز
            ما يجعل كراكساب مناسبًا للمستخدم اليومي والمشاريع والعلامات التجارية.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureGrid.map((item) => (
            <article key={item.title} className="rounded-[30px] border border-white/80 bg-white/85 p-7 text-right shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-700">{item.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[34px] border border-white/80 bg-white/85 p-8 text-right shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-slate-400">Journey</p>
            <h2 className="mt-4 text-4xl font-black text-slate-950">من أول رسالة إلى مجتمع كامل</h2>
            <div className="mt-8 grid gap-4">
              {timeline.map((item) => (
                <article key={item.step} className="rounded-[24px] bg-slate-50 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                    <span className="text-2xl font-black text-cyan-700">{item.step}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] bg-[linear-gradient(145deg,#0f766e,#0f172a)] p-8 text-right text-white shadow-[0_28px_70px_rgba(15,118,110,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-white/45">Why Craxad</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">المنتج ليس مجرد دردشة، بل مساحة تواصل حديثة قابلة للنمو</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/75">
              سواء كنت تطلق قناة إخبارية، تبني مجتمعًا، أو تحتاج تطبيقًا واضحًا لمحادثات فريقك، فالتصميم الجديد يقدّم
              القصة بسرعة ويمنح المنتج حضورًا أقوى أمام المستخدم الجديد.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <StatPill value="قنوات" label="جاهزة للنشر والتحديث" />
              <StatPill value="مجتمعات" label="مرتبة وسهلة الإدارة" />
              <StatPill value="دردشة" label="أوضح في التصفح والقراءة" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/80 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-10">
          <div className="mb-8 text-right">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-slate-400">Comparison Table</p>
            <h2 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">مقارنة مباشرة بين كراكساب وTelegram وWhatsApp</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              هذا الجدول يعطي الزائر صورة سريعة عن تموضع كراكساب: تجربة دردشة حديثة، قنوات أوضح، وهوية عربية تسويقية
              أقوى من أول شاشة.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200">
            <div className="grid grid-cols-1 border-b border-slate-200 bg-slate-950 text-white md:grid-cols-[1.1fr_repeat(3,1fr)]">
              <div className="p-5 text-right text-lg font-bold">العنصر</div>
              {comparisonColumns.map((column) => (
                <div key={column} className="border-t border-white/10 p-5 text-right text-base font-bold md:border-r md:border-t-0 md:border-white/10">
                  {column}
                </div>
              ))}
            </div>

            {comparisonRows.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-1 md:grid-cols-[1.1fr_repeat(3,1fr)] ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/80'}`}
              >
                <div className="border-b border-slate-200 p-5 text-right font-bold text-slate-950 md:border-l md:border-b-0">{row.feature}</div>
                {row.values.map((value, valueIndex) => (
                  <div
                    key={`${row.feature}-${valueIndex}`}
                    className={`border-b border-slate-200 p-5 text-right text-sm leading-7 text-slate-600 md:border-b-0 ${
                      valueIndex < row.values.length - 1 ? 'md:border-l' : ''
                    } ${valueIndex === 0 ? 'bg-cyan-50/60 text-slate-800' : ''}`}
                  >
                    {value}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[34px] border border-white/80 bg-white/85 p-8 text-right shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-slate-400">FAQ Highlights</p>
            <h2 className="mt-4 text-4xl font-black text-slate-950">رسائل ختامية تقنع الزائر بسرعة</h2>
            <div className="mt-8 grid gap-4">
              {faqCards.map((card) => (
                <article key={card.title} className="rounded-[24px] bg-slate-50 p-5">
                  <h3 className="text-lg font-bold text-slate-950">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] bg-[linear-gradient(145deg,#082f49,#0284c7)] p-8 text-right text-white shadow-[0_28px_70px_rgba(2,132,199,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-white/50">Launch Craxad</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">كل شيء جاهز الآن لتقديم كراكساب كمنتج دردشة وقنوات حديث</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              الواجهة الجديدة صارت أكثر مهنية وحداثة، وتعرض هوية التطبيق بوضوح مع أقسام دعائية ومقارنة تساعد على الإقناع
              واتخاذ القرار.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                ابدأ التنزيل
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                تواصل مع الفريق
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MetricCard({ value, label }) {
  return (
    <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4 text-center">
      <p className="text-2xl font-black text-slate-950">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  );
}

function StatPill({ value, label }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 text-center backdrop-blur">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-2 text-sm text-white/70">{label}</p>
    </div>
  );
}
