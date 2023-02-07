import path from "./link-paths";
import common from "./common-content";

const titles = common.en.titles;

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
    homeLink: path.home,
    desktopLinks: [
      { text: titles.aboutUs, to: path.aboutUs },
      { text: titles.projects.title, to: path.projects.path },
      { text: titles.ourFacility, to: path.ourFacility },
      { text: titles.contact, to: path.contact },
    ],
    modal: [
      {
        isProjects: false,
        text: titles.aboutUs,
        to: path.aboutUs,
      },
      {
        isProjects: true,
        text: titles.projects.title,
        links: [
          {
            text: titles.projects.children.hangers,
            to: path.projects.children.hangers,
          },
          {
            text: titles.projects.children.bridges,
            to: path.projects.children.bridges,
          },
          {
            text: titles.projects.children.tubes,
            to: path.projects.children.tubes,
          },
          {
            text: titles.projects.children.canopies,
            to: path.projects.children.canopies,
          },
          {
            text: titles.projects.children.other,
            to: path.projects.children.other,
          },
        ],
      },
      {
        isProjects: false,
        text: titles.ourFacility,
        to: path.ourFacility,
      },
      {
        isProjects: false,
        text: titles.contact,
        to: path.contact,
      },
    ],
  },
  home: {
    header: {
      title: titles.company,
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
          title: titles.projects.children.hangers,
          alt: "Hanger",
          to: path.projects.children.hangers,
          image: "hangers",
        },
        {
          title: titles.projects.children.bridges,
          alt: "Bridge",
          to: path.projects.children.bridges,
          image: "bridges",
        },
        {
          title: titles.projects.children.tubes,
          alt: "tube",
          to: path.projects.children.tubes,
          image: "tubes",
        },
        {
          title: titles.projects.children.canopies,
          alt: "Canopy",
          to: path.projects.children.canopies,
          image: "canopies",
        },
        {
          title: titles.projects.children.other,
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
      to: path.ourFacility,
    },
  },
  projects: {
    title: titles.projects.title,
    categoryCards: [
      {
        title: titles.projects.children.hangers,
        alt: "Hanger",
        to: path.projects.children.hangers,
        image: "hangers",
      },
      {
        title: titles.projects.children.bridges,
        alt: "Bridge",
        to: path.projects.children.bridges,
        image: "bridges",
      },
      {
        title: titles.projects.children.tubes,
        alt: "tube",
        to: path.projects.children.tubes,
        image: "tubes",
      },
      {
        title: titles.projects.children.canopies,
        alt: "Canopy",
        to: path.projects.children.canopies,
        image: "canopies",
      },
      {
        title: titles.projects.children.other,
        alt: "Other",
        to: path.projects.children.other,
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
    logoLink: path.home,
    links: [
      {
        title: "Pages",
        links: [
          {
            text: titles.aboutUs,
            to: path.aboutUs,
          },
          {
            text: titles.projects.title,
            to: path.projects.path,
          },
          {
            text: titles.ourFacility,
            to: path.ourFacility,
          },
          {
            text: titles.contact,
            to: path.contact,
          },
        ],
      },
      {
        title: titles.projects.title,
        links: [
          {
            text: titles.projects.children.hangers,
            to: path.projects.children.hangers,
          },
          {
            text: titles.projects.children.bridges,
            to: path.projects.children.bridges,
          },
          {
            text: titles.projects.children.tubes,
            to: path.projects.children.tubes,
          },
          {
            text: titles.projects.children.canopies,
            to: path.projects.children.canopies,
          },
          {
            text: titles.projects.children.other,
            to: path.projects.children.other,
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
          text: titles.home,
          to: path.home,
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
            to: path.home,
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
              to: path.home,
            },
            {
              isLink: true,
              text: titles.projects.title,
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
              text: titles.home,
              to: path.home,
            },
            {
              isLink: true,
              text: titles.projects.title,
              to: path.projects.path,
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
              to: path.home,
            },
            {
              isLink: true,
              text: titles.projects.title,
              to: path.projects.path,
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
              to: path.home,
            },
            {
              isLink: true,
              text: titles.projects.title,
              to: path.projects.path,
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
              to: path.home,
            },
            {
              isLink: true,
              text: titles.projects.title,
              to: path.projects.path,
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
          to: path.home,
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
          to: path.home,
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
