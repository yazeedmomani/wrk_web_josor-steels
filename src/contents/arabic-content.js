const arabicContent = {
  helmet: {
    defaultTemplate: "%s | شركة الجسور",
    homeTitle: "الرئيسية",
    aboutUsTitle: "عنا",
    projectsTitle: "مشاريع",
    hangersTitle: "هناجر",
    bridgesTitle: "جسور",
    tubesTitle: "أنابيب",
    canopiesTitle: "مظلات",
    otherTitle: "أخرى",
    ourFacilityTitle: "منشأتنا",
    contactTitle: "تواصل معنا",
  },
  nav: {
    homeLink: "/",
    modal: [
      {
        isProjects: false,
        text: "عنا",
        to: "/about-us",
      },
      {
        isProjects: true,
        text: "مشاريع",
        links: [
          {
            text: "هناجر",
            to: "/projects/hangers",
          },
          {
            text: "جسور",
            to: "/projects/bridges",
          },
          {
            text: "أنابيب",
            to: "/projects/tubes",
          },
          {
            text: "مظلات",
            to: "/projects/canopies",
          },
          {
            text: "أخرى",
            to: "/projects/other",
          },
        ],
      },
      {
        isProjects: false,
        text: "منشأتنا",
        to: "/our-facility",
      },
      {
        isProjects: false,
        text: "تواصل معنا",
        to: "/contact",
      },
    ],
  },
  home: {
    header: {
      title: "شركة الجسور",
      subTitle: "أطلق العنان لخيالك مع فولاذنا الثابت القوي",
      primaryButton: "تواصل معنا",
      secondaryButton: "المزيد",
    },
    services: {
      span: "خدماتنا الاحترافية",
      title: "نتولى مجموعة متنوعة من المشاريع",
      projectCat: [
        {
          title: "هناجر",
          alt: "هنجر",
          to: "/projects/hangers",
          image: "hangers",
        },
        {
          title: "جسور",
          alt: "جسر",
          to: "/projects/bridges",
          image: "bridges",
        },
        {
          title: "أنابيب",
          alt: "أنبوب",
          to: "/projects/tubes",
          image: "tubes",
        },
        {
          title: "مظلات",
          alt: "مظلة",
          to: "/projects/canopies",
          image: "canopies",
        },
        {
          title: "أخرى",
          alt: "أخرى",
          to: "/projects/other",
          image: "other",
        },
      ],
    },
    steps: {
      span: "خطوات العمل",
      title: "احصل على طلبك في 4 خطوات",
      steps: [
        {
          title: "الطلب",
          description:
            "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
        },
        {
          title: "التصميم",
          description:
            "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
        },
        {
          title: "البناء",
          description:
            "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
        },
        {
          title: "التوصيل",
          description:
            "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
        },
      ],
    },
    about: {
      span: "عن الشركة",
      title: "مهمتنا",
      paragraph:
        "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً.",
      link: "المزيد ←",
    },
    contact: {
      title: "هل اقتنعت بنا؟ تواصل معنا!",
      button: "تواصل معنا",
    },
  },
  aboutUs: {
    title: "عنا",
    articles: [
      {
        title: "من نحن",
        paragraph:
          "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً.",
      },
      {
        title: "مهمتنا",
        paragraph:
          "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً.",
      },
    ],
    ourFacility: "منشأتنا",
    link: "المزيد ←",
  },
  projects: {
    title: "مشاريع",
    categoryCards: [
      {
        title: "هناجر",
        alt: "هنجر",
        to: "/projects/hangers",
        image: "hangers",
      },
      {
        title: "جسور",
        alt: "جسر",
        to: "/projects/bridges",
        image: "bridges",
      },
      {
        title: "أنابيب",
        alt: "أنبوب",
        to: "/projects/tubes",
        image: "tubes",
      },
      {
        title: "مظلات",
        alt: "مظلة",
        to: "/projects/canopies",
        image: "canopies",
      },
      {
        title: "أخرى",
        alt: "أخرى",
        to: "/projects/other",
        image: "other",
      },
    ],
    categoryPages: {
      hangers: {
        title: "هناجر",
        projectCards: [
          {
            title: "مشروع 01",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 02",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 03",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 04",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 05",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 06",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 07",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 08",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 09",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 10",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
        ],
      },
      bridges: {
        title: "جسور",
        projectCards: [
          {
            title: "مشروع 01",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 02",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 03",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 04",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 05",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 06",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 07",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 08",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
        ],
      },
      tubes: {
        title: "أنابيب",
        projectCards: [
          {
            title: "مشروع 01",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 02",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 03",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 04",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 05",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
        ],
      },
      canopies: {
        title: "مظلات",
        projectCards: [
          {
            title: "مشروع 01",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 02",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
        ],
      },
      other: {
        title: "أخرى",
        projectCards: [
          {
            title: "مشروع 01",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 02",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 03",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 04",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 05",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 06",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 07",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 08",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 09",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 10",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 11",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 12",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 13",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 14",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 15",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
          {
            title: "مشروع 16",
            description:
              "لوريم إيبسوم هو ببساطة نص شكلي ويُستخدم في صناعات المطابع ودور النشر.",
          },
        ],
      },
    },
  },
  ourFacility: {
    title: "منشأتنا",
  },
  contact: {
    title: "تواصل معنا",
    infoTitle: "معلومات",
    address: "21، شارع مكان، عمان، الأردن 11953",
    followTitle: "تابعنا على",
  },
  footer: {
    logoLink: "/",
    links: [
      {
        title: "صفحات",
        links: ["عنا", "مشاريع", "منشأتنا", "تواصل معنا"],
        links: [
          {
            text: "عنا",
            to: "/about-us",
          },
          {
            text: "مشاريع",
            to: "/projects",
          },
          {
            text: "منشأتنا",
            to: "/our-facility",
          },
          {
            text: "تواصل معنا",
            to: "/contact",
          },
        ],
      },
      {
        title: "مشاريع",
        links: [
          {
            text: "هناجر",
            to: "/projects/hangers",
          },
          {
            text: "جسور",
            to: "/projects/bridges",
          },
          {
            text: "أنابيب",
            to: "/projects/tubes",
          },
          {
            text: "مظلات",
            to: "/projects/canopies",
          },
          {
            text: "أخرى",
            to: "/projects/other",
          },
        ],
      },
    ],
    copyright: "شركة الجسور © 2023",
  },
  notFound: {
    title: "404",
    ops: "لم يتم العثور على شيء!",
    description:
      "ربما تمت إزالة الصفحة التي تبحث عنها أو تم تغيير اسمها أو أنها غير متاحة مؤقتًا.",
    link: "العوده للصفحة الرئيسية",
  },
  components: {
    ContactInfo: {
      phone: "+962791621064",
      email: "example@fabricators.com",
    },
    ContactIcon: {
      facebook: "https://www.facebook.com",
      linkedIn: "https://www.linkedIn.com",
    },
    ProjectCard: {
      button: "عرض الصور ←",
    },
    PathNav: {
      aboutUs: [
        {
          isLink: true,
          text: "الرئيسية",
          to: "/",
        },
        {
          isLink: false,
          text: "عنا",
        },
      ],
      projects: {
        categoryPage: [
          {
            isLink: true,
            text: "الرئيسية",
            to: "/",
          },
          {
            isLink: false,
            text: "مشاريع",
          },
        ],
        projectPage: {
          hangers: [
            {
              isLink: true,
              text: "الرئيسية",
              to: "/",
            },
            {
              isLink: true,
              text: "مشاريع",
              to: "/projects",
            },
            {
              isLink: false,
              text: "Hangers",
            },
          ],
          bridges: [
            {
              isLink: true,
              text: "الرئيسية",
              to: "/",
            },
            {
              isLink: true,
              text: "مشاريع",
              to: "/projects",
            },
            {
              isLink: false,
              text: "جسور",
            },
          ],
          tubes: [
            {
              isLink: true,
              text: "الرئيسية",
              to: "/",
            },
            {
              isLink: true,
              text: "مشاريع",
              to: "/projects",
            },
            {
              isLink: false,
              text: "أنابيب",
            },
          ],
          canopies: [
            {
              isLink: true,
              text: "الرئيسية",
              to: "/",
            },
            {
              isLink: true,
              text: "مشاريع",
              to: "/projects",
            },
            {
              isLink: false,
              text: "مظلات",
            },
          ],
          other: [
            {
              isLink: true,
              text: "الرئيسية",
              to: "/",
            },
            {
              isLink: true,
              text: "مشاريع",
              to: "/projects",
            },
            {
              isLink: false,
              text: "أخرى",
            },
          ],
        },
      },
      ourFacility: [
        {
          isLink: true,
          text: "الرئيسية",
          to: "/",
        },
        {
          isLink: false,
          text: "منشأتنا",
        },
      ],
      contact: [
        {
          isLink: true,
          text: "الرئيسية",
          to: "/",
        },
        {
          isLink: false,
          text: "تواصل معنا",
        },
      ],
    },
  },
};

export default arabicContent;
