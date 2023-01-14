import path from "./link-paths";
import common from "./common-content";

const titles = common.ar.titles;

const arabicContent = {
  helmet: {
    defaultTemplate: `%s | ${titles.company}`,
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
    homeLink: path.home,
    modal: [
      {
        isProjects: false,
        text: "عنا",
        to: path.aboutUs,
      },
      {
        isProjects: true,
        text: "مشاريع",
        links: [
          {
            text: "هناجر",
            to: path.projects.children.hangers,
          },
          {
            text: "جسور",
            to: path.projects.children.bridges,
          },
          {
            text: "أنابيب",
            to: path.projects.children.tubes,
          },
          {
            text: "مظلات",
            to: path.projects.children.canopies,
          },
          {
            text: "أخرى",
            to: path.projects.children.other,
          },
        ],
      },
      {
        isProjects: false,
        text: "منشأتنا",
        to: path.ourFacility,
      },
      {
        isProjects: false,
        text: "تواصل معنا",
        to: path.contact,
      },
    ],
  },
  home: {
    header: {
      title: titles.company,
      subTitle: "أطلق العنان لخيالك مع فولاذنا الثابت القوي",
      primaryButton: {
        text: "تواصل معنا",
        to: path.contact,
      },
      secondaryButton: "المزيد",
    },
    services: {
      span: "خدماتنا الاحترافية",
      title: "نتولى مجموعة متنوعة من المشاريع",
      projectCat: [
        {
          title: "هناجر",
          alt: "هنجر",
          to: path.projects.children.hangers,
          image: "hangers",
        },
        {
          title: "جسور",
          alt: "جسر",
          to: path.projects.children.bridges,
          image: "bridges",
        },
        {
          title: "أنابيب",
          alt: "أنبوب",
          to: path.projects.children.tubes,
          image: "tubes",
        },
        {
          title: "مظلات",
          alt: "مظلة",
          to: path.projects.children.canopies,
          image: "canopies",
        },
        {
          title: "أخرى",
          alt: "أخرى",
          to: path.projects.children.other,
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
        to: path.aboutUs,
      },
    },
    contact: {
      title: "هل اقتنعت بنا؟ تواصل معنا!",
      button: {
        text: "تواصل معنا",
        to: path.contact,
      },
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
    link: {
      text: "المزيد ←",
      to: path.ourFacility,
    },
  },
  projects: {
    title: "مشاريع",
    categoryCards: [
      {
        title: "هناجر",
        alt: "هنجر",
        to: path.projects.children.hangers,
        image: "hangers",
      },
      {
        title: "جسور",
        alt: "جسر",
        to: path.projects.children.bridges,
        image: "bridges",
      },
      {
        title: "أنابيب",
        alt: "أنبوب",
        to: path.projects.children.tubes,
        image: "tubes",
      },
      {
        title: "مظلات",
        alt: "مظلة",
        to: path.projects.children.canopies,
        image: "canopies",
      },
      {
        title: "أخرى",
        alt: "أخرى",
        to: path.projects.children.other,
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
    logoLink: path.home,
    links: [
      {
        title: "صفحات",
        links: ["عنا", "مشاريع", "منشأتنا", "تواصل معنا"],
        links: [
          {
            text: "عنا",
            to: path.aboutUs,
          },
          {
            text: "مشاريع",
            to: path.projects.path,
          },
          {
            text: "منشأتنا",
            to: path.ourFacility,
          },
          {
            text: "تواصل معنا",
            to: path.contact,
          },
        ],
      },
      {
        title: "مشاريع",
        links: [
          {
            text: "هناجر",
            to: path.projects.children.hangers,
          },
          {
            text: "جسور",
            to: path.projects.children.bridges,
          },
          {
            text: "أنابيب",
            to: path.projects.children.tubes,
          },
          {
            text: "مظلات",
            to: path.projects.children.canopies,
          },
          {
            text: "أخرى",
            to: path.projects.children.other,
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
      to: path.home,
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
          text: "الرئيسية",
          to: path.home,
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
            to: path.home,
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
              to: path.home,
            },
            {
              isLink: true,
              text: "مشاريع",
              to: path.projects.path,
            },
            {
              isLink: false,
              text: titles.projects.children.hangers,
            },
          ],
          bridges: [
            {
              isLink: true,
              text: "الرئيسية",
              to: path.home,
            },
            {
              isLink: true,
              text: "مشاريع",
              to: path.projects.path,
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
              to: path.home,
            },
            {
              isLink: true,
              text: "مشاريع",
              to: path.projects.path,
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
              to: path.home,
            },
            {
              isLink: true,
              text: "مشاريع",
              to: path.projects.path,
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
              to: path.home,
            },
            {
              isLink: true,
              text: "مشاريع",
              to: path.projects.path,
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
          to: path.home,
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
          to: path.home,
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
