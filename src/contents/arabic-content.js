import { PATHS, TITLES } from "../constants/";

const arabicContent = {
  helmet: {
    defaultTemplate: `%s | ${TITLES.AR.COMPANY}`,
    homeTitle: TITLES.AR.HOME,
    aboutUsTitle: TITLES.AR.ABOUTUS,
    projectsTitle: TITLES.AR.PROJECTCATEGORIES,
    hangersTitle: TITLES.AR.PROJECTS.HANGERS,
    bridgesTitle: TITLES.AR.PROJECTS.BRIDGES,
    tubesTitle: TITLES.AR.PROJECTS.TUBES,
    canopiesTitle: TITLES.AR.PROJECTS.CANOPIES,
    otherTitle: TITLES.AR.PROJECTS.OTHER,
    ourFacilityTitle: TITLES.AR.OURFACILITY,
    contactTitle: TITLES.AR.CONTACT,
  },
  nav: {
    homeLink: PATHS.HOME,
    desktopLinks: [
      { text: TITLES.AR.ABOUTUS, to: PATHS.ABOUTUS },
      { text: TITLES.AR.PROJECTCATEGORIES, to: PATHS.PROJECTCATEGORIES },
      { text: TITLES.AR.OURFACILITY, to: PATHS.OURFACILITY },
      { text: TITLES.AR.CONTACT, to: PATHS.CONTACT },
    ],
    modal: [
      {
        isProjects: false,
        text: TITLES.AR.ABOUTUS,
        to: PATHS.ABOUTUS,
      },
      {
        isProjects: true,
        text: TITLES.AR.PROJECTCATEGORIES,
        links: [
          {
            text: TITLES.AR.PROJECTS.HANGERS,
            to: PATHS.PROJECTS.HANGERS,
          },
          {
            text: TITLES.AR.PROJECTS.BRIDGES,
            to: PATHS.PROJECTS.BRIDGES,
          },
          {
            text: TITLES.AR.PROJECTS.TUBES,
            to: PATHS.PROJECTS.TUBES,
          },
          {
            text: TITLES.AR.PROJECTS.CANOPIES,
            to: PATHS.PROJECTS.CANOPIES,
          },
          {
            text: TITLES.AR.PROJECTS.OTHER,
            to: PATHS.PROJECTS.OTHER,
          },
        ],
      },
      {
        isProjects: false,
        text: TITLES.AR.OURFACILITY,
        to: PATHS.OURFACILITY,
      },
      {
        isProjects: false,
        text: TITLES.AR.CONTACT,
        to: PATHS.CONTACT,
      },
    ],
  },
  home: {
    header: {
      title: TITLES.AR.COMPANY,
      subTitle: "أطلق العنان لخيالك مع فولاذنا الثابت القوي",
      primaryButton: {
        text: TITLES.AR.CONTACT,
        to: PATHS.CONTACT,
      },
      secondaryButton: "المزيد",
    },
    services: {
      span: "خدماتنا الاحترافية",
      title: "نتولى مجموعة متنوعة من المشاريع",
      projectCat: [
        {
          title: TITLES.AR.PROJECTS.HANGERS,
          alt: "هنجر",
          to: PATHS.PROJECTS.HANGERS,
          image: "hangers",
        },
        {
          title: TITLES.AR.PROJECTS.BRIDGES,
          alt: "جسر",
          to: PATHS.PROJECTS.BRIDGES,
          image: "bridges",
        },
        {
          title: TITLES.AR.PROJECTS.TUBES,
          alt: "أنبوب",
          to: PATHS.PROJECTS.TUBES,
          image: "tubes",
        },
        {
          title: TITLES.AR.PROJECTS.CANOPIES,
          alt: "مظلة",
          to: PATHS.PROJECTS.CANOPIES,
          image: "canopies",
        },
        {
          title: TITLES.AR.PROJECTS.OTHER,
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
        text: TITLES.AR.CONTACT,
        to: PATHS.CONTACT,
      },
    },
  },
  aboutUs: {
    title: TITLES.AR.ABOUTUS,
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
    ourFacility: TITLES.AR.OURFACILITY,
    link: {
      text: "المزيد ←",
      to: PATHS.OURFACILITY,
    },
  },
  projects: {
    title: TITLES.AR.PROJECTCATEGORIES,
    categoryCards: [
      {
        title: TITLES.AR.PROJECTS.HANGERS,
        alt: "هنجر",
        to: PATHS.PROJECTS.HANGERS,
        image: "hangers",
      },
      {
        title: TITLES.AR.PROJECTS.BRIDGES,
        alt: "جسر",
        to: PATHS.PROJECTS.BRIDGES,
        image: "bridges",
      },
      {
        title: TITLES.AR.PROJECTS.TUBES,
        alt: "أنبوب",
        to: PATHS.PROJECTS.TUBES,
        image: "tubes",
      },
      {
        title: TITLES.AR.PROJECTS.CANOPIES,
        alt: "مظلة",
        to: PATHS.PROJECTS.CANOPIES,
        image: "canopies",
      },
      {
        title: TITLES.AR.PROJECTS.OTHER,
        alt: "أخرى",
        to: PATHS.PROJECTS.OTHER,
        image: "other",
      },
    ],
    categoryPages: {
      hangers: {
        title: TITLES.AR.PROJECTS.HANGERS,
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
        title: TITLES.AR.PROJECTS.BRIDGES,
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
        title: TITLES.AR.PROJECTS.TUBES,
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
        title: TITLES.AR.PROJECTS.CANOPIES,
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
        title: TITLES.AR.PROJECTS.OTHER,
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
    title: TITLES.AR.OURFACILITY,
  },
  contact: {
    title: TITLES.AR.CONTACT,
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
          TITLES.AR.ABOUTUS,
          TITLES.AR.PROJECTCATEGORIES,
          TITLES.AR.OURFACILITY,
          TITLES.AR.CONTACT,
        ],
        links: [
          {
            text: TITLES.AR.ABOUTUS,
            to: PATHS.ABOUTUS,
          },
          {
            text: TITLES.AR.PROJECTCATEGORIES,
            to: PATHS.PROJECTCATEGORIES,
          },
          {
            text: TITLES.AR.OURFACILITY,
            to: PATHS.OURFACILITY,
          },
          {
            text: TITLES.AR.CONTACT,
            to: PATHS.CONTACT,
          },
        ],
      },
      {
        title: TITLES.AR.PROJECTCATEGORIES,
        links: [
          {
            text: TITLES.AR.PROJECTS.HANGERS,
            to: PATHS.PROJECTS.HANGERS,
          },
          {
            text: TITLES.AR.PROJECTS.BRIDGES,
            to: PATHS.PROJECTS.BRIDGES,
          },
          {
            text: TITLES.AR.PROJECTS.TUBES,
            to: PATHS.PROJECTS.TUBES,
          },
          {
            text: TITLES.AR.PROJECTS.CANOPIES,
            to: PATHS.PROJECTS.CANOPIES,
          },
          {
            text: TITLES.AR.PROJECTS.OTHER,
            to: PATHS.PROJECTS.OTHER,
          },
        ],
      },
    ],
    copyright: `${TITLES.AR.COMPANY} © 2023`,
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
          text: TITLES.AR.HOME,
          to: PATHS.HOME,
        },
        {
          isLink: false,
          text: TITLES.AR.ABOUTUS,
        },
      ],
      projects: {
        categoryPage: [
          {
            isLink: true,
            text: TITLES.AR.HOME,
            to: PATHS.HOME,
          },
          {
            isLink: false,
            text: TITLES.AR.PROJECTCATEGORIES,
          },
        ],
        projectPage: {
          hangers: [
            {
              isLink: true,
              text: TITLES.AR.HOME,
              to: PATHS.HOME,
            },
            {
              isLink: true,
              text: TITLES.AR.PROJECTCATEGORIES,
              to: PATHS.PROJECTCATEGORIES,
            },
            {
              isLink: false,
              text: TITLES.AR.PROJECTS.HANGERS,
            },
          ],
          bridges: [
            {
              isLink: true,
              text: TITLES.AR.HOME,
              to: PATHS.HOME,
            },
            {
              isLink: true,
              text: TITLES.AR.PROJECTCATEGORIES,
              to: PATHS.PROJECTCATEGORIES,
            },
            {
              isLink: false,
              text: TITLES.AR.PROJECTS.BRIDGES,
            },
          ],
          tubes: [
            {
              isLink: true,
              text: TITLES.AR.HOME,
              to: PATHS.HOME,
            },
            {
              isLink: true,
              text: TITLES.AR.PROJECTCATEGORIES,
              to: PATHS.PROJECTCATEGORIES,
            },
            {
              isLink: false,
              text: TITLES.AR.PROJECTS.TUBES,
            },
          ],
          canopies: [
            {
              isLink: true,
              text: TITLES.AR.HOME,
              to: PATHS.HOME,
            },
            {
              isLink: true,
              text: TITLES.AR.PROJECTCATEGORIES,
              to: PATHS.PROJECTCATEGORIES,
            },
            {
              isLink: false,
              text: TITLES.AR.PROJECTS.CANOPIES,
            },
          ],
          other: [
            {
              isLink: true,
              text: TITLES.AR.HOME,
              to: PATHS.HOME,
            },
            {
              isLink: true,
              text: TITLES.AR.PROJECTCATEGORIES,
              to: PATHS.PROJECTCATEGORIES,
            },
            {
              isLink: false,
              text: TITLES.AR.PROJECTS.OTHER,
            },
          ],
        },
      },
      ourFacility: [
        {
          isLink: true,
          text: TITLES.AR.HOME,
          to: PATHS.HOME,
        },
        {
          isLink: false,
          text: TITLES.AR.OURFACILITY,
        },
      ],
      contact: [
        {
          isLink: true,
          text: TITLES.AR.HOME,
          to: PATHS.HOME,
        },
        {
          isLink: false,
          text: TITLES.AR.CONTACT,
        },
      ],
    },
  },
};

export default arabicContent;
