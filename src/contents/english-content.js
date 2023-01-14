import path from "./link-paths";
import common from "./common-content";

const titles = common.en.titles;

const englishContent = {
  helmet: {
    defaultTemplate: `%s | ${titles.company}`,
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
  nav: {
    homeLink: path.home,
    modal: [
      {
        isProjects: false,
        text: "About us",
        to: path.aboutUs,
      },
      {
        isProjects: true,
        text: "Projects",
        links: [
          {
            text: "Hangers",
            to: path.projects.children.hangers,
          },
          {
            text: "Bridges",
            to: path.projects.children.bridges,
          },
          {
            text: "Tubes",
            to: path.projects.children.tubes,
          },
          {
            text: "Canopies",
            to: path.projects.children.canopies,
          },
          {
            text: "Other",
            to: path.projects.children.other,
          },
        ],
      },
      {
        isProjects: false,
        text: "Our facility",
        to: path.ourFacility,
      },
      {
        isProjects: false,
        text: "Contact",
        to: path.contact,
      },
    ],
  },
  home: {
    header: {
      title: "Josor Steels",
      subTitle: "Let your imagination go wild with our strong stable steels",
      primaryButton: {
        text: "Contact us",
        to: path.contact,
      },
      secondaryButton: "Learn more",
    },
    services: {
      span: "Professional services",
      title: "We take on a wide variety of projects",
      projectCat: [
        {
          title: "Hangers",
          alt: "Hanger",
          to: path.projects.children.hangers,
          image: "hangers",
        },
        {
          title: "Bridges",
          alt: "Bridge",
          to: path.projects.children.bridges,
          image: "bridges",
        },
        {
          title: "Tubes",
          alt: "tube",
          to: path.projects.children.tubes,
          image: "tubes",
        },
        {
          title: "Canopies",
          alt: "Canopy",
          to: path.projects.children.canopies,
          image: "canopies",
        },
        {
          title: "Other",
          alt: "Other",
          to: path.projects.children.other,
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
        to: path.aboutUs,
      },
    },
    contact: {
      title: "Let's get in touch!",
      button: {
        text: "Contact us",
        to: path.contact,
      },
    },
  },
  aboutUs: {
    title: "About us",
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
    ourFacility: "Our facility",
    link: {
      text: "More images →",
      to: path.ourFacility,
    },
  },
  projects: {
    title: "Projects",
    categoryCards: [
      {
        title: "Hangers",
        alt: "Hanger",
        to: path.projects.children.hangers,
        image: "hangers",
      },
      {
        title: "Bridges",
        alt: "Bridge",
        to: path.projects.children.bridges,
        image: "bridges",
      },
      {
        title: "Tubes",
        alt: "tube",
        to: path.projects.children.tubes,
        image: "tubes",
      },
      {
        title: "Canopies",
        alt: "Canopy",
        to: path.projects.children.canopies,
        image: "canopies",
      },
      {
        title: "Other",
        alt: "other",
        to: path.projects.children.other,
        image: "other",
      },
    ],
    categoryPages: {
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
  ourFacility: {
    title: "Our facility",
  },
  contact: {
    title: "Contact",
    infoTitle: "Info",
    address: "Somewhere street, Apt. 21, Amman, Jordan, 11953",
    followTitle: "Follow us at",
  },
  footer: {
    logoLink: path.home,
    links: [
      {
        title: "Pages",
        links: [
          {
            text: "About us",
            to: path.aboutUs,
          },
          {
            text: "Projects",
            to: path.projects.path,
          },
          {
            text: "Our facility",
            to: path.ourFacility,
          },
          {
            text: "Contact",
            to: path.contact,
          },
        ],
      },
      {
        title: "Projects",
        links: [
          {
            text: "Hangers",
            to: path.projects.children.hangers,
          },
          {
            text: "Bridges",
            to: path.projects.children.bridges,
          },
          {
            text: "Tubes",
            to: path.projects.children.tubes,
          },
          {
            text: "Canopies",
            to: path.projects.children.canopies,
          },
          {
            text: "Other",
            to: path.projects.children.other,
          },
        ],
      },
    ],
    copyright: "Josor Steels © 2023",
  },
  notFound: {
    title: "404",
    ops: "oops! Nothing was found",
    description:
      "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
    link: {
      text: "Return to homepage",
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
      button: "View images →",
    },
    PathNav: {
      aboutUs: [
        {
          isLink: true,
          text: "Home",
          to: path.home,
        },
        {
          isLink: false,
          text: "About",
        },
      ],
      projects: {
        categoryPage: [
          {
            isLink: true,
            text: "Home",
            to: path.home,
          },
          {
            isLink: false,
            text: "Projects",
          },
        ],
        projectPage: {
          hangers: [
            {
              isLink: true,
              text: "Home",
              to: path.home,
            },
            {
              isLink: true,
              text: "Projects",
              to: path.projects.path,
            },
            {
              isLink: false,
              text: "Hangers",
            },
          ],
          bridges: [
            {
              isLink: true,
              text: "Home",
              to: path.home,
            },
            {
              isLink: true,
              text: "Projects",
              to: path.projects.path,
            },
            {
              isLink: false,
              text: "Bridges",
            },
          ],
          tubes: [
            {
              isLink: true,
              text: "Home",
              to: path.home,
            },
            {
              isLink: true,
              text: "Projects",
              to: path.projects.path,
            },
            {
              isLink: false,
              text: "Tubes",
            },
          ],
          canopies: [
            {
              isLink: true,
              text: "Home",
              to: path.home,
            },
            {
              isLink: true,
              text: "Projects",
              to: path.projects.path,
            },
            {
              isLink: false,
              text: "Canopies",
            },
          ],
          other: [
            {
              isLink: true,
              text: "Home",
              to: path.home,
            },
            {
              isLink: true,
              text: "Projects",
              to: path.projects.path,
            },
            {
              isLink: false,
              text: "Other",
            },
          ],
        },
      },
      ourFacility: [
        {
          isLink: true,
          text: "Home",
          to: path.home,
        },
        {
          isLink: false,
          text: "Our facility",
        },
      ],
      contact: [
        {
          isLink: true,
          text: "Home",
          to: path.home,
        },
        {
          isLink: false,
          text: "Contact",
        },
      ],
    },
  },
};

export default englishContent;
