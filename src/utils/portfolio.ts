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
  name: 'Gabriel Silvério.',
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
    '',
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
    title: '',
    items: [
      /*
      'PHP',
      'Laravel',
      'MySQL',
      'JavaScript',
      'TypeScript',
      'Nodejs',
      'Java'
      // 'API Rest',
      // 'Test Driven Development',
      */
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
        light: '/lotties/dev-green2.json',
        //dark: '/lotties/frontend-dark.json',
        dark: '/lotties/dev-green2.json',
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
        { name: 'Bootstrap', icon: 'logos:bootstrap' },
        { name: 'JQuery', icon: 'skill-icons:jquery' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        // { name: 'express', icon: 'logos:express' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
        { name: 'PHP', icon: 'logos:php' },
        { name: 'PHPUnit', icon: 'vscode-icons:file-type-phpunit' },
        { name: 'laravel', icon: 'logos:laravel' },
        { name: 'AWS S3', icon: 'logos:aws-s3' },
        // quero adicionar:
        { name: 'AWS DynamoDB', icon: 'logos:aws-dynamodb' },
        { name: 'Docker', icon: 'skill-icons:docker' },
        { name: 'MongoDB', icon: 'skill-icons:mongodb' },
        { name: 'Redis', icon: 'logos:redis' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
        { name: 'SQLite', icon: 'skill-icons:sqlite' },
        //
        { name: 'MySQL', icon: 'logos:mysql' },
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
      name: 'Be the hero',
      url: 'https://becomethehero.vercel.app',
      repo: 'https://github.com/gsilverio7/be-the-hero',
      img: 'https://raw.githubusercontent.com/gsilverio7/be-the-hero/master/imgs/print1.png',
      year: 2023,
      tags: ['NodeJs', 'React', 'React Native'],
    },
    {
      id: getId(),
      name: 'PHP Bible RESTful API',
      url: 'https://phpbible.vercel.app',
      repo: 'https://github.com/gsilverio7/PHPBibleAPI',
      img: 'https://raw.githubusercontent.com/gsilverio7/PHPBibleAPI/master/pictures/phpbibleapi.png',
      year: 2023,
      tags: ['PHP', 'PHPUnit', 'Swagger'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'Vamos conversar!',
  subtitle: "contato",
  paragraphs: [
    //'Caso tenha se interessado, me mande um email, e vamos juntos criar em algo incrível!',
    //'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  buttonText: 'Enviar Email',
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
  title: 'Credits to Vatsal Singh',
  link: 'https://github.com/vatsalsinghkv/portfolio-website',
};
