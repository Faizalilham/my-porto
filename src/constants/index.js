import {
  frontend,
  backend,
  ux,
  prototyping,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  kotlin,
  java,
  dart,
  android,
  git,
  firebase,
  flutter,
  api,
  darahku,
  myairfare,
  attendance,
  siapaud
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Android Developer',
    icon: android,
  },
  {
    title: 'Multi Platform App Developer',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'Kotlin',
    icon: kotlin,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Android',
    icon: android,
  },
  {
    name: 'Dart',
    icon: dart,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Restful API',
    icon: api,
  },
  {
    name: 'Firebase',
    icon: firebase,
  }
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  // {
  //   name: 'git',
  //   icon: git,
  // },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'Mentor (Volunteer)',
    company_name: 'PLUGIN',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sep 2021 - Des 2022',
  },
  {
    title: 'Bootcamp',
    company_name: 'Binar Academy',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Agt 2022 - Jan 2023',
  },
  
];

const projects = [
  {
    id: 'project-1',
    name: 'MyAIRFARE',
    description: 'Aplikasi pemesanan tiket pesawat online',
    tags: [
      {
        name: 'android',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'api',
        color: 'pink-text-gradient',
      },
    ],
    image: myairfare,
    repo: 'https://github.com/Faizalilham/MyAIRFARE',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Attendance System',
    description:
      'Aplikasi absensi otomatis menggunakan smartphone dengan metode object detection',
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'mechine learning',
        color: 'pink-text-gradient',
      },
    ],
    image: attendance,
    repo: 'https://github.com/Faizalilham/MyAIRFARE',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'SIAP-AUD',
    description: 'Aplikasi rekap laporan harian siswa PAUD',
    tags: [
      {
        name: 'android',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
    ],
    image: siapaud,
    repo: 'https://github.com/Faizalilham/SIAP-AUD',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'DARAHKU',
    description: `Aplikasi sistem informasi stok darah disetiap lembaga kesehatan`,
    tags: [
      {
        name: 'android',
        color: 'blue-text-gradient',
      },
      {
        name: 'api',
        color: 'green-text-gradient',
      },
    
    ],
    image: darahku,
    repo: 'https://github.com/Faizalilham/DARAHKU',
    demo: 'https://movie-metro.netlify.app/',
  },
  
  

];

export { services, technologies, experiences, projects };
