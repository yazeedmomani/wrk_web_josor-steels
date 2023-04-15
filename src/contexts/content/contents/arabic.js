import { PATHS, TITLES } from "../../../constants";

const arabic = {
  helmet: {
    defaultTemplate: `%s | ${TITLES.AR.COMPANY}`,
    homeTitle: TITLES.AR.HOME,
    aboutUsTitle: TITLES.AR.ABOUT_US,
    projectsTitle: TITLES.AR.PROJECT_CATEGORIES,
    hangersTitle: TITLES.AR.PROJECTS.HANGERS,
    bridgesTitle: TITLES.AR.PROJECTS.BRIDGES,
    tubesTitle: TITLES.AR.PROJECTS.TUBES,
    canopiesTitle: TITLES.AR.PROJECTS.CANOPIES,
    otherTitle: TITLES.AR.PROJECTS.OTHER,
    ourFacilityTitle: TITLES.AR.OUR_FACILITY,
    contactTitle: TITLES.AR.CONTACT,
  },
  nav: {
    homeLink: PATHS.HOME,
    desktopLinks: [
      { text: TITLES.AR.ABOUT_US, to: PATHS.ABOUT_US },
      { text: TITLES.AR.PROJECT_CATEGORIES, to: PATHS.PROJECT_CATEGORIES },
      { text: TITLES.AR.OUR_FACILITY, to: PATHS.OUR_FACILITY },
      { text: TITLES.AR.CONTACT, to: PATHS.CONTACT },
    ],
    modal: [
      {
        isProjects: false,
        text: TITLES.AR.ABOUT_US,
        to: PATHS.ABOUT_US,
      },
      {
        isProjects: true,
        text: TITLES.AR.PROJECT_CATEGORIES,
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
        text: TITLES.AR.OUR_FACILITY,
        to: PATHS.OUR_FACILITY,
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
            "ابدأ بتحديد متطلبات مشروعك ومواصفاته ، وتوفير أساس متين للتعاون وضمان تلبية جميع الاحتياجات.",
        },
        {
          title: "التصميم",
          description:
            "سيقوم فريق التصميم الماهر لدينا بإنشاء مخططات مبتكرة وفعالة ، وتكييفها مع رؤيتك الفريدة والالتزام بمعايير وأنظمة الصناعة.",
        },
        {
          title: "البناء",
          description:
            "سيعيد المتخصصون ذوو الخبرة لدينا مشروعك إلى الحياة ، باستخدام حرفية من الدرجة الأولى واستخدام مواد عالية الجودة لضمان السلامة الهيكلية وطول العمر.",
        },
        {
          title: "التوصيل",
          description:
            "عند الانتهاء ، سنقوم بفحص المنتج النهائي بدقة ، للتأكد من أنه يلبي معاييرنا العالية قبل تسليم المفاتيح لمشروعك الناجح والمصمم جيدًا.",
        },
      ],
    },
    about: {
      span: "عن الشركة",
      title: "مهمتنا",
      firstParagraph:
        "مهمتنا هي تأمين دور رائد في مجتمع تصنيع وتشييد الصلب ، مدفوعًا بخبرة فريقنا وتفانيه وبراعته في الإنتاج. نحن نقدر العلاقات طويلة الأمد التي أنشأناها مع عملائنا الكرام ، لأنها شهادة على التزامنا الراسخ بالتميز.",
      secondParagraph:
        "هدفنا الأساسي هو تقديم الفولاذ الهيكلي عالي الجودة ، وأعمال الزينة ، والحديد المتنوع ، مع ضمان رضا العملاء باستمرار. من خلال التعاون مع المقاولين ومديري الإنشاءات والملاك ، نهدف إلى تحقيق الإنجاز الناجح لكل مشروع ، وتعزيز شراكة مربحة لجميع الأطراف المعنية.",
      link: {
        text: "المزيد ←",
        to: PATHS.ABOUT_US,
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
    title: TITLES.AR.ABOUT_US,
    articles: [
      {
        title: "من نحن",
        firstParagraph:
          "في شركة Josor ، نحن متخصصون في تصنيع الفولاذ الهيكلي والمتنوع للأسواق الصناعية والتجارية. تقع منشأتنا في منطقة الهاشمية في ضواحي الزرقاء ، الأردن ، وتمتد على مساحة 3500 متر مربع. يتضمن المبنى مبنى تصنيع ضخمًا ، حيث تم تجهيز خليجنا الرئيسي برافعة علوية كبيرة تتميز بأقصى ارتفاع للخطاف ، مما يجعلها تستوعب حتى أكثر المشاريع تطلبًا. بالإضافة إلى ذلك ، لدينا منشأة شاملة للتنظيف والطلاء والسفع الرملي للفولاذ المعدني مجهزة بوحدات محمولة.",
        secondParagraph:
          "تعتبر الجودة ورضا العملاء من صميم قيمنا في Josor Steel Fabricators. نحن نلتزم بالمعايير البريطانية (BS) والقوانين المتعلقة بالبناء الفولاذي ، بما يتوافق مع قانون البناء الأردني ، بالإضافة إلى أي معايير أو رموز أخرى قد يطلبها عملاؤنا. تم تصميم تصميمات المشاريع وأوراق الحساب ورسومات التصنيع بدقة فائقة لضمان التميز. علاوة على ذلك ، فإن Josor Steel Fabricators حاصلة على ترخيص كامل للعمل في الأردن من قبل السلطات المحلية والهيئات ذات الصلة ، مما يدل على التزامنا بالحفاظ على معايير عالية وتقديم خدمة استثنائية.",
      },
      {
        title: "مهمتنا",
        firstParagraph:
          "مهمتنا هي تأمين دور رائد في مجتمع تصنيع وتشييد الصلب ، مدفوعًا بخبرة فريقنا وتفانيه وبراعته في الإنتاج. نحن نقدر العلاقات طويلة الأمد التي أنشأناها مع عملائنا الكرام ، لأنها شهادة على التزامنا الراسخ بالتميز.",
        secondParagraph:
          "هدفنا الأساسي هو تقديم الفولاذ الهيكلي عالي الجودة ، وأعمال الزينة ، والحديد المتنوع ، مع ضمان رضا العملاء باستمرار. من خلال التعاون مع المقاولين ومديري الإنشاءات والملاك ، نهدف إلى تحقيق الإنجاز الناجح لكل مشروع ، وتعزيز شراكة مربحة لجميع الأطراف المعنية.",
      },
    ],
    ourFacility: TITLES.AR.OUR_FACILITY,
    link: {
      text: "المزيد ←",
      to: PATHS.OUR_FACILITY,
    },
  },
  projects: {
    title: TITLES.AR.PROJECT_CATEGORIES,
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
    title: TITLES.AR.OUR_FACILITY,
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
          TITLES.AR.ABOUT_US,
          TITLES.AR.PROJECT_CATEGORIES,
          TITLES.AR.OUR_FACILITY,
          TITLES.AR.CONTACT,
        ],
        links: [
          {
            text: TITLES.AR.ABOUT_US,
            to: PATHS.ABOUT_US,
          },
          {
            text: TITLES.AR.PROJECT_CATEGORIES,
            to: PATHS.PROJECT_CATEGORIES,
          },
          {
            text: TITLES.AR.OUR_FACILITY,
            to: PATHS.OUR_FACILITY,
          },
          {
            text: TITLES.AR.CONTACT,
            to: PATHS.CONTACT,
          },
        ],
      },
      {
        title: TITLES.AR.PROJECT_CATEGORIES,
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
      phone: "+962797141950",
      email: "example@fabricators.com",
    },
    ContactIcon: {
      facebook: "https://www.facebook.com",
      linkedIn:
        "https://www.linkedin.com/company/josor-steel-fabricators-%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D8%AC%D8%B3%D9%88%D8%B1-%D9%84%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84-%D8%A7%D9%84%D9%85%D8%B9%D8%AF%D9%86%D9%8A%D8%A9/about/",
    },
    ProjectCard: {
      button: "عرض الصور ←",
    },
    Breadcrumb: {
      aboutUs: [
        {
          isLink: true,
          text: TITLES.AR.HOME,
          to: PATHS.HOME,
        },
        {
          isLink: false,
          text: TITLES.AR.ABOUT_US,
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
            text: TITLES.AR.PROJECT_CATEGORIES,
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
              text: TITLES.AR.PROJECT_CATEGORIES,
              to: PATHS.PROJECT_CATEGORIES,
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
              text: TITLES.AR.PROJECT_CATEGORIES,
              to: PATHS.PROJECT_CATEGORIES,
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
              text: TITLES.AR.PROJECT_CATEGORIES,
              to: PATHS.PROJECT_CATEGORIES,
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
              text: TITLES.AR.PROJECT_CATEGORIES,
              to: PATHS.PROJECT_CATEGORIES,
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
              text: TITLES.AR.PROJECT_CATEGORIES,
              to: PATHS.PROJECT_CATEGORIES,
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
          text: TITLES.AR.OUR_FACILITY,
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

export default arabic;
