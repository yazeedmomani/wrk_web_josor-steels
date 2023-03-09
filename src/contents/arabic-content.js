import { PATHS } from "../constants/";

const titles = {
  company: "شركة الجسور",
  home: "الرئيسية",
  aboutUs: "عنا",
  projects: {
    title: "مشاريع",
    children: {
      hangers: "هناجر",
      bridges: "جسور",
      tubes: "أنابيب",
      canopies: "مظلات",
      other: "أخرى",
    },
  },
  ourFacility: "منشأتنا",
  contact: "تواصل معنا",
};

const arabicContent = {
  helmet: {
    defaultTemplate: `%s | ${titles.company}`,
    homeTitle: titles.home,
    aboutUsTitle: titles.aboutUs,
    projectsTitle: titles.projects.title,
    hangersTitle: titles.projects.children.hangers,
    bridgesTitle: titles.projects.children.bridges,
    tubesTitle: titles.projects.children.tubes,
    canopiesTitle: titles.projects.children.canopies,
    otherTitle: titles.projects.children.other,
    ourFacilityTitle: titles.ourFacility,
    contactTitle: titles.contact,
  },
  nav: {
    homeLink: PATHS.HOME,
    desktopLinks: [
      { text: titles.aboutUs, to: PATHS.ABOUTUS },
      { text: titles.projects.title, to: PATHS.PROJECTCATEGORIES },
      { text: titles.ourFacility, to: PATHS.OURFACILITY },
      { text: titles.contact, to: PATHS.CONTACT },
    ],
    modal: [
      {
        isProjects: false,
        text: titles.aboutUs,
        to: PATHS.ABOUTUS,
      },
      {
        isProjects: true,
        text: titles.projects.title,
        links: [
          {
            text: titles.projects.children.hangers,
            to: PATHS.PROJECTS.HANGERS,
          },
          {
            text: titles.projects.children.bridges,
            to: PATHS.PROJECTS.BRIDGES,
          },
          {
            text: titles.projects.children.tubes,
            to: PATHS.PROJECTS.TUBES,
          },
          {
            text: titles.projects.children.canopies,
            to: PATHS.PROJECTS.CANOPIES,
          },
          {
            text: titles.projects.children.other,
            to: PATHS.PROJECTS.OTHER,
          },
        ],
      },
      {
        isProjects: false,
        text: titles.ourFacility,
        to: PATHS.OURFACILITY,
      },
      {
        isProjects: false,
        text: titles.contact,
        to: PATHS.CONTACT,
      },
    ],
  },
  home: {
    header: {
      title: titles.company,
      subTitle: "أطلق العنان لخيالك مع فولاذنا الثابت القوي",
      primaryButton: {
        text: titles.contact,
        to: PATHS.CONTACT,
      },
      secondaryButton: "المزيد",
    },
    services: {
      span: "خدماتنا الاحترافية",
      title: "نتولى مجموعة متنوعة من المشاريع",
      projectCat: [
        {
          title: titles.projects.children.hangers,
          alt: "هنجر",
          to: PATHS.PROJECTS.HANGERS,
          image: "hangers",
        },
        {
          title: titles.projects.children.bridges,
          alt: "جسر",
          to: PATHS.PROJECTS.BRIDGES,
          image: "bridges",
        },
        {
          title: titles.projects.children.tubes,
          alt: "أنبوب",
          to: PATHS.PROJECTS.TUBES,
          image: "tubes",
        },
        {
          title: titles.projects.children.canopies,
          alt: "مظلة",
          to: PATHS.PROJECTS.CANOPIES,
          image: "canopies",
        },
        {
          title: titles.projects.children.other,
          alt: "أخرى",
          to: PATHS.PROJECTS.OTHER,
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
      link: {
        text: "المزيد ←",
        to: PATHS.ABOUTUS,
      },
    },
    contact: {
      title: "هل اقتنعت بنا؟ تواصل معنا!",
      button: {
        text: titles.contact,
        to: PATHS.CONTACT,
      },
    },
  },
  aboutUs: {
    title: titles.aboutUs,
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
    ourFacility: titles.ourFacility,
    link: {
      text: "المزيد ←",
      to: PATHS.OURFACILITY,
    },
  },
  projects: {
    title: titles.projects.title,
    categoryCards: [
      {
        title: titles.projects.children.hangers,
        alt: "هنجر",
        to: PATHS.PROJECTS.HANGERS,
        image: "hangers",
      },
      {
        title: titles.projects.children.bridges,
        alt: "جسر",
        to: PATHS.PROJECTS.BRIDGES,
        image: "bridges",
      },
      {
        title: titles.projects.children.tubes,
        alt: "أنبوب",
        to: PATHS.PROJECTS.TUBES,
        image: "tubes",
      },
      {
        title: titles.projects.children.canopies,
        alt: "مظلة",
        to: PATHS.PROJECTS.CANOPIES,
        image: "canopies",
      },
      {
        title: titles.projects.children.other,
        alt: "أخرى",
        to: PATHS.PROJECTS.OTHER,
        image: "other",
      },
    ],
    categoryPages: {
      hangers: {
        title: titles.projects.children.hangers,
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
        title: titles.projects.children.bridges,
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
        title: titles.projects.children.tubes,
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
        title: titles.projects.children.canopies,
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
        title: titles.projects.children.other,
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
    title: titles.ourFacility,
  },
  contact: {
    title: titles.contact,
    infoTitle: "معلومات",
    address: "21، شارع مكان، عمان، الأردن 11953",
    followTitle: "تابعنا على",
  },
  footer: {
    logoLink: PATHS.HOME,
    links: [
      {
        title: "صفحات",
        links: [
          titles.aboutUs,
          titles.projects.title,
          titles.ourFacility,
          titles.contact,
        ],
        links: [
          {
            text: titles.aboutUs,
            to: PATHS.ABOUTUS,
          },
          {
            text: titles.projects.title,
            to: PATHS.PROJECTCATEGORIES,
          },
          {
            text: titles.ourFacility,
            to: PATHS.OURFACILITY,
          },
          {
            text: titles.contact,
            to: PATHS.CONTACT,
          },
        ],
      },
      {
        title: titles.projects.title,
        links: [
          {
            text: titles.projects.children.hangers,
            to: PATHS.PROJECTS.HANGERS,
          },
          {
            text: titles.projects.children.bridges,
            to: PATHS.PROJECTS.BRIDGES,
          },
          {
            text: titles.projects.children.tubes,
            to: PATHS.PROJECTS.TUBES,
          },
          {
            text: titles.projects.children.canopies,
            to: PATHS.PROJECTS.CANOPIES,
          },
          {
            text: titles.projects.children.other,
            to: PATHS.PROJECTS.OTHER,
          },
        ],
      },
    ],
    copyright: `${titles.company} © 2023`,
  },
  notFound: {
    title: "404",
    ops: "لم يتم العثور على شيء!",
    description:
      "ربما تمت إزالة الصفحة التي تبحث عنها أو تم تغيير اسمها أو أنها غير متاحة مؤقتًا.",
    link: {
      text: "العوده للصفحة الرئيسية",
      to: PATHS.HOME,
    },
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
          text: titles.home,
          to: PATHS.HOME,
        },
        {
          isLink: false,
          text: titles.aboutUs,
        },
      ],
      projects: {
        categoryPage: [
          {
            isLink: true,
            text: titles.home,
            to: PATHS.HOME,
          },
          {
            isLink: false,
            text: titles.projects.title,
          },
        ],
        projectPage: {
          hangers: [
            {
              isLink: true,
              text: titles.home,
              to: PATHS.HOME,
            },
            {
              isLink: true,
              text: titles.projects.title,
              to: PATHS.PROJECTCATEGORIES,
            },
            {
              isLink: false,
              text: titles.projects.children.hangers,
            },
          ],
          bridges: [
            {
              isLink: true,
              text: titles.home,
              to: PATHS.HOME,
            },
            {
              isLink: true,
              text: titles.projects.title,
              to: PATHS.PROJECTCATEGORIES,
            },
            {
              isLink: false,
              text: titles.projects.children.bridges,
            },
          ],
          tubes: [
            {
              isLink: true,
              text: titles.home,
              to: PATHS.HOME,
            },
            {
              isLink: true,
              text: titles.projects.title,
              to: PATHS.PROJECTCATEGORIES,
            },
            {
              isLink: false,
              text: titles.projects.children.tubes,
            },
          ],
          canopies: [
            {
              isLink: true,
              text: titles.home,
              to: PATHS.HOME,
            },
            {
              isLink: true,
              text: titles.projects.title,
              to: PATHS.PROJECTCATEGORIES,
            },
            {
              isLink: false,
              text: titles.projects.children.canopies,
            },
          ],
          other: [
            {
              isLink: true,
              text: titles.home,
              to: PATHS.HOME,
            },
            {
              isLink: true,
              text: titles.projects.title,
              to: PATHS.PROJECTCATEGORIES,
            },
            {
              isLink: false,
              text: titles.projects.children.other,
            },
          ],
        },
      },
      ourFacility: [
        {
          isLink: true,
          text: titles.home,
          to: PATHS.HOME,
        },
        {
          isLink: false,
          text: titles.ourFacility,
        },
      ],
      contact: [
        {
          isLink: true,
          text: titles.home,
          to: PATHS.HOME,
        },
        {
          isLink: false,
          text: titles.contact,
        },
      ],
    },
  },
};

export default arabicContent;
