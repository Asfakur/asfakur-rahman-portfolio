import { FaNodeJs, FaNpm } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    expertise: "High performance, Real-time applications, Scalable, Secure backend with Node.js and express.js",
    color: "#388E3C",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    expertise: "NoSQL MongoDB and MongoDB atlas is more preferable with mongoose library; model and schema with validation",
    color: "#4CAF50",
  },
  {
    name: "Mysql",
    icon: <SiMysql />,
    expertise: "Complex relational tables design with complex queries for better performance and less memory",
    color: "#F57F17",
  },
  {
    name: "Node package manager",
    icon: <FaNpm />,
    expertise: " mongoose, cors, config, bcryptjs, joi, dotenv, jsonwebtoken, winston, uuid and many more",
    color: "#D50000",
  },

];

export default skills;
