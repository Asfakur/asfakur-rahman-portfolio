import collegeManagementSystem from '../images/collegeManagementSystem.jpg'
import expertElectricianProject from '../images/expert-electrician.jpg'
import amaderBazar from '../images/amader-bazar.jpg'
const projectData = [
  {
    "id": 1,
    "name": "AmaderBazar",
    "img": amaderBazar,
    "description": "It is a fully functional e-commerce site. Where front-end is built with React.js and Back-end built with Node.js and express js. Mongo-Db Atlas has been used as a NoSQL database in this project. The Stripe payment gateway has been used for purchasing the product.",
    "liveLink": "https://amader-bazar.netlify.app/",
    "codeLink": "https://github.com/Asfakur/amaer-bajar-frontend",
    "technology": "HTML, CSS, React.js, Bootstrap, Node, Express.js, Mongodb"
  },
  {
    "id": 2,
    "name": "Expert-Electrician",
    "img": expertElectricianProject,
    "description": "This website provides electric service man",
    "liveLink": "https://expert-electrician.web.app/",
    "codeLink": "https://github.com/Asfakur/expert-electrician-client",
    "technology": "HTML, CSS, React.js, Bootstrap, Node, Express.js, Mongodb"
  },
  {
    "id": 3,
    "name": "College Management System",
    "img": collegeManagementSystem,
    "description": "Admit student in college manage them and process-publish their result. Note: This project is not available in live site",
    "codeLink": "https://github.com/Asfakur/CollageManagementSystem/tree/php",
    "liveLink": "",
    "technology": "HTML, CSS, Bootstrap, PHP, Mysql"
  }
];

export default projectData;
