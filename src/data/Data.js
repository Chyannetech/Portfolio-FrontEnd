
// projects images
import Project1 from '../assets/img/projects/wellbrew.png';
import Project2 from '../assets/img/projects/wbwireframe.png';
import Project3 from '../assets/img/projects/tmapp.png';
import Project4 from '../assets/img/projects/tmframe.png';
import Project5 from '../assets/img/projects/netflix.png';

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
    category: 'web development',
  },
  {
    id: '2',
    image: Project2,
    name: 'Wellbrew',
    category: 'UX Design',
  },
  {
    id: '3',
    image: Project3,
    name: 'Travel Moire',
    category: 'web development',
  },
  {
    id: '4',
    image: Project4,
    name: 'Travel Moire',
    category: 'UX Design',
  },
  {
    id: '5',
    image: Project5,
    name: 'Movie Generator',
    category: 'web development',
  },
];


export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UX Design',
  },
  {
    name: 'web development',
  },
];

export const services = [
    {
        image: `${images.development}`,
        title: "Web Development",
        paragraph: "Vivamus a accumsan mauris. Nunc sodales lacus nec felis suscipit dictum. Mauris auctor enim in justo euismod imperdiet."
    },
    {
      image: `${images.wireframe}`,
      title: "UX Design",
      paragraph: "Vivamus a accumsan mauris. Nunc sodales lacus nec felis suscipit dictum. Mauris auctor enim in justo euismod imperdiet."
  },
    {
        image: `${images.branding}`,
        title: "Branding",
        paragraph: "Vivamus a accumsan mauris. Nunc sodales lacus nec felis suscipit dictum. Mauris auctor enim in justo euismod imperdiet."
    },
];
