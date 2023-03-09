import { PATHS } from "../constants/";

const titles = {
  company: "Josor Steels",
  home: "Home",
  aboutUs: "About us",
  projects: {
    title: "Projects",
    children: {
      hangers: "Hangers",
      bridges: "Bridges",
      tubes: "Tubes",
      canopies: "Canopies",
      other: "Other",
    },
  },
  ourFacility: "Our facility",
  contact: "Contact",
};

const englishContent = {
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
    ourFacilityTitle: "Our Facility",
    contactTitle: titles.contact,
  },
  nav: {
    homeLink: PATHS.HOME,
    desktopLinks: [
      { text: titles.aboutUs, to: PATHS.ABOUTUS },
      { text: titles.projects.title, to: PATHS.PROJECTS.PATH },
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
            to: PATHS.PROJECTS.CHILDREN.HANGERS,
          },
          {
            text: titles.projects.children.bridges,
            to: PATHS.PROJECTS.CHILDREN.BRIDGES,
          },
          {
            text: titles.projects.children.tubes,
            to: PATHS.PROJECTS.CHILDREN.TUBES,
          },
          {
            text: titles.projects.children.canopies,
            to: PATHS.PROJECTS.CHILDREN.CANOPIES,
          },
          {
            text: titles.projects.children.other,
            to: PATHS.PROJECTS.CHILDREN.OTHER,
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
          title: titles.projects.children.hangers,
          alt: "Hanger",
          to: PATHS.PROJECTS.CHILDREN.HANGERS,
          image: "hangers",
        },
        {
          title: titles.projects.children.bridges,
          alt: "Bridge",
          to: PATHS.PROJECTS.CHILDREN.BRIDGES,
          image: "bridges",
        },
        {
          title: titles.projects.children.tubes,
          alt: "tube",
          to: PATHS.PROJECTS.CHILDREN.TUBES,
          image: "tubes",
        },
        {
          title: titles.projects.children.canopies,
          alt: "Canopy",
          to: PATHS.PROJECTS.CHILDREN.CANOPIES,
          image: "canopies",
        },
        {
          title: titles.projects.children.other,
          alt: "Other",
          to: PATHS.PROJECTS.CHILDREN.OTHER,
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
    title: titles.aboutUs,
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
    ourFacility: titles.ourFacility,
    link: {
      text: "More images →",
      to: PATHS.OURFACILITY,
    },
  },
  projects: {
    title: titles.projects.title,
    categoryCards: [
      {
        title: titles.projects.children.hangers,
        alt: "Hanger",
        to: PATHS.PROJECTS.CHILDREN.HANGERS,
        image: "hangers",
      },
      {
        title: titles.projects.children.bridges,
        alt: "Bridge",
        to: PATHS.PROJECTS.CHILDREN.BRIDGES,
        image: "bridges",
      },
      {
        title: titles.projects.children.tubes,
        alt: "tube",
        to: PATHS.PROJECTS.CHILDREN.TUBES,
        image: "tubes",
      },
      {
        title: titles.projects.children.canopies,
        alt: "Canopy",
        to: PATHS.PROJECTS.CHILDREN.CANOPIES,
        image: "canopies",
      },
      {
        title: titles.projects.children.other,
        alt: "Other",
        to: PATHS.PROJECTS.CHILDREN.OTHER,
        image: "other",
      },
    ],
    categoryPages: {
      hangers: {
        title: titles.projects.children.hangers,
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
        title: titles.projects.children.bridges,
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
        title: titles.projects.children.tubes,
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
        title: titles.projects.children.canopies,
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
        title: titles.projects.children.other,
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
    title: titles.ourFacility,
  },
  contact: {
    title: titles.contact,
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
            text: titles.aboutUs,
            to: PATHS.ABOUTUS,
          },
          {
            text: titles.projects.title,
            to: PATHS.PROJECTS.PATH,
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
            to: PATHS.PROJECTS.CHILDREN.HANGERS,
          },
          {
            text: titles.projects.children.bridges,
            to: PATHS.PROJECTS.CHILDREN.BRIDGES,
          },
          {
            text: titles.projects.children.tubes,
            to: PATHS.PROJECTS.CHILDREN.TUBES,
          },
          {
            text: titles.projects.children.canopies,
            to: PATHS.PROJECTS.CHILDREN.CANOPIES,
          },
          {
            text: titles.projects.children.other,
            to: PATHS.PROJECTS.CHILDREN.OTHER,
          },
        ],
      },
    ],
    copyright: `${titles.company} © 2023`,
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
              to: PATHS.PROJECTS.PATH,
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
              to: PATHS.PROJECTS.PATH,
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
              to: PATHS.PROJECTS.PATH,
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
              to: PATHS.PROJECTS.PATH,
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
              to: PATHS.PROJECTS.PATH,
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

export default englishContent;
