export const profile = {
  name: { ar: "أحمد الشعار", en: "Ahmad Al-Shaar" },
  initial: { ar: "أ", en: "A" },
  email: "eng.ahmad.alshaar@gmail.com",
  github: "https://github.com/skaepra",
  linkedin: "https://www.linkedin.com/in/ahmad-al-shaar-b699aa427",
  cv: "/cv.html",
};

export const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Figma",
];

export const content = {
  ar: {
    skip: "تخطي إلى المحتوى",
    nav: {
      work: "أعمال مختارة",
      services: "خدماتي",
      experience: "الخبرة",
      about: "نبذة عني",
      contact: "لنتحدث",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      switchLanguage: "English",
      switchLanguageLabel: "عرض هذا البورتفوليو بالإنجليزية",
      primary: "التنقل الرئيسي",
    },
    theme: {
      toggle: "تبديل الوضع الليلي",
      toLight: "التبديل إلى الوضع النهاري",
      toDark: "التبديل إلى الوضع الليلي",
    },
    hero: {
      eyebrow: "مطور واجهات أمامية · دمشق، سوريا",
      hello: "مرحباً، أنا أحمد الشعار.",
      title: "واجهات تجعل خطوتك القادمة أبسط.",
      description:
        "أساعد الشركات على تحويل أفكارها إلى مواقع ومتاجر ومنصات سهلة الاستخدام — مع اهتمام دقيق بمن يستخدمها.",
      viewWork: "استعرض أعمالي",
      contact: "لنتحدث",
      available: "متاح لمشاريع وفرص عمل جديدة",
      portraitAlt: "رمز شخصي لأحمد الشعار",
      caption: "عمل مدروس. اهتمام شخصي.",
    },
    trust: {
      label: "ما الذي يمكنك توقعه",
      items: ["العربية والإنجليزية", "مصمم لكل شاشة", "من الفكرة إلى الإطلاق"],
    },
    work: {
      eyebrow: "أعمال مختارة",
      title: "بعض الأفكار التي تحققت.",
      description:
        "مواقع ومتاجر ومنصات بهدف واضح. استكشف ما يقدمه كل مشروع لمن يستخدمه.",
      live: "زيارة الموقع",
      source: "الكود على GitHub",
      builtWith: "بُني باستخدام",
      more: "مزيد من المشاريع على GitHub",
      preview: "معاينة موقع {name}",
      projects: [
        {
          name: "متجر إلكتروني",
          category: "متجر إلكتروني",
          description:
            "واجهة متجر كاملة: تصفح المنتجات، سلة شراء، وإتمام الطلب — بتجربة سلسة على الجوال.",
          tech: ["React", "TypeScript", "Tailwind CSS"],
          preview: "store",
        },
        {
          name: "لوحة تحكم",
          category: "لوحة بيانات",
          description:
            "لوحة لعرض المؤشرات والإحصاءات بوضوح، مع رسوم بيانية وفلاتر سريعة.",
          tech: ["Next.js", "Node.js", "PostgreSQL"],
          preview: "dashboard",
        },
        {
          name: "مهامي",
          category: "تطبيق إنتاجية",
          description:
            "تطبيق لإدارة المهام اليومية: قوائم، تذكيرات، وتقدم واضح — بالعربية والإنجليزية.",
          tech: ["React", "TypeScript"],
          preview: "tasks",
        },
        {
          name: "موقع تعريفي",
          category: "موقع أعمال",
          description:
            "موقع تعريفي سريع التحميل لخدمة محلية، بصفحات واضحة وطريقة سهلة للتواصل.",
          tech: ["Next.js", "Tailwind CSS"],
          preview: "site",
        },
      ],
    },
    services: {
      eyebrow: "كيف يمكنني المساعدة",
      title: "الموقع المناسب لخطوتك القادمة.",
      description: "تبدأ شيئاً جديداً أو تحسّن ما لديك؟ إليك حيث يمكنني المساعدة.",
      note: "كل مشروع يبدأ باحتياجاتك، مع مراعاة العربية والإنجليزية وسهولة الاستخدام على الجوال من البداية.",
      items: [
        {
          title: "مواقع الأعمال",
          description:
            "منزل واضح لعملك: خدماتك، قصتك، وطريقة سهلة لعملائك للتواصل معك.",
        },
        {
          title: "متاجر إلكترونية",
          description:
            "مساعدة العملاء على اكتشاف المنتجات والطلب، مع أدوات عملية لإدارة الكتالوج والطلبات.",
        },
        {
          title: "تطبيقات ومنصات",
          description:
            "تحويل المهام اليومية إلى مساحة عمل منظمة، من الحجوزات والطلبات إلى لوحات الفرق.",
        },
      ],
    },
    process: {
      eyebrow: "العمل معاً",
      title: "خطوات واضحة. تواصل مفتوح.",
      description: "تعرف دائماً على ما نبنيه وما الذي يأتي بعده.",
      items: [
        {
          title: "أفهم فكرتك",
          description: "نتحدث عن أهدافك وعملائك وما يجب أن يفعله الموقع.",
        },
        {
          title: "أخطط وأبني",
          description: "نحدد النطاق، ثم أبني الموقع وأشاركك التقدم لآرائك.",
        },
        {
          title: "أطلق بثقة",
          description:
            "نراجع التجربة على شاشات مختلفة، نستعد للإطلاق، ونناقش الخطوات التالية.",
        },
      ],
    },
    experience: {
      eyebrow: "الخبرة",
      title: "خبرة خلف العمل.",
      description: "مشاريع مستقلة وبناء منتجات يومية.",
      items: [
        {
          period: "2024 — الآن",
          role: "مطور واجهات أمامية",
          org: "عمل مستقل",
          description:
            "بناء واجهات منتجات يومية بالعربية والإنجليزية، مع التركيز على الوضوح وسرعة التحميل.",
        },
      ],
    },
    about: {
      eyebrow: "نبذة عني",
      title: "مطور يمكنك التحدث إليه.",
      description:
        "أهتم بالمنتج كاملاً: ما يحتاجه المستخدم، ووضوح عمله، وقدرته على النمو بثبات.",
      linkedin: "عرض حسابي على LinkedIn",
      capabilities: [
        {
          title: "منتجات ويب مفيدة",
          description: "تجارب واضحة ومتجاوبة مصممة حول من يستخدمها.",
        },
        {
          title: "أساسات موثوقة",
          description: "واجهات منظمة تبقى عملية عند الصيانة والتطوير.",
        },
        {
          title: "عربي وإنجليزي",
          description: "تجارب ثنائية اللغة بمحتوى طبيعي ودعم RTL صحيح.",
        },
      ],
      skillsTitle: "للفرق التي توظف",
      skillsDescription: "أدواتي الأساسية في التطوير. المشاريع أعلاه توضح كيف أوظفها.",
    },
    contact: {
      eyebrow: "مشروعك القادم",
      title: "لنصنع شيئاً مفيداً.",
      description: "لديك فكرة، أو موقع تريد تحسينه، أو دور في فريقك؟ أخبرني قليلاً عنها.",
      email: "راسلني",
      cv: "تحميل السيرة الذاتية",
      note: "استفسارات المشاريع وفرص العمل مرحب بها.",
    },
    footer: {
      rights: "صُنع بعناية في دمشق.",
      backToTop: "العودة للأعلى",
    },
  },

  en: {
    skip: "Skip to content",
    nav: {
      work: "Selected work",
      services: "Services",
      experience: "Experience",
      about: "About me",
      contact: "Let's talk",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLanguage: "العربية",
      switchLanguageLabel: "View this portfolio in Arabic",
      primary: "Main navigation",
    },
    theme: {
      toggle: "Change color theme",
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
    },
    hero: {
      eyebrow: "Frontend developer · Damascus, Syria",
      hello: "Hello, I'm Ahmad Al-Shaar.",
      title: "Interfaces that make your next step simpler.",
      description:
        "I help businesses turn ideas into easy-to-use websites, stores, and platforms — with care for the people using them.",
      viewWork: "Explore my work",
      contact: "Let's talk",
      available: "Open to projects & career opportunities",
      portraitAlt: "Personal monogram of Ahmad Al-Shaar",
      caption: "Thoughtful work. Personal attention.",
    },
    trust: {
      label: "What you can expect",
      items: ["Arabic & English", "Built for every screen", "From idea to launch"],
    },
    work: {
      eyebrow: "Selected work",
      title: "A few ideas brought to life.",
      description:
        "Websites, stores, and platforms with a clear purpose. Explore what each project helps people do.",
      live: "Visit website",
      source: "Code on GitHub",
      builtWith: "Built with",
      more: "More projects on GitHub",
      preview: "{name} website preview",
      projects: [
        {
          name: "Storefront",
          category: "E-commerce store",
          description:
            "A complete store experience: product browsing, cart, and checkout — smooth on mobile.",
          tech: ["React", "TypeScript", "Tailwind CSS"],
          preview: "store",
        },
        {
          name: "Dashboard",
          category: "Analytics dashboard",
          description:
            "A dashboard that presents metrics clearly, with charts and quick filters.",
          tech: ["Next.js", "Node.js", "PostgreSQL"],
          preview: "dashboard",
        },
        {
          name: "My Tasks",
          category: "Productivity app",
          description:
            "A daily task manager: lists, reminders, and clear progress — in Arabic and English.",
          tech: ["React", "TypeScript"],
          preview: "tasks",
        },
        {
          name: "Marketing Site",
          category: "Business website",
          description:
            "A fast marketing site for a local business, with clear pages and easy contact.",
          tech: ["Next.js", "Tailwind CSS"],
          preview: "site",
        },
      ],
    },
    services: {
      eyebrow: "How I can help",
      title: "The right website for your next step.",
      description: "Starting something new or improving what you have? Here's where I can help.",
      note: "Every project starts with your needs, with Arabic, English, and mobile usability considered from the beginning.",
      items: [
        {
          title: "Business websites",
          description:
            "A clear home for your business: your services, your story, and an easy way for customers to reach you.",
        },
        {
          title: "Online stores",
          description:
            "Help customers discover and order products, with practical tools to manage catalog and orders.",
        },
        {
          title: "Apps & platforms",
          description:
            "Turn everyday tasks into an organized workspace, from bookings and requests to team dashboards.",
        },
      ],
    },
    process: {
      eyebrow: "Working together",
      title: "Clear steps. Open communication.",
      description: "You always know what we're building and what comes next.",
      items: [
        {
          title: "Understand your idea",
          description: "We talk about your goals, your customers, and what the site needs to do.",
        },
        {
          title: "Plan and build",
          description: "We agree on scope, then I build and share progress for your feedback.",
        },
        {
          title: "Launch with confidence",
          description:
            "We review the experience across screens, prepare for launch, and discuss next steps.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience behind the work.",
      description: "Independent projects and daily product work.",
      items: [
        {
          period: "2024 — Present",
          role: "Frontend Developer",
          org: "Freelance",
          description:
            "Building daily product interfaces in Arabic and English, with a focus on clarity and fast loading.",
        },
      ],
    },
    about: {
      eyebrow: "A little about me",
      title: "A developer you can talk to.",
      description:
        "I care about the whole product: what people need, how clearly it works, and how reliably it can grow.",
      linkedin: "View my LinkedIn",
      capabilities: [
        {
          title: "Useful web products",
          description: "Clear, responsive experiences designed around the people who use them.",
        },
        {
          title: "Reliable foundations",
          description: "Well-structured frontends that remain practical to maintain and grow.",
        },
        {
          title: "Arabic & English",
          description: "Complete bilingual experiences with natural content and proper RTL support.",
        },
      ],
      skillsTitle: "For hiring teams",
      skillsDescription: "My main development tools. The projects above show how I put them to work.",
    },
    contact: {
      eyebrow: "Your next project",
      title: "Let's make something useful.",
      description: "Have an idea, a site to improve, or a role on your team? Tell me a little about it.",
      email: "Email me",
      cv: "Download CV",
      note: "Project enquiries and career opportunities are welcome.",
    },
    footer: {
      rights: "Built with care in Damascus.",
      backToTop: "Back to top",
    },
  },
};