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
    'https://github.com/gsilverio7/portfolio-website/blob/main/public/gabrielsilverio.vercel.app.png',
  url: 'https://gabrielsilverio.vercel.app/',
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
        light: '/lotties/dev-green2.json',
        dark: '/lotties/dev-green2.json',
      },
      points: [
        'Desenvolvimento de aplicações web completas',
        'Desenvolvimento de APIs RESTful',
        'Desenvolvimento seguindo as melhores práticas e padrões, como SOLID e Clean Code',
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
        { name: 'Bootstrap', icon: 'logos:bootstrap' },
        { name: 'JQuery', icon: 'skill-icons:jquery' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'express', icon: 'simple-icons:express' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
        { name: 'PHP', icon: 'logos:php' },
        { name: 'PHPUnit', icon: 'vscode-icons:file-type-phpunit' },
        { name: 'laravel', icon: 'logos:laravel' },
        { name: 'AWS S3', icon: 'logos:aws-s3' },
        { name: 'AWS DynamoDB', icon: 'logos:aws-lambda' },
        { name: 'AWS DynamoDB', icon: 'logos:aws-dynamodb' },
        { name: 'Docker', icon: 'skill-icons:docker' },
        //{ name: 'MongoDB', icon: 'skill-icons:mongodb' },
        //{ name: 'Redis', icon: 'logos:redis' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
        { name: 'SQLite', icon: 'skill-icons:sqlite' },
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
        'Desenvolvimento e manutenção de plataforma de CRM e de plataforma de testes de rodagem veicular.',
        'Criação de rotinas, migrações, novas telas e cadastros, testes automatizados.',
        'Trabalho com sistemas de controle de estoque, rastreamento de veículos, gerenciamento de documentos e outros.',
        'HTML/CSS/Bootstrap/JavaScript/Jquery/PHP/Laravel/MySQL/Git',
      ],
    },
    {
      company: 'DEC9',
      companyUrl: 'https://www.linkedin.com/company/dec9-marketing-e-tecnologia/',
      role: 'estagiário',
      started: 'julho 2020',
      upto: 'setembro 2020',
      tasks: [
        'Desenvolvimento e manutenção de páginas web, como landing pages, sites instituicionais e e-commerces.',
        'HTML/CSS/Bootstrap/JavaScript/WordPress/PHP/CodeIgniter',
      ],
    },
    {
      company: 'UFFTech',
      companyUrl: 'https://www.linkedin.com/company/ufftech/',
      role: 'diretor de Projetos',
      started: 'junho 2019',
      upto: 'julho 2020',
      tasks: [
        'Desenvolvimento e manutenção de páginas web, como landing pages.',
        'Treinar novos membros em desenvolvimento web.',
        'Liderança da equipe de projetos, utilizando Scrum.',
        'HTML/CSS/JavaScript/WordPress',
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
      name: 'News Aggregator',
      url: 'https://main.d2skzx6ijbdpfa.amplifyapp.com/',
      repo: 'https://github.com/gsilverio7/news-aggregator',
      img: 'https://raw.githubusercontent.com/gsilverio7/news-aggregator/main/imgs/screenshot.png',
      year: 2023,
      tags: ['NodeJs', 'React', 'DynamoDB'],
    },
    {
      id: getId(),
      name: 'Controle de Estoque',
      url: 'https://controle-de-estoque.fly.dev',
      repo: 'https://github.com/gsilverio7/controle-de-estoque',
      img: 'https://raw.githubusercontent.com/gsilverio7/controle-de-estoque/main/screenshots/login.png',
      year: 2023,
      tags: ['Laravel', 'JQuery', 'MySQL'],
    },
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
    {
      id: getId(),
      name: 'Super Mario JavaScript',
      url: 'https://gsilverio7.github.io/mario-javascript/',
      repo: 'https://github.com/gsilverio7/mario-javascript',
      img: 'https://raw.githubusercontent.com/gsilverio7/mario-javascript/master/imgs/super-mario-game-screenshot.png',
      year: 2023,
      tags: ['HTML', 'CSS', 'JavaScript'],
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
  title: 'Créditos para Vatsal Singh',
  link: 'https://github.com/vatsalsinghkv/portfolio-website',
};
