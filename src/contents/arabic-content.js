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
  nav: [
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
        },
        {
          title: "جسور",
          alt: "جسر",
          to: "/projects/bridges",
        },
        {
          title: "أنابيب",
          alt: "أنبوب",
          to: "/projects/tubes",
        },
        {
          title: "مظلات",
          alt: "مظلة",
          to: "/projects/canopies",
        },
        {
          title: "أخرى",
          alt: "أخرى",
          to: "/projects/other",
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
  footer: {
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
  components: {
    ContactInfo: {
      phone: "+962791621064",
      email: "example@fabricators.com",
    },
  },
};

export default arabicContent;
