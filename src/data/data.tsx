import qtmLanding from "../assets/qtm-landing.png";
import qtmMarketplace from "../assets/qtm_restaurant.png";
import custom_admin from "../assets/custom_admin.png";
import qtm_tablet from "../assets/qtm_tablet.png";
import getstyle from "../assets/getstyle.png";
import GettstyleStrapi from "../assets/GettstyleStrapi.png";
import derabiton from "../assets/derabiton.png";
import { SiFrontendmentor } from "react-icons/si";
import { FaLinkedin, FaCodepen, FaGithub } from "react-icons/fa";

export default {
  name: "Danylo Borodyshyn",
  description:
    "I am a Middle Frontend Developer specializing in Vue.js and Nuxt.js, with over 2 years of commercial experience. My passion for frontend development stems from my ability to quickly grasp new concepts and adapt to evolving technologies.",
  skills: [
    {
      skill: "HTML",
    },
    {
      skill: "SCSS/CSS",
    },
    {
      skill: "JavaScript",
    },
    {
      skill: "TypeScript",
    },
    {
      skill: "Vue.js",
    },
    {
      skill: "Angular",
    },
    {
      skill: "ReactNative",
    },
    {
      skill: "GraphQL",
    },
    {
      skill: "Bootstrap/Tailwind CSS",
    },
    {
      skill: "Nuxt3",
    },
    {
      skill: "REST API",
    },
    {
      skill: "Pinia",
    },
    {
      skill: "shad-cn",
    },
    {
      skill: "Vuetify",
    },
  ],
  projects: [
    {
      projectName: "derabiton",
      skills: [
        "html",
        "Tailwind",
        "Vue.js",
        "Nuxt3",
        "Typescript",
      ],
      image: derabiton,
      projectLink: "https://derabiton.com/products"
    },
    {
      projectName: "Gettstyle",
      skills: [
        "html",
        "Tailwind",
        "Vue.js",
        "Nuxt3",
        "Typescript",
        "Graphql",
        "Pinia",
        "Strapi",
        "Node.js",
      ],
      image: getstyle,
      projectLink: "https://app.gettstyle.com/"
    },
    {
      projectName: "Gettstyle Admin (strapi)",
      skills: [
        "Strapi",
        "Node.js",
      ],
      image: GettstyleStrapi,
      projectLink: "https://app.gettstyle.com/"
    },
    {
      projectName: "Quick Touch Menu Marketplace",
      skills: [
        "Angular",
        "typescript",
        "RxJs",
        "html",
        "scss",
      ],
      image: qtmLanding,
      projectLink: "https://quicktouch.menu/"
    },
    {
      projectName: "Quick Touch Menu Restaurant",
      skills: [
        "Angular",
        "typescript",
        "RxJs",
        "html",
        "scss",
      ],
      image: qtmMarketplace,
      projectLink: "https://olivje-restaurant.quicktouch.menu/catalog/longlist",
      codeLink: ''
    },
    {
      projectName: "Quick Touch Menu tablet admin app",
      skills: [
        "html",
        "css-in-js",
        "React Native",
        "Redux",
      ],
      image: custom_admin,
      codeLink: ''
    },
    {
      projectName: "Quick Touch Menu mob / tablet app",
      skills: [
        "html",
        "css-in-js",
        "React Native",
        "Redux",
      ],
      image: qtm_tablet,
      linkIOS: 'https://apps.apple.com/ru/app/quick-touch-waiter/id6449952843',
      linkAndroid: 'https://play.google.com/store/apps/details?id=com.qtmwaiter&hl=ru&gl=US'
    },
  ],
  links: [
    {
      site: "Github",
      link: "https://github.com/DanyloBorodyshyn",
      icon: <FaGithub className="md:w-6 md:h-6" size={20} />,
    },
    // {
    //   site: 'Frontend mentor',
    //   link: 'https://www.frontendmentor.io/profile/DanyloBorodyshyn',
    //   icon: <SiFrontendmentor className='md:w-6 md:h-6' size={20} />,
    // },
    {
      site: "LinkedIn",
      link: "https://www.linkedin.com/in/danylo-borodyshyn-093088251/",
      icon: <FaLinkedin className="md:w-6 md:h-6" size={20} />,
    },
  ],
};
