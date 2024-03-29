import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';
import fullStackAnimation from './lottie/skills/fullstack.json';
import cloudAnimation from './lottie/skills/cloudinfra.json';
import websiteBuilderAnimation from './lottie/skills/website_builder.json';

export const greetings: GreetingsType = {
  name: 'Danilo Rodriguez',
  title: "Hi all, I'm Danilo",
  description:
    "I'm a Frontend Web Developer specializing in React, JavaScript, TypeScript, Next.js, Firebase, Stripe, and cloud platforms like Azure and AWS. With a knack for seamless UI/UX and mobile app development using React Native, I transform ideas into captivating digital solutions. Let's collaborate and bring your vision to life.",
  resumeLink:
    'https://docs.google.com/document/d/1TV3Dum1GkbCoh3NXXBdcqWDPJPWyYjaVf8fnv3y0fdk/edit?usp=sharing',
};

export const openSource = {
  githubUserName: 'Rodez97',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/danilo-rodr%C3%ADguez-03b9731a4/',
  github: 'https://github.com/Rodez97',
  instagram: 'https://www.instagram.com/rodez_cl/',
  facebook: 'https://www.facebook.com/alexdanilo.rodriguez',
  twitter: 'https://twitter.com/Rodez_97',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Frontend Development',
      lottieAnimationFile: fullStackAnimation, // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive websites using Next.js'),
        emoji(
          '⚡ Creating application using React Js, Next Js, Redux, Tailwind CSS, Material UI, Styled Components'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          iconifyTag: 'logos:typescript-icon',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Tailwind CSS',
          iconifyTag: 'logos:tailwindcss-icon',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Git',
          iconifyTag: 'logos:git-icon',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: cloudAnimation, // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Designing scalable Applications on cloud platforms along with web security fundamentals'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'Firebase',
          iconifyTag: 'logos:firebase',
        },
        {
          skillName: 'OneSignal',
          iconifyTag: 'logos:onesignal',
        },
        {
          skillName: 'Netlify',
          iconifyTag: 'logos:netlify',
        },
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Website Builders',
      lottieAnimationFile: websiteBuilderAnimation, // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Create websites using website builders like Webflow & Wordpress'
        ),
        emoji(
          '⚡ Keep your website up-to-date with the latest trends and technologies'
        ),
        emoji('⚡ Create a website that is fast, responsive and SEO friendly'),
      ],
      softwareSkills: [
        {
          skillName: 'Webflow',
          iconifyTag: 'logos:webflow',
        },
        {
          skillName: 'Wordpress',
          iconifyTag: 'logos:wordpress-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'ReactJS', //Insert stack or technology you have experience in
    progressPercentage: '100', //Insert relative proficiency in percentage
  },
  {
    Stack: 'NextJS',
    progressPercentage: '90',
  },
  {
    Stack: 'Javascript',
    progressPercentage: '90',
  },
  {
    Stack: 'Typescript',
    progressPercentage: '90',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Harvard University',
    subHeader: 'Master of Science in Computer Science',
    duration: 'September 2017 - April 2019',
    desc: 'Participated in the research of XXX and published 3 papers.',
    grade: 'Grade A',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Full Stack Developer',
    company: 'Cyberlight',
    companyLogo: '/img/icons/common/CyberlightLogo.png',
    date: '2019 - 2021',
    desc: 'At Cyberlight, I specialized in crafting websites, primarily catering to businesses in the restaurant industry. I also played a significant role in developing mobile applications and games. My toolkit revolved around HTML, JavaScript, CSS, and WordPress. Additionally, I leveraged Node.js and React Native for mobile app development.',
  },
  {
    role: 'Founder and Full Stack Developer',
    company: 'Cuttinboard',
    companyLogo: '/img/icons/common/Cuttinboard.png',
    link: 'https://cuttinboard.com/',
    date: '2020 - Present',
    desc: 'A collaborative effort with a friend, I led the entire development process. Employing technologies like React, Expo React Native, Webflow, Stripe, SendinBlue API, Firebase, OneSignal, TypeScript, and Redux, we created Cuttinboard. This platform revolutionizes restaurant management, offering a comprehensive solution to address the unique challenges of the hospitality industry. From scheduling and messaging to employee management, inventory tracking, and more, Cuttinboard optimizes operations and enhances overall efficiency for restaurant owners, managers, and staff.',
  },
  {
    role: 'Founder and Full Stack Developer',
    company: 'Schedulify',
    companyLogo: '/img/icons/common/Schedulify.png',
    link: 'https://schedulify.pro/',
    date: 'Jun 2023 - Present',
    desc: 'A project solely crafted by me, I harnessed the capabilities of Next.js, Gatsby.js, React, Firebase, SendinBlue, TypeScript, and Node.js. Schedulify introduces a no-cost staff scheduling solution, streamlining the complexities of generating and overseeing employee schedules. Its intuitive interface, vital functionalities, and adaptability cater to diverse scheduling requirements of businesses.',
  },
  {
    role: 'API Engineer and Backend Developer',
    company: 'LobbyAll',
    companyLogo: '/img/icons/common/LobbyAll.png',
    date: 'Aug 2023',
    desc: "I played a pivotal role in enhancing the platform's functionality by seamlessly integrating Stripe payment gateway and establishing a robust connection with Strapi for streamlined data management. Leveraging my expertise in React, Next.js, and Next-Auth, I ensured a secure and efficient user experience. JavaScript served as my primary tool to orchestrate this successful integration, enabling smooth transactions and data flow.",
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Monetize Your Guild',
    desc: 'Turn your Discord server into a revenue stream with this innovative application. Developed with Next.js, TypeScript, and React, the platform uses the Discord API and Stripe SDK to facilitate secure server monetization. It provides owners with an intuitive control panel to manage payments and customize options, delivering a hassle-free experience to transform communities into financial opportunities.',
    github: 'https://github.com/Rodez97/discord-stripe-full',
    link: 'https://monetizeyourguild.pro/',
  },
  {
    name: 'Schedulify',
    desc: 'A project solely crafted by me, I harnessed the capabilities of Next.js, Gatsby.js, React, Firebase, SendinBlue, TypeScript, and Node.js. Schedulify introduces a no-cost staff scheduling solution, streamlining the complexities of generating and overseeing employee schedules. Its intuitive interface, vital functionalities, and adaptability cater to diverse scheduling requirements of businesses.',
    github: 'https://github.com/Rodez97/Schedulify',
    link: 'https://schedulify.pro/',
  },
  {
    name: 'Cuttinboard',
    desc: 'A collaborative effort with a friend, I led the entire development process. Employing technologies like React, Expo React Native, Webflow, Stripe, SendinBlue API, Firebase, OneSignal, TypeScript, and Redux, we created Cuttinboard. This platform revolutionizes restaurant management, offering a comprehensive solution to address the unique challenges of the hospitality industry. From scheduling and messaging to employee management, inventory tracking, and more, Cuttinboard optimizes operations and enhances overall efficiency for restaurant owners, managers, and staff.',
    github: 'https://github.com/Rodez97/Cuttinboard-Web',
    link: 'https://cuttinboard.webflow.io/',
  },
  {
    name: 'Cyberlight Website',
    desc: 'This website was developed using pure HTML, CSS, and JavaScript. This project was a great opportunity to hone my skills and learn new techniques.',
    github: 'https://github.com/Rodez97/PaginaWEB',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Maria Garcia',
    feedback:
      "Danilo Rodríguez's expertise as a web developer is truly remarkable. He transformed our restaurant's online presence with a stunning website and a seamless reservation system. His mastery of technologies like React, Firebase, and Node.js ensured our platform's efficiency and security. His dedication to detail and responsive design made the entire experience a pleasure. We're grateful for his contribution to our success.",
  },
  {
    name: 'John Smith',
    feedback:
      "Working with Danilo on our mobile app was an absolute delight. His proficiency in React Native and Redux translated into an app that exceeded our expectations. His understanding of user experience and elegant UI designs made navigating the app a breeze. Danilo's commitment to quality and his timely delivery made him a valuable asset to our project. We look forward to future collaborations.",
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Danilo Rodríguez | Frontend Developer',
  description: 'A passionate Frontend Web Developer',
  author: 'Danilo Rodríguez',
  image:
    'https://avatars.githubusercontent.com/u/35657153?s=400&u=399b0cc660bea7b63060efbd0df8a4fd9faba284&v=4',
  url: 'https://rodez.digital',
  keywords: [
    'Danilo',
    'Danilo Rodríguez',
    '@Rodez97',
    'Rodez97',
    'Portfolio',
    'Danilo Portfolio ',
    'Danilo Rodríguez Portfolio',
  ],
};
