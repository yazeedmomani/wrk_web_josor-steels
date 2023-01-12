const englishContent = {
  helmet: {
    defaultTemplate: "%s | Josor Steels",
    homeTitle: "Home",
    aboutUsTitle: "About us",
    projectsTitle: "Projects",
    hangersTitle: "Hangers",
    bridgesTitle: "Bridges",
    tubesTitle: "Tubes",
    canopiesTitle: "Canopies",
    otherTitle: "Other",
    ourFacilityTitle: "Our Facility",
    contactTitle: "Contact",
  },
  nav: [
    {
      isProjects: false,
      text: "About us",
      to: "/about-us",
    },
    {
      isProjects: true,
      text: "Projects",
      links: [
        {
          text: "Hangers",
          to: "/projects/hangers",
        },
        {
          text: "Bridges",
          to: "/projects/bridges",
        },
        {
          text: "Tubes",
          to: "/projects/tubes",
        },
        {
          text: "Canopies",
          to: "/projects/canopies",
        },
        {
          text: "Other",
          to: "/projects/other",
        },
      ],
    },
    {
      isProjects: false,
      text: "Our facility",
      to: "/our-facility",
    },
    {
      isProjects: false,
      text: "Contact",
      to: "/contact",
    },
  ],
  home: {
    header: {
      title: "Josor Steels",
      subTitle: "Let your imagination go wild with our strong stable steels",
      primaryButton: "Contact us",
      secondaryButton: "Learn more",
    },
    services: {
      span: "Professional services",
      title: "We take on a wide variety of projects",
      projectCat: [
        {
          title: "Hangers",
          alt: "Hanger",
          to: "/projects/hangers",
          image: "hangers",
        },
        {
          title: "Bridges",
          alt: "Bridge",
          to: "/projects/bridges",
          image: "bridges",
        },
        {
          title: "Tubes",
          alt: "tube",
          to: "/projects/tubes",
          image: "tubes",
        },
        {
          title: "Canopies",
          alt: "Canopy",
          to: "/projects/canopies",
          image: "canopies",
        },
        {
          title: "Other",
          alt: "other",
          to: "/projects/other",
          image: "other",
        },
      ],
    },
    steps: {
      span: "How it works",
      title: "Construct in 4 simple steps",
      steps: [
        {
          title: "Application",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Design",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Construction",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Delivery",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    about: {
      span: "About company",
      title: "Our mission",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      link: "Learn more →",
    },
    contact: {
      title: "Let's get in touch!",
      button: "Contact us",
    },
  },
  // TODO add to arabic content Start here
  Projects: {
    categoryCards: [
      {
        title: "Hangers",
        alt: "Hanger",
        to: "/projects/hangers",
        image: "hangers",
      },
      {
        title: "Bridges",
        alt: "Bridge",
        to: "/projects/bridges",
        image: "bridges",
      },
      {
        title: "Tubes",
        alt: "tube",
        to: "/projects/tubes",
        image: "tubes",
      },
      {
        title: "Canopies",
        alt: "Canopy",
        to: "/projects/canopies",
        image: "canopies",
      },
      {
        title: "Other",
        alt: "other",
        to: "/projects/other",
        image: "other",
      },
    ],
    CategoryPages: {
      hangers: {
        title: "Hangers",
        projectCards: [
          {
            title: "Project 01",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 02",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 03",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 04",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 05",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 06",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 07",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 08",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 09",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 10",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      },
      bridges: {
        title: "Bridges",
        projectCards: [
          {
            title: "Project 01",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 02",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 03",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 04",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 05",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 06",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 07",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 08",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      },
      tubes: {
        title: "Tubes",
        projectCards: [
          {
            title: "Project 01",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 02",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 03",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 04",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 05",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      },
      canopies: {
        title: "Canopies",
        projectCards: [
          {
            title: "Project 01",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 02",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      },
      other: {
        title: "Other",
        projectCards: [
          {
            title: "Project 01",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 02",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 03",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 04",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 05",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 06",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 07",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 08",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 09",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 10",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 11",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 12",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 13",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 14",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 15",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            title: "Project 16",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      },
    },
  },
  // End here
  footer: {
    links: [
      {
        title: "Pages",
        links: [
          {
            text: "About us",
            to: "/about-us",
          },
          {
            text: "Projects",
            to: "/projects",
          },
          {
            text: "Our facility",
            to: "/our-facility",
          },
          {
            text: "Contact",
            to: "/contact",
          },
        ],
      },
      {
        title: "Projects",
        links: [
          {
            text: "Hangers",
            to: "/projects/hangers",
          },
          {
            text: "Bridges",
            to: "/projects/bridges",
          },
          {
            text: "Tubes",
            to: "/projects/tubes",
          },
          {
            text: "Canopies",
            to: "/projects/canopies",
          },
          {
            text: "Other",
            to: "/projects/other",
          },
        ],
      },
    ],
    copyright: "Josor Steels © 2023",
  },
  components: {
    ContactInfo: {
      phone: "+962791621064",
      email: "example@fabricators.com",
    },
    ProjectCard: {
      button: "View images →",
    },
  },
};

export default englishContent;
