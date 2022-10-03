// projects images
import Project1 from "../assets/img/projects/wellbrew.png";
import Project2 from "../assets/img/projects/compostr.png";
import Project3 from "../assets/img/projects/tmapp.png";
import Project6 from "../assets/img/projects/pomotom.png";

// skill icons images
import SkillImg1 from "../assets/img/skills/html5.png";
import SkillImg2 from "../assets/img/skills/css3.png";
import SkillImg3 from "../assets/img/skills/js.png";
import SkillImg4 from "../assets/img/skills/reactjs.png";
import SkillImg6 from "../assets/img/skills/nodejs.png";
import SkillImg7 from "../assets/img/skills/express.png";
import SkillImg8 from "../assets/img/skills/mongo.png";

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
    id: "1",
    image: Project1,
    name: "Wellbrew",
    category: "Web Development",
    description:
      "Wellbrew is a full-stack app that uses the Python-based Django Web Framework to track vendors at farmers markets. Users are able to access vendor information that is managed by an admin portal.",
    github: "https://github.com/Chyannetech/Wellbrew-1.2",
    demo: "https://wellbrew.herokuapp.com/",
  },
  {
    id: "3",
    image: Project3,
    name: "Travel Moire",
    category: "Web Development",
    description:
    "TravelMoire is a Full Stack React CRUD web appliction that was created to encourage traveling and discovering new adventures around the world."
  ,
    github: "https://github.com/Chyannetech/TravelMoire-Frontend",
    demo: "gorgeous-scone-e56fa5.netlify.app",
  },
  {
    id: "2",
    image: Project2,
    name: "Compostr",
    description:
    "Compostr is a full stack MERN web application that was created to promote sustainability and encourage composting.",
    category: "Web Development",
    github: "https://github.com/Chyannetech/Compostr",
    demo: "https://compostr.netlify.app/",
  },
  {
    id: "4",
    image: Project6,
    name: "PomoTom",
    description:
      "PomoTom is a time based productivity application developed with full CRUD capabilities using the MERN stack.",
    category: "Web Development",
    github: "https://github.com/krismally/pomo-frontend",
    demo: "https://pomotom.com/",
  },
];
