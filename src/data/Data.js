// projects images
import Project1 from "../assets/img/projects/wellbrew.png";
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
      "A full-CRUD web application built using Python, JavaScript, Django, PostgreSQL, and Materialize UI.",
    github: "https://github.com/Chyannetech/Wellbrew-1.2",
    demo: "https://wellbrew.herokuapp.com/",
  },
  {
    id: "2",
    image: Project3,
    name: "Travel Moire",
    description:
      "A Full-stack web application built using React, Javascript, HTML, CSS, and backend with full-CRUD using Express, Mongoose and MongoDB.",
    category: "Web Development",
    github: "https://github.com/Chyannetech/TravelMoire",
    demo: "https://travelmoire.herokuapp.com/",
  },
  {
    id: "6",
    image: Project6,
    name: "PomoTom",
    description:
      "A full-CRUD web application built using React, JavaScript, HTML5, CSS3, Express, MongoDB, Express.js, Material UI, and RESTful Routing.",
    category: "Web Development",
    github: "https://github.com/krismally/pomo-frontend",
    demo: "https://pomotom.com/",
  },
];
