import {
  Python,
  django,
  abromart,
  backend,
  bootstrap,
  codedrops,
  corrtex,
  creator,
  css,
  veggie,
  fib,
  figma,
  git,
  github,
  gitlab,
  gmail,
  html,
  instagram,
  jQuery,
  javascript,
  linkedin,
  mobile,
  reactjs,
  redux,
  restro,
  tailwind,
  twitter,
  typescript,
  web,
  Shamba,
  Donor,
  Umma
} from "../assets";

export const navLinks = [
  {
    id: "home",
    desktop: "",
    title: "Home",
  },
  {
    id: "work",
    desktop: "work",
    title: "Work",
  },
  {
    id: "contact",
    desktop: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Responsive Web Design",
    icon: web,
  },
  {
    title: "FullStack Web Development",
    icon: mobile,
  },
  {
    title: "Bockchain Development",
    icon: backend,
  },
  {
    title: "Website Optimization",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "jQuery",
    icon: jQuery,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Python",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Tech Lead",
    company_name: "Umma University",
    icon: codedrops,
    iconBg: "#383E56",
    date: "Sept 2023 - April 2024",
    points: [
      "Mentored students in programming and software development, fostering a strong technical foundation and problem-solving mindset.",
      "Organized workshops on cloud,web development and blockchain, helping students build hands-on skills in troubleshooting and technical solutions.",
     
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Freelance",
    icon: codedrops,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Developing responsive web apps with React, Redux Toolkit, and TypeScript.",
      "Provided solutions involving cloud integration and optimized code for performance, achieving high client satisfaction through reliable and secure implementations.",
      "Collaborating with cross-functional teams to deliver quality web apps on time and within budget.",
      "Improving React development practices within the team to boost efficiency and quality.",
    ],
  },
];

const socials = [
  {
    image: linkedin,
    link: "https://www.linkedin.com/in/zaid-mohammed07/"
  },
  {
    image: github,
    link: "https://github.com/zaidsaid-007"
  },
  {
    image: twitter,
    link: "https://twitter.com/Intellizaed"
  },
  {
    image: gmail,
    link: "mailto:zaidsaid007@gmail.com"
  }
]

const projects = [
  {
    name: "VeggieMart",
    description:
      "An online marketplace that connects consumers with fresh local produce. It streamlines the ordering and delivery process using a user-friendly platform, integrating email confirmations, real-time delivery tracking, and MPesa payments. It enhances supply chain visibility and user experience.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "orange-text-gradient"
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: veggie,
    openSource: false,
    source_code_link: "https://github.com/zaidsaid-007/VeggieMart-2.0",
  },
  {
    name: "Shamba-Kikwetu",
    description:
      "A blockchain-based platform addressing land disputes in Kenya by creating tamper-proof and immutable land records using ICP Blockchain technology. It simplifies land transfers, promotes transparency, and enhances land security to drive economic growth.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Rust",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient"
      },

    ],
    image: Shamba,
    openSource: false,
    source_code_link: "https://github.com/Shamba-Kikwetu",
  },
  {
    name: "Ummanetic",
    description:
      "An e-commerce platform built with ReactJS and Firebase, designed for seamless online shopping. It features a dynamic UI, third-party API integrations, authentication, and real-time database management, offering a smooth user experience.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      }
    ],
    image: Umma,
    openSource: false,
    source_code_link: "http://nischal.caandd.com/",
  },
  {
    name: "Donor Fund Tracker",
    description:
      " A web-based platform designed to track and manage donor funds transparently. It ensures accountability by recording donations, monitoring fund distribution, and generating real-time reports. Built with modern web technologies, it enhances trust between donors and recipients.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: Donor,
    openSource: false,
    source_code_link: "https://github.com/zaidsaid-007/donor-fund-tracker",
  },
];

export { services, technologies, experiences, projects, socials };
