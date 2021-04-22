import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andrew Turner | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1CmEs0vkKSgZ-6hsO4pDTHSZCvDfGX7PAHnJfUAB1tEw/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'roll-for-fun.jpg',
    title: 'Roll For Fun',
    info: 'My first fully fledged, full stack web application.  A tool for board gaming groups to allow a simple view of all games available, vote on those games and choose one to be played.  Built using React | Node | Express | PostgreSQL | Sass | Nodemailer.  Solo project.',
    info2: 'username | password: andrew',
    url: 'http://143.110.222.133:5418/#/',
    repo: 'https://github.com/TurnerAndrew/roll-for-fun', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'savvy-travels.jpg',
    title: 'Savvy Travels',
    info: 'A group project consisting of 4 members.  A travel website for people with a budget, but destination.  Plug in your budget and dates and we show you all of the places you can go.  Primary responsibilities: API calls and data manipulation, design outlines .Built with Google Geolocation API | GeoDB API | Aerodatabox API | Skyscanner API.',
    info2: '',
    url: 'http://143.110.222.133:4050/#/',
    repo: 'https://github.com/savvy-travels/ssavvy-travels-app', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'andrew@aturner.dev',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/andrewturner0',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/TurnerAndrew',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
