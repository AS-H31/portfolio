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
  carrent,
  jobit,
  tripguide,
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
      title: "Python Dev",
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
        "Entwicklung einer Anwendung zur Analyse von COBOL-Programmen unter Verwendung von Angular für die Benutzeroberfläche",
        "Erstellung von Reports und grafische Darstellung von Daten aus COBOL-Anwendungen unter Verwendung von JasperReports und ngx-graph",
        "Entwicklung von REST-Schnittstellen zur Abfrage projektspezifischer Informationen aus dem Graphdatenbank",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Werkstudent Systemadministration",
      company_name: "Hochschule Bochum",
      icon: hsbo,
      iconBg: "#E6DEDD",
      date: "Jan 2021- Jan 2022",
      points: [
        "Administration der Hochschulserver für Moodle",
        "Containerisierung mit Docker",
        "Verwaltung der Moodle-Platform der Hochschule",
        "Developing and maintaining web applications using React.js and other related technologies.",
      ],
    },
    {
      title: "Freelancer",
      company_name: "Freelancing",
      icon: shopify,
      iconBg: "#383E56",
      date: "-",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Praktikant",
      company_name: "Sparkasse Northeim",
      icon: adesso,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
        "Beschreibung fehlt",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
      ],
      image: klarheit,
      source_code_link: "https://klarheit-edu.de/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };