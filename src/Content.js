// import images
import Hero_person from "./assets/images/Hero/a-zaman.png";
import resume from "./assets/files/resume.pdf";

import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import expressjs from "./assets/images/Skills/express.png";
import nextjs from "./assets/images/Skills/nextjs.png";
import typescript from "./assets/images/Skills/typescript.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/mern.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/finger.png";
// import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import {FaWhatsapp} from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "A",
    LastName: "ZAMAN'S",
    btnText: "RESUME",
    btnLink: resume,
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my short career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Node js",
        para: "JavaScript runtime built on Chrome's V8 JavaScript engine",
        logo: nodejs,
      },
      {
        name: "React js",
        para: "React is a declarative, efficient, and flexible JavaScript library",
        logo: reactjs,
      },
      {
        name: "Mongo DB",
        para: "A document database with the scalability and flexibility",
        logo: mongodb,
      },
      {
        name: "Express js",
        para: "Express is a minimal and flexible Node.js web application framework ",
        logo: expressjs,
      },
      {
        name: "Next js",
        para: "Next.js is an open-source development framework",
        logo: nextjs,
      },
      {
        name: "TypeScript",
        para: "Syntactic superset of JavaScript which adds static typing.",
        logo: typescript,
      }
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Design",
        para: "Always I design with a customized website design that's perfect for your business or personal site. I will work with you to create a design that matches your brand.",
        logo: services_logo1,
      },
      {
        title: "Web Development",
        para: "Used to develope content management system, online payment, membership management event booking and business directory system in my project.",
        logo: services_logo2,
      },
      {
        title: "Web Applications",
        para: "I feel very comfortable to integrate mobile first interface, social integration, reporting & analytics, security, live chat, web payment and web push notification in my web application.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        id: "1",
        title: "Xclusive Cars - Used product reselling site",
        image: project1,
      },
      {
        id: "2",
        title: "Get Your Writer - A service review Website",
        image: project2,
      },
      {
        id: "3",
        title: "Pro Tech Edu - Educational service",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“This Xcusive Cars works outstandingly well. It beautifully improves my basketball by a lot.”",
        img: avatar1,
        name: "Hasibul Hasan, Bangladesh",
      },
      {
        review:
          "“This Get Your Writer works outstandingly well. It beautifully improves my basketball by a lot talk about sadness!!”",
        img: avatar2,
        name: "Tom Alex, United Kingdom",
      },
      {
        review:
          "“The box this comes in is 3 meter by 6 yard and weights 12 pound in this portfolio is ghetto.”",
        img: avatar3,
        name: "Grogory Heydom, United State",
      },
      {
        review:
          "“SoCal cockroaches are unwelcome, crafty, and tenacious. This Xcusive Cars keeps them away.”",
        img: avatar4,
        name: "Jhankar Mahabub, United State",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    // image2: Hireme_person2,
    para: "My name is S M Ahaduzzaman, and I'm telling about web development assistant with web design and web application development. I am appling for your project on my portfolio website while you browsing it. I think you'll find that my attention to detail and strong communication skills could help you excel in this role and I'd love to discuss my qualifications in more detail.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "smahaduzzaman96@gmail.com",
        icon: GrMail,
        link: "mailto:smahaduzzaman96@gmail.com",
      },
      {
        text: "+880 1729 972223",
        icon: MdCall,
        link: "https://wa.me/01729972223",
      },
      {
        text: "WhatsApp",
        icon: FaWhatsapp,
        link: "https://wa.me/01729972223",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
