import { PATHS, TITLES } from "../constants/";

const englishContent = {
  helmet: {
    defaultTemplate: `%s | ${TITLES.EN.COMPANY}`,
    homeTitle: TITLES.EN.HOME,
    aboutUsTitle: TITLES.EN.ABOUTUS,
    projectsTitle: TITLES.EN.PROJECTCATEGORIES,
    hangersTitle: TITLES.EN.PROJECTS.HANGERS,
    bridgesTitle: TITLES.EN.PROJECTS.BRIDGES,
    tubesTitle: TITLES.EN.PROJECTS.TUBES,
    canopiesTitle: TITLES.EN.PROJECTS.CANOPIES,
    otherTitle: TITLES.EN.PROJECTS.OTHER,
    ourFacilityTitle: "Our Facility",
    contactTitle: TITLES.EN.CONTACT,
  },
  nav: {
    homeLink: PATHS.HOME,
    desktopLinks: [
      { text: TITLES.EN.ABOUTUS, to: PATHS.ABOUTUS },
      { text: TITLES.EN.PROJECTCATEGORIES, to: PATHS.PROJECTCATEGORIES },
      { text: TITLES.EN.OURFACILITY, to: PATHS.OURFACILITY },
      { text: TITLES.EN.CONTACT, to: PATHS.CONTACT },
    ],
    modal: [
      {
        isProjects: false,
        text: TITLES.EN.ABOUTUS,
        to: PATHS.ABOUTUS,
      },
      {
        isProjects: true,
        text: TITLES.EN.PROJECTCATEGORIES,
        links: [
          {
            text: TITLES.EN.PROJECTS.HANGERS,
            to: PATHS.PROJECTS.HANGERS,
          },
          {
            text: TITLES.EN.PROJECTS.BRIDGES,
            to: PATHS.PROJECTS.BRIDGES,
          },
          {
            text: TITLES.EN.PROJECTS.TUBES,
            to: PATHS.PROJECTS.TUBES,
          },
          {
            text: TITLES.EN.PROJECTS.CANOPIES,
            to: PATHS.PROJECTS.CANOPIES,
          },
          {
            text: TITLES.EN.PROJECTS.OTHER,
            to: PATHS.PROJECTS.OTHER,
          },
        ],
      },
      {
        isProjects: false,
        text: TITLES.EN.OURFACILITY,
        to: PATHS.OURFACILITY,
      },
      {
        isProjects: false,
        text: TITLES.EN.CONTACT,
        to: PATHS.CONTACT,
      },
    ],
  },
  home: {
    header: {
      title: TITLES.EN.COMPANY,
      subTitle: "Let your imagination go wild with our strong stable steels",
      primaryButton: {
        text: "Contact us",
        to: PATHS.CONTACT,
      },
      secondaryButton: "Learn more",
    },
    services: {
      span: "Professional services",
      title: "We take on a wide variety of projects",
      projectCat: [
        {
          title: TITLES.EN.PROJECTS.HANGERS,
          alt: "Hanger",
          to: PATHS.PROJECTS.HANGERS,
          image: "hangers",
        },
        {
          title: TITLES.EN.PROJECTS.BRIDGES,
          alt: "Bridge",
          to: PATHS.PROJECTS.BRIDGES,
          image: "bridges",
        },
        {
          title: TITLES.EN.PROJECTS.TUBES,
          alt: "tube",
          to: PATHS.PROJECTS.TUBES,
          image: "tubes",
        },
        {
          title: TITLES.EN.PROJECTS.CANOPIES,
          alt: "Canopy",
          to: PATHS.PROJECTS.CANOPIES,
          image: "canopies",
        },
        {
          title: TITLES.EN.PROJECTS.OTHER,
          alt: "Other",
          to: PATHS.PROJECTS.OTHER,
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
      link: {
        text: "Learn more →",
        to: PATHS.ABOUTUS,
      },
    },
    contact: {
      title: "Let's get in touch!",
      button: {
        text: "Contact us",
        to: PATHS.CONTACT,
      },
    },
  },
  aboutUs: {
    title: TITLES.EN.ABOUTUS,
    articles: [
      {
        title: "Who we are",
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
      {
        title: "Our mission",
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
    ],
    ourFacility: TITLES.EN.OURFACILITY,
    link: {
      text: "More images →",
      to: PATHS.OURFACILITY,
    },
  },
  projects: {
    title: TITLES.EN.PROJECTCATEGORIES,
    categoryCards: [
      {
        title: TITLES.EN.PROJECTS.HANGERS,
        alt: "Hanger",
        to: PATHS.PROJECTS.HANGERS,
        image: "hangers",
      },
      {
        title: TITLES.EN.PROJECTS.BRIDGES,
        alt: "Bridge",
        to: PATHS.PROJECTS.BRIDGES,
        image: "bridges",
      },
      {
        title: TITLES.EN.PROJECTS.TUBES,
        alt: "tube",
        to: PATHS.PROJECTS.TUBES,
        image: "tubes",
      },
      {
        title: TITLES.EN.PROJECTS.CANOPIES,
        alt: "Canopy",
        to: PATHS.PROJECTS.CANOPIES,
        image: "canopies",
      },
      {
        title: TITLES.EN.PROJECTS.OTHER,
        alt: "Other",
        to: PATHS.PROJECTS.OTHER,
        image: "other",
      },
    ],
    categoryPages: {
      hangers: {
        title: TITLES.EN.PROJECTS.HANGERS,
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
        title: TITLES.EN.PROJECTS.BRIDGES,
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
        title: TITLES.EN.PROJECTS.TUBES,
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
        title: TITLES.EN.PROJECTS.CANOPIES,
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
        title: TITLES.EN.PROJECTS.OTHER,
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
  ourFacility: {
    title: TITLES.EN.OURFACILITY,
  },
  contact: {
    title: TITLES.EN.CONTACT,
    infoTitle: "Info",
    address: "Somewhere street, Apt. 21, Amman, Jordan, 11953",
    followTitle: "Follow us at",
  },
  footer: {
    logoLink: PATHS.HOME,
    links: [
      {
        title: "Pages",
        links: [
          {
            text: TITLES.EN.ABOUTUS,
            to: PATHS.ABOUTUS,
          },
          {
            text: TITLES.EN.PROJECTCATEGORIES,
            to: PATHS.PROJECTCATEGORIES,
          },
          {
            text: TITLES.EN.OURFACILITY,
            to: PATHS.OURFACILITY,
          },
          {
            text: TITLES.EN.CONTACT,
            to: PATHS.CONTACT,
          },
        ],
      },
      {
        title: TITLES.EN.PROJECTCATEGORIES,
        links: [
          {
            text: TITLES.EN.PROJECTS.HANGERS,
            to: PATHS.PROJECTS.HANGERS,
          },
          {
            text: TITLES.EN.PROJECTS.BRIDGES,
            to: PATHS.PROJECTS.BRIDGES,
          },
          {
            text: TITLES.EN.PROJECTS.TUBES,
            to: PATHS.PROJECTS.TUBES,
          },
          {
            text: TITLES.EN.PROJECTS.CANOPIES,
            to: PATHS.PROJECTS.CANOPIES,
          },
          {
            text: TITLES.EN.PROJECTS.OTHER,
            to: PATHS.PROJECTS.OTHER,
          },
        ],
      },
    ],
    copyright: `${TITLES.EN.COMPANY} © 2023`,
  },
  notFound: {
    title: "404",
    ops: "oops! Nothing was found",
    description:
      "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
    link: {
      text: "Return to homepage",
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
      button: "View images →",
    },
    PathNav: {
      aboutUs: [
        {
          isLink: true,
          text: TITLES.EN.HOME,
          to: PATHS.HOME,
        },
        {
          isLink: false,
          text: TITLES.EN.ABOUTUS,
        },
      ],
      projects: {
        categoryPage: [
          {
            isLink: true,
            text: TITLES.EN.HOME,
            to: PATHS.HOME,
          },
          {
            isLink: false,
            text: TITLES.EN.PROJECTCATEGORIES,
          },
        ],
        projectPage: {
          hangers: [
            {
              isLink: true,
              text: TITLES.EN.HOME,
              to: PATHS.HOME,
            },
            {
              isLink: true,
              text: TITLES.EN.PROJECTCATEGORIES,
              to: PATHS.PROJECTCATEGORIES,
            },
            {
              isLink: false,
              text: TITLES.EN.PROJECTS.HANGERS,
            },
          ],
          bridges: [
            {
              isLink: true,
              text: TITLES.EN.HOME,
              to: PATHS.HOME,
            },
            {
              isLink: true,
              text: TITLES.EN.PROJECTCATEGORIES,
              to: PATHS.PROJECTCATEGORIES,
            },
            {
              isLink: false,
              text: TITLES.EN.PROJECTS.BRIDGES,
            },
          ],
          tubes: [
            {
              isLink: true,
              text: TITLES.EN.HOME,
              to: PATHS.HOME,
            },
            {
              isLink: true,
              text: TITLES.EN.PROJECTCATEGORIES,
              to: PATHS.PROJECTCATEGORIES,
            },
            {
              isLink: false,
              text: TITLES.EN.PROJECTS.TUBES,
            },
          ],
          canopies: [
            {
              isLink: true,
              text: TITLES.EN.HOME,
              to: PATHS.HOME,
            },
            {
              isLink: true,
              text: TITLES.EN.PROJECTCATEGORIES,
              to: PATHS.PROJECTCATEGORIES,
            },
            {
              isLink: false,
              text: TITLES.EN.PROJECTS.CANOPIES,
            },
          ],
          other: [
            {
              isLink: true,
              text: TITLES.EN.HOME,
              to: PATHS.HOME,
            },
            {
              isLink: true,
              text: TITLES.EN.PROJECTCATEGORIES,
              to: PATHS.PROJECTCATEGORIES,
            },
            {
              isLink: false,
              text: TITLES.EN.PROJECTS.OTHER,
            },
          ],
        },
      },
      ourFacility: [
        {
          isLink: true,
          text: TITLES.EN.HOME,
          to: PATHS.HOME,
        },
        {
          isLink: false,
          text: TITLES.EN.OURFACILITY,
        },
      ],
      contact: [
        {
          isLink: true,
          text: TITLES.EN.HOME,
          to: PATHS.HOME,
        },
        {
          isLink: false,
          text: TITLES.EN.CONTACT,
        },
      ],
    },
  },
};

export default englishContent;
