import landingGlamify from "../assets/mockUps/landingGlamify.jpeg";
import loginGlamify from "../assets/mockUps/loginGlamify.jpeg";
import homeGlamify from "../assets/mockUps/homeGlamify.jpeg";
import cestGlamify from "../assets/mockUps/cestGlamify.jpeg";

import loginAgilix from "../assets/mockUps/loginAgilix.jpeg";
import dashAgilix from "../assets/mockUps/dashAgilix.jpeg";

import landingPoke from "../assets/mockUps/landingPoke.png";
import homePoke from "../assets/mockUps/homePoke.png";
import createPoke from "../assets/mockUps/createPoke.png";
import detailPoke from "../assets/mockUps/detailPoke.png";

import homeRAM from "../assets/mockUps/homeRAM.png";

const projects = [
  {
    name: "Glamify",
    type: "E-commerce",
    repo: "https://github.com/JoseEnriquez88/GLAMIFY",
    deploy: "null",
    images: {
      landing: landingGlamify,
      login: loginGlamify,
      home: homeGlamify,
      cest: cestGlamify,
    },
  },
  {
    name: "Agilix",
    type: "POS",
    repo: "https://github.com/JoseEnriquez88/Agilix",
    deploy: "null",
    images: {
      landing: null,
      login: loginAgilix,
      home: dashAgilix,
      cest: null,
    },
  },
  {
    name: "Poke App",
    type: "Pokedex",
    repo: "https://github.com/JoseEnriquez88/Pokemon",
    deploy: "https://pokemon-jose-enriquez-88.vercel.app/",
    images: {
      landing: landingPoke,
      login: null,
      home: homePoke,
      cest: null,
      create: createPoke,
      detail: detailPoke,
    },
  },
  {
    name: "Rick & Morty",
    type: "Interactive R&M",
    repo: "https://github.com/JoseEnriquez88/Rick_And_Morty",
    deploy: "null",
    images: {
      landing: null,
      login: null,
      home: homeRAM,
      cest: null,
      create: null,
    },
  },
];

export default projects;
