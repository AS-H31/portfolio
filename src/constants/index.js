import {
  backend,
  creator,
  mobile,
  web,
  angular,
  java,
  linux,
  neo4j,
  ngxs,
  postgres,
  primeng,
  python,
  rxjs,
  spring,
  wordpress,
  css,
  docker,
  git,
  html,
  javascript,
  typescript,
  threejs,
  shopify,
  adesso,
  hsbo,
  klarheit,
  trusty,
  nachhilfe,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Angular Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Python and Java Tutor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "angular",
      icon: angular
    },
    {
      name: "java",
      icon: java 
    },
    {
      name: "linux",
      icon: linux
    }
    ,
    {
      name: "neo4j",
      icon: neo4j
    },
    {
      name: "ngxs",
      icon: ngxs
    },
    {
      name: "postgres",
      icon: postgres
    },
    {
      name: "primeng",
      icon: primeng
    },
    {
      name: "python",
      icon: python
    },
    {
      name: "rxjs",
      icon: rxjs
    },
    {
      name: "spring boot",
      icon: spring
    },
    {
      name: "wordpress",
      icon: wordpress
    }
  ];
  
  const experiences = [
    {
      title: "Werkstudent Webentwickler",
      company_name: "adesso",
      icon: adesso,
      iconBg: "#383E56",
      date: "Feb 2022 - Okt 2024",
      points: [
        "Developing and maintaining web applications for analyzing COBOL programs using Angular and other related technologies.",
        "Development of REST interfaces for querying project-specific information from the graph database.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Creation of reports and graphical representation of data from COBOL applications using JasperReports and ngx-graph."
      ],
    },
    {
      title: "Werkstudent Systemadministration",
      company_name: "Hochschule Bochum",
      icon: hsbo,
      iconBg: "#E6DEDD",
      date: "Jan 2021- Jan 2022",
      points: [
        "Administration of the university servers for Moodle.",
        "Containerization with Docker.",
        "Management of the university's Moodle platform.",
      ],
    },
    {
      title: "Freelancer",
      company_name: "Freelancing",
      icon: shopify,
      iconBg: "#383E56",
      date: "Since 2021",
      points: [
        "Developing and maintaining WordPress websites.",
        "Developing and maintaining web applications built with Angular.",
        "Managing hosting services and domain registrations.",
        "Providing IT support and troubleshooting as needed.",
      ],
    },
    {
      title: "Intern",
      company_name: "Sparkasse Northeim",
      icon: adesso,
      iconBg: "#E6DEDD",
      date: "Aug 2016 - Aug 2017",
      points: [
        "Provide comprehensive customer support, addressing inquiries, resolving issues, and ensuring a positive experience for all clients.",
        "Accounting.",
        "Credit processing",
        "Wealth consulting.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Klarheit UG",
      description:
        "Webpage for a tutoring institute, showcasing its services and company information.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },  
        {
          name: "freelance",
          color: "green-text-gradient",
        },
      ],
      image: klarheit,
      source_code_link: "https://klarheit-edu.de/",
    },
    {
      name: "Trusty Handwerker",
      description:
        "A web application that allows users to search for craftsmen, view estimated hourly rates, and locate available craftsmen based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "php",
          color: "purple-text-gradient"
        }
      ],
      image: trusty,
      source_code_link: "https://github.com/",
    },
    {
      name: "Tutoring",
      description:
        "I offer tutoring for university students without an IT background.",
      tags: [
        {
          name: "python",
          color: "yellow-text-gradient",
        },
        {
          name: "java",
          color: "brown-text-gradient",
        }
      ],
      image: nachhilfe,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };