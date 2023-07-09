import { StringKeyValueType } from '../types';
import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  github: 'https://github.com/gsilverio7',
  linkedin: 'https://www.linkedin.com/in/gabriel-silvério-526171192/',
};

export const author = {
  name: 'Gabriel Silverio',
  email: 'bielsil27@gmail.com',
};

export const seoData = {
  title: 'Gabriel Silvério | Web Developer',
  description:
    'Gabriel Silvério é um desenvolvedor web',
  author: author.name,
  image:
    'https://user-images.githubusercontent.com/68834718/217467445-0b0d2d63-f8ad-4702-8474-814eb2cbb3be.png',
  url: 'https://vatsalsinghkv.vercel.app/',
  keywords: [
    'Gabriel',
    'Gabriel Silvério'
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'sobre', url: '/#about' },
    { name: 'habilidades', url: '/#skills' },
    { name: 'experiencia', url: '/#experience' },
    { name: 'projetos', url: '/#projects' },
    { name: 'contato', url: '/#contact' },
  ],
  cta: {
    title: 'Curriculo',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Prazer em conhecer, me chamo',
  title: 'Gabriel Silvério.',
  tagline: 'Desenvolvedor Web',
  description:
    "Sou um desenvolvedor web com mais de 03 anos de experiência, trabalhando principalmente com Javascript, PHP, Laravel e MySQL",
  // description:
  //   "I'm a passionate Full Stack web developer having an experience of web  applications with React.js, Next.js and Blockchain development on Ethereum, Solidity and Web3.js.",
  // specialText: 'Currently available for remote job & freelance',
  // either button or simple text (information)
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'sobre',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Algumas das tecnologias que tenho trabalhado e estudado recentemente:',
    items: [
      'PHP',
      'Laravel',
      'MySQL',
      'JavaScript',
      'TypeScript',
      'Nodejs',
      'Java'
      // 'API Rest',
      // 'Test Driven Development',
    ],
  },
  img: '/myProfile.jpg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'Habilidades',
  skills: [
    {
      id: getId(),
      title: 'desenvolvimento full stack',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        //light: '/lotties/frontend.json',
        light: '/lotties/91451-developer-blue.json',
        //dark: '/lotties/frontend-dark.json',
        dark: '/lotties/91451-developer-blue.json',
      },
      points: [
        'Desenvolvimento de aplicações web completas',
        'Desenvolvimento de APIs RESTful ou GraphQl',
        'Desenvolvimento seguindo as melhores práticas e padrões, como SOLID, Clean Code e TDD',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        // { name: 'express', icon: 'logos:express' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
        { name: 'PHP', icon: 'logos:php' },
        { name: 'laravel', icon: 'logos:laravel' },
        { name: 'mySQL', icon: 'logos:mysql' },
      ],
    },
    /*
    {
      id: getId(),
      title: 'UI/UX designing',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Experience in designing user-friendly interfaces with figma',
        'Experience in developing design systems and style guides',
        'Providing user-friendly design solutions',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
      ],
    },
    */
    /* {
      id: getId(),
      title: 'blockchain development',
      lottie: {
        light: '/lotties/ethereum.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: [
        'Experience in developing Smart Contract using Solidity & Ethereum',
        'Developing NFT Smart Contracts using ERC-721 Token Standard',
        'Building Dapps with React.js & Solidity using Web3.js',
      ],
      softwareSkills: [
        { name: 'ethereum', icon: 'logos:ethereum' },
        { name: 'solidity', icon: 'logos:solidity' },
        { name: 'web3js', icon: 'logos:web3js' },
        { name: 'metamask', icon: 'logos:metamask-icon' },
      ],
    }, */
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "Experiência",
  experiences: [
    {
      company: 'Previsiown',
      companyUrl: 'https://www.linkedin.com/company/previsiown/',
      role: 'desenvolvedor full stack',
      started: 'dezembro 2020',
      upto: 'atualmente',
      tasks: [
        'Built trading platform using TradingView library.',
        'Designed SHMTH Capital website with Next.js, TypeScript & TailwindCSS.',
        'Collaborated with diverse nationwide team of developers.',
      ],
    },
    {
      company: 'DEC9',
      companyUrl: 'https://www.linkedin.com/company/dec9-marketing-e-tecnologia/',
      role: 'estagiário',
      started: 'julho 2020',
      upto: 'setembro 2020',
      tasks: [
        'Built static frontend UI from the ground up using Next.js and Figma handover designs.',
        'Architected the folder structure and initial setup of the app.',
        'Reviewed and approved multiple Pull requests.',
        'Worked remotely with a distributed team from around the globe, collaborating closely using screen-sharing.',
      ],
    },
    {
      company: 'UFFTech',
      companyUrl: 'https://www.linkedin.com/company/ufftech/',
      role: 'diretor de Projetos',
      started: 'junho 2019',
      upto: 'julho 2020',
      tasks: [
        'Designed social media posts.',
        'Worked remotely with designing & tech team.',
      ],
    },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'projetos',
  projects: [
    {
      id: getId(),
      name: 'fylo landing page',
      url: 'https://fylo-kv.netlify.app/',
      repo: 'https://github.com/vatsalsinghkv/fylo',
      img: 'https://user-images.githubusercontent.com/68834718/212843973-ef864a5a-f393-4901-b422-6f775a043cdb.png',
      year: 2023,
      tags: ['Html', 'Tailwind', 'TS'],
    },
    {
      id: getId(),
      name: 'remotive jobs',
      url: 'https://remotive-jobs.vercel.app/',
      repo: 'https://github.com/vatsalsinghkv/remotive-jobs',
      img: 'https://user-images.githubusercontent.com/68834718/189035104-aa71647e-33e4-442a-a2f9-c0d50bba2db1.png',
      year: 2022,
      tags: ['Nextjs', 'Sass'],
    },
    {
      id: getId(),
      name: 'countries app',
      url: 'https://countries-app-kv.netlify.app/',
      repo: 'https://github.com/vatsalsinghkv/rest-countries-api',
      img: 'https://user-images.githubusercontent.com/68834718/169527851-19fefb2e-e440-411a-a8a1-4767e2c8688a.png',
      year: 2022,
      tags: ['React', 'Sass'],
    },
    {
      id: getId(),
      name: 'rock paper scissors',
      url: 'https://rock-paper-scissors-kv.netlify.app/',
      repo: 'https://github.com/vatsalsinghkv/rock-paper-scissors',
      img: 'https://user-images.githubusercontent.com/68834718/162578706-b9e57735-6fbc-4c7b-8243-2a6ba447404e.jpg',
      year: 2022,
      tags: ['React', 'Sass'],
    },
    {
      id: getId(),
      name: 'todo app',
      url: 'https://todo-kv.netlify.app/',
      repo: 'https://github.com/vatsalsinghkv/todo-app',
      img: 'https://user-images.githubusercontent.com/68834718/152794002-0e7bc583-084b-4c39-83bb-d82d5dd642b2.png',
      year: 2022,
      tags: ['React', 'Sass', 'JS'],
    },
    {
      id: getId(),
      name: 'weather app',
      url: 'https://weather-kv.netlify.app/',
      repo: 'https://github.com/vatsalsinghkv/weather-app',
      img: 'https://user-images.githubusercontent.com/68834718/148419702-491fa08d-e520-4e2f-b219-374ec7118b2b.png',
      year: 2022,
      tags: ['Html', 'sass', 'JS', 'jQuery'],
    },
    {
      id: getId(),
      name: 'blogr landing page',
      url: 'https://blogr-kv.netlify.app/',
      repo: 'https://github.com/vatsalsinghkv/blogr-landing-page',
      img: 'https://user-images.githubusercontent.com/68834718/210222542-6455303d-c93e-430b-a5c8-96a431044184.png',
      year: 2021,
      tags: ['html', 'sass', 'JS'],
    },
    {
      id: getId(),
      name: 'natours',
      url: 'https://natours-kv.netlify.app/',
      repo: 'https://github.com/vatsalsinghkv/natours',
      img: 'https://user-images.githubusercontent.com/68834718/210223114-b4f64b44-2501-49c9-9fb7-b8e53fe654c6.png',
      year: 2021,
      tags: ['html', 'sass', 'JS'],
    },
    // {
    //   name: 'nexter',
    //   url: 'https://vatsalsinghkv.github.io/nexter/',
    //   repo: 'https://github.com/vatsalsinghkv/nexter',
    //   img: 'https://user-images.githubusercontent.com/68834718/210224671-5501c5d9-a8d2-4044-a14c-38fb7e46a113.png',
    //   year: 2021,
    //   tags: ['html', 'sass'],
    // },
    {
      id: getId(),
      name: 'IP address tracker',
      url: 'https://vatsalsinghkv.github.io/ip-address-tracker/',
      repo: 'https://github.com/vatsalsinghkv/ip-address-tracker',
      img: 'https://user-images.githubusercontent.com/68834718/210223386-03bcaa20-e649-4b3d-8709-59e42c6d685a.png',
      year: 2021,
      tags: ['html', 'bootstrap', 'JS'],
    },
    {
      id: getId(),
      name: 'calculator app',
      url: 'https://vatsalsinghkv.github.io/calculator-app/',
      repo: 'https://github.com/vatsalsinghkv/calculator-app/',
      img: 'https://user-images.githubusercontent.com/68834718/210223825-3b68d696-39c6-490c-9433-f315b7efccbd.png',
      year: 2021,
      tags: ['html', 'CSS', 'JS'],
    },
    {
      id: getId(),
      name: 'pig game',
      url: 'https://vatsalsinghkv.github.io/pig-game/',
      repo: 'https://github.com/vatsalsinghkv/pig-game',
      img: 'https://user-images.githubusercontent.com/68834718/210223527-de7fde7a-244e-4db5-8e33-d561afad6084.png',
      year: 2021,
      tags: ['html', 'CSS', 'JS'],
    },
    {
      id: getId(),
      name: 'bankist marketing',
      url: 'https://vatsalsinghkv.github.io/bankist-marketing/',
      repo: 'https://github.com/vatsalsinghkv/bankist-marketing',
      img: 'https://user-images.githubusercontent.com/68834718/210225545-989f79c3-cf05-4c53-b48e-b21f373b3734.png',
      year: 2021,
      tags: ['html', 'CSS', 'JS'],
    },
    {
      id: getId(),
      name: 'digital clock',
      url: 'https://vatsalsinghkv.github.io/digital-clock/',
      repo: 'https://github.com/vatsalsinghkv/digital-clock',
      img: 'https://user-images.githubusercontent.com/68834718/210226274-a453ba15-9b83-4577-a84d-e4b88e0a5605.png',
      year: 2021,
      tags: ['html', 'CSS', 'JS'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'Vamos conversar!',
  subtitle: "contato",
  paragraphs: [
    'Caso tenha se interessado, me mande um email, e vamos juntos criar em algo incrível!',
    //'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Designed by Vatsal Singh',
  link: 'https://github.com/vatsalsinghkv/portfolio-website',
};
