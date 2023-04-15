import { PATHS, TITLES } from "../../../constants";

const english = {
  helmet: {
    defaultTemplate: `%s | ${TITLES.EN.COMPANY}`,
    homeTitle: TITLES.EN.HOME,
    aboutUsTitle: TITLES.EN.ABOUT_US,
    projectsTitle: TITLES.EN.PROJECT_CATEGORIES,
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
      { text: TITLES.EN.ABOUT_US, to: PATHS.ABOUT_US },
      { text: TITLES.EN.PROJECT_CATEGORIES, to: PATHS.PROJECT_CATEGORIES },
      { text: TITLES.EN.OUR_FACILITY, to: PATHS.OUR_FACILITY },
      { text: TITLES.EN.CONTACT, to: PATHS.CONTACT },
    ],
    modal: [
      {
        isProjects: false,
        text: TITLES.EN.ABOUT_US,
        to: PATHS.ABOUT_US,
      },
      {
        isProjects: true,
        text: TITLES.EN.PROJECT_CATEGORIES,
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
        text: TITLES.EN.OUR_FACILITY,
        to: PATHS.OUR_FACILITY,
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
      firstParagraph:
        "Our mission is to secure a leading role in the steel fabrication and construction community, driven by our team's expertise, dedication, and production prowess. We value the long-lasting relationships we have established with our esteemed clients, as they are a testament to our unwavering commitment to excellence.",
      secondParagraph:
        "Our primary objective is to deliver high-quality structural steel, ornamental, and miscellaneous iron work, while consistently ensuring customer satisfaction. By collaborating with contractors, construction managers, and owners, we aim to achieve the successful completion of each project, fostering a win-win partnership for all parties involved.",
      link: {
        text: "Learn more →",
        to: PATHS.ABOUT_US,
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
    title: TITLES.EN.ABOUT_US,
    articles: [
      {
        title: "Who we are",
        firstParagraph:
          "At Josor Steel Fabrications, we specialize in structural and miscellaneous steel fabrication for the industrial and commercial markets. Our facility is situated in the Al-Hashmeyyah area on the outskirts of Zarqa, Jordan, spanning a 3,500 square meter site. The premises include a sizable fabrication building, where our main bay is outfitted with a large overhead crane that boasts a maximum hook height, accommodating even the most demanding projects. Additionally, we have a comprehensive metal steel cleaning, painting, and sandblasting facility equipped with portable units.",
        secondParagraph:
          "Quality and customer satisfaction are at the core of our values at Josor Steel Fabricators. We adhere to the British Standards (BS) and codes related to steel construction, in compliance with the Jordanian Building Code, as well as any other standards or codes our customers may require. Our project designs, calculation sheets, and fabrication drawings are meticulously crafted to ensure excellence. Furthermore, Josor Steel Fabricators is fully licensed to operate in Jordan by the local authorities and relevant bodies, demonstrating our commitment to maintaining high standards and delivering exceptional service.",
      },
      {
        title: "Our mission",
        firstParagraph:
          "Our mission is to secure a leading role in the steel fabrication and construction community, driven by our team's expertise, dedication, and production prowess. We value the long-lasting relationships we have established with our esteemed clients, as they are a testament to our unwavering commitment to excellence.",
        secondParagraph:
          "Our primary objective is to deliver high-quality structural steel, ornamental, and miscellaneous iron work, while consistently ensuring customer satisfaction. By collaborating with contractors, construction managers, and owners, we aim to achieve the successful completion of each project, fostering a win-win partnership for all parties involved.",
      },
    ],
    ourFacility: TITLES.EN.OUR_FACILITY,
    link: {
      text: "More images →",
      to: PATHS.OUR_FACILITY,
    },
  },
  projects: {
    title: TITLES.EN.PROJECT_CATEGORIES,
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
    title: TITLES.EN.OUR_FACILITY,
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
            text: TITLES.EN.ABOUT_US,
            to: PATHS.ABOUT_US,
          },
          {
            text: TITLES.EN.PROJECT_CATEGORIES,
            to: PATHS.PROJECT_CATEGORIES,
          },
          {
            text: TITLES.EN.OUR_FACILITY,
            to: PATHS.OUR_FACILITY,
          },
          {
            text: TITLES.EN.CONTACT,
            to: PATHS.CONTACT,
          },
        ],
      },
      {
        title: TITLES.EN.PROJECT_CATEGORIES,
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
    Breadcrumb: {
      aboutUs: [
        {
          isLink: true,
          text: TITLES.EN.HOME,
          to: PATHS.HOME,
        },
        {
          isLink: false,
          text: TITLES.EN.ABOUT_US,
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
            text: TITLES.EN.PROJECT_CATEGORIES,
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
              text: TITLES.EN.PROJECT_CATEGORIES,
              to: PATHS.PROJECT_CATEGORIES,
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
              text: TITLES.EN.PROJECT_CATEGORIES,
              to: PATHS.PROJECT_CATEGORIES,
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
              text: TITLES.EN.PROJECT_CATEGORIES,
              to: PATHS.PROJECT_CATEGORIES,
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
              text: TITLES.EN.PROJECT_CATEGORIES,
              to: PATHS.PROJECT_CATEGORIES,
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
              text: TITLES.EN.PROJECT_CATEGORIES,
              to: PATHS.PROJECT_CATEGORIES,
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
          text: TITLES.EN.OUR_FACILITY,
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

export default english;
