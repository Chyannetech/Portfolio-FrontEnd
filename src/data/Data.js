
// projects images
import Project1 from '../assets/img/projects/wellbrew.png';
import Project2 from '../assets/img/projects/wbwireframe.png';
import Project3 from '../assets/img/projects/tmapp.png';
import Project4 from '../assets/img/projects/tmframe.png';
import Project5 from '../assets/img/projects/netflix.png';
import Project6 from '../assets/img/projects/pomotom.png';

// skills images
import SkillImg1 from '../assets/img/skills/html5.png';
import SkillImg2 from '../assets/img/skills/css3.png';
import SkillImg3 from '../assets/img/skills/js.png';
import SkillImg4 from '../assets/img/skills/reactjs.png';
import SkillImg6 from '../assets/img/skills/nodejs.png';
import SkillImg7 from '../assets/img/skills/express.png';
import SkillImg8 from '../assets/img/skills/mongo.png';
import images from './images';

// Skills
export const skills = [
    {
      image: SkillImg1,
    },
    {
      image: SkillImg2,
    },
    {
      image: SkillImg3,
    },
    {
      image: SkillImg4,
    },
    {
      image: SkillImg6,
    },
    {
      image: SkillImg7,
    },
    {
      image: SkillImg8,
    },
  ];

  // projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Wellbrew',
    category: 'Web Development',
    description: 'Python, JavaScript, Django, PostgreSQL, Materialize',
    github: 'https://github.com/Chyannetech/Wellbrew-1.2',
    demo: 'https://wellbrew.herokuapp.com/',
  },
  {
    id: '2',
    image: Project3,
    name: 'Travel Moire',
    description: 'JavaScript, jQuery, Node.js, Mongoose, MongoDB, EJS',
    category: 'Web Development',
    github: 'https://github.com/Chyannetech/TravelMoire',
    demo: 'https://travelmoire.herokuapp.com/',
  },
  {
    id: '6',
    image: Project6,
    name: 'PomoTom',
    description: 'JavaScript, HTML5, CSS3, Node.JS, MongoDB, React, Express.js, Material UI, Figma, Restful Routes',
    category: 'Web Development',
    github: 'https://github.com/krismally/pomo-frontend',
    demo: 'https://pomotom.com/',
  },
  {
    id: '3',
    image: Project5,
    name: 'Netflix and Chill',
    description: 'JavaScript, jQuery, AJAX, OMDB API ',
    category: 'Web Development',
    github: 'https://github.com/Chyannetech/Movies',
  },
  {
    id: '4',
    image: Project4,
    name: 'Travel Moire',
    description: 'Figma',
    category: 'UX Design',
    prototype: 'https://www.figma.com/proto/L3GojFGEw3TJUp6xIckAXQ/TRAVEL-%7C-MOIRE?node-id=0%3A1',
  },
  {
    id: '5',
    image: Project2,
    name: 'Wellbrew',
    description: 'Figma',
    category: 'UX Design',
    prototype: 'https://www.figma.com/proto/KF6Do2q6FTRQAE8PccbngJ/Wellbrew?node-id=20%3A45&scaling=scale-down&page-id=0%3A1&starting-point-node-id=20%3A45',
  },
  
];


export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'UX Design',
  },
  {
    name: 'Web Development',
  },
];

export const services = [
    {
        image: `${images.development}`,
        title: "Web Development",
        paragraph: "Front-End Web Development, Back-End Web Development, Full-stack Web Development."
    },
    {
      image: `${images.wireframe}`,
      title: "UX Design",
      paragraph: "User Research and Usability Testing, Web Design, Wireframing,Prototyping, User Flows, Mockups."
  },
    {
        image: `${images.branding}`,
        title: "Digital Marketing",
        paragraph: "SEO, Social Media Marketing, Content Marketing, Email Marketing."
    },
];
