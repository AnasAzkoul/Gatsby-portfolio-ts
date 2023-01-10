export type NavLinkType = {
  id: number;
  text: string;
};

export const navLinks: NavLinkType[] = [
  { id: 1, text: `home` },
  { id: 2, text: `about me` },
  { id: 3, text: `projects` },
  { id: 4, text: `contact` },
];

export const technologies = [
  { id: 1, text: `html` },
  { id: 2, text: `css` },
  { id: 3, text: `sass` },
  { id: 4, text: `tailwind` },
  { id: 5, text: `javascript` },
  { id: 6, text: `typescript` },
  { id: 7, text: `react` },
  { id: 8, text: `nextjs` },
  { id: 9, text: `gatsby` },
  { id: 10, text: `nodejs` },
  { id: 11, text: `express` },
  { id: 12, text: `mongoDB` },
];

export type Project = {
  id: number;
  name: string;
  title: string;
  description: string;
  stack: string[];
  links: {
    github: string;
    liveVersion: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    name: `ecogym`,
    title: `landing page for an imaginary gym`,
    description: `This is a gym website Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Obcaecati reiciendis nostrum esse beatae dolor tenetur, quidem
    vero reprehenderit saepe id, accusamus qui amet magni
    voluptatum iste at! Ipsum, esse non.`,
    stack: [`React`, `Typescript`, `Tailwind`, `Framer Motion`],
    links: {
      github: `https://github.com/AnasAzkoul/ecogym.git`,
      liveVersion: `https://inquisitive-dango-7ca2d8.netlify.app/`,
    },
  },
  {
    id: 2,
    name: `comfy store`,
    title: `an imaginary full stack e-commerce website`,
    description: `This is a furniture website Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Obcaecati reiciendis nostrum esse beatae dolor tenetur, quidem
    vero reprehenderit saepe id, accusamus qui amet magni
    voluptatum iste at! Ipsum, esse non.`,
    stack: [`react`, `react router dom`, `styled components`, `stripe`],
    links: {
      github: `https://github.com/AnasAzkoul/react-onlineshopping.git`,
      liveVersion: `https://comfy-store-4d5fae.netlify.app/`,
    },
  },
  {
    id: 3,
    name: `cafe shop`,
    title: `an imaginary full stack e-commerce website`,
    description: `This is a furniture website Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Obcaecati reiciendis nostrum esse beatae dolor tenetur, quidem
    vero reprehenderit saepe id, accusamus qui amet magni
    voluptatum iste at! Ipsum, esse non.`,
    stack: [`react`, `react router dom`, `styled components`, `stripe`],
    links: {
      github: `https://github.com/AnasAzkoul/react-onlineshopping.git`,
      liveVersion: `https://comfy-store-4d5fae.netlify.app/`,
    },
  },
  {
    id: 4,
    name: `Martin`,
    title: `an imaginary full stack e-commerce website`,
    description: `This is a furniture website Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Obcaecati reiciendis nostrum esse beatae dolor tenetur, quidem
    vero reprehenderit saepe id, accusamus qui amet magni
    voluptatum iste at! Ipsum, esse non.`,
    stack: [`react`, `react router dom`, `styled components`, `stripe`],
    links: {
      github: `https://github.com/AnasAzkoul/react-onlineshopping.git`,
      liveVersion: `https://comfy-store-4d5fae.netlify.app/`,
    },
  },
  {
    id: 5,
    name: `Ahmad Aboud`,
    title: `an imaginary full stack e-commerce website`,
    description: `This is a furniture website Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Obcaecati reiciendis nostrum esse beatae dolor tenetur, quidem
    vero reprehenderit saepe id, accusamus qui amet magni
    voluptatum iste at! Ipsum, esse non.`,
    stack: [`react`, `react router dom`, `styled components`, `stripe`],
    links: {
      github: `https://github.com/AnasAzkoul/react-onlineshopping.git`,
      liveVersion: `https://comfy-store-4d5fae.netlify.app/`,
    },
  },
  {
    id: 6,
    name: `Something Very Long`,
    title: `an imaginary full stack e-commerce website`,
    description: `This is a furniture website Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Obcaecati reiciendis nostrum esse beatae dolor tenetur, quidem
    vero reprehenderit saepe id, accusamus qui amet magni
    voluptatum iste at! Ipsum, esse non.`,
    stack: [`react`, `react router dom`, `styled components`, `stripe`],
    links: {
      github: `https://github.com/AnasAzkoul/react-onlineshopping.git`,
      liveVersion: `https://comfy-store-4d5fae.netlify.app/`,
    },
  },
];
