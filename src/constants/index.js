import {
  pnrimg,
  qrgenimg,
  gymimg,
  portfolioimg,
  borrowandlendahandimg,
  phantompressimg,
  paypolimg,
  tribetangoimg,
  infinitemealsimg,
  gitmeimg,
  aksharpharmacyimg,
  nuimg,
} from "../assets/projectscreenshots/";
import materialuiicon from "../assets/skills/materialui.svg";
import golangicon from "../assets/skills/golang.svg";
import nextjsicon from "../assets/skills/nextjs.svg";
import daisyuiicon from "../assets/skills/daisyui.svg";

export const socialIcons = [
  // done
  {
    name: "github",
    class: " fa-brands fa-github",
    link: "https://github.com/Rishiwant1729",
    text: "Fork My Repos On Github",
    // gihub link
  },
// done
  {
    name: "x",
    class: "fa-brands fa-square-twitter",
    link: "https://x.com/R_WAN04",
    text: "Follow on X",
  },
  // done
  {
    name: "linkedin",
    class: " fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/rishiwant-kumar-maurya-681735332/",
    text: "Connect On LinkedIn",
    // linkedinlik
  },
  
];
// Project summary idhar jayega isko last me change karenge ..............
export const project = [
  {
    title: "Nitrutsav",
    img: nuimg,
    subtitle: [
      {
        value:
          "Nitrutsav is the annual cultural fest of NIT Rourkela, one of the largest of its kind in Eastern India.",
      },
      {
        value: "",
      },
    ],
    link: "https://nitrutsav.com/",
    state: "College Fest",
  },
  {
    title: "Infinite Meals",
    img: infinitemealsimg,
    subtitle: [
      {
        value:
          "Infinite Meals is a recipe search engine that uses OpenAI's GPT-3.5-Turbo-1106 Model through Open AI API to generate recipes for any given Food. ",
      },
      {
        value:
          "It's a simple and easy way to find new recipes and get inspiration for your next meal.",
      },
    ],
    link: "https://imeals.rajaryan.work/",
    gitlink: "https://github.com/8rxn/infinitemeals",
  },
  {
    title: "Akshar Pharmacy",
    img: aksharpharmacyimg,
    subtitle: [
      {
        value:
          "Brand Website for Akshar Pharmacy, an Amazon-based company specialising in Ayurvedic beauty items",
      },
    ],
    link: "https://www.aksharpharmacy.com/",
    state: "Freelance",
  },
  {
    title: "GitMe",
    img: gitmeimg,
    subtitle: [
      {
        value:
          "GitMe is a Github Card Generator that uses Github API to fetch user data and generate a card for the user. ",
      },
      {
        value: "Runs on Cloudflare Workers.",
      },
    ],
    link: "https://gitme.rajaryan.work/",
    gitlink: "https://github.com/8rxn/gitme",
  },

  {
    title: "TribeTango",
    img: tribetangoimg,
    subtitle: [
      {
        value:
          "TribeTango is a platform for our fellow gamers to connect and interact with each other while making this whole process fun and rewarding just like a game.",
      },
      { value: "HACK 36 6.0 - Awarded Best Use of Verbwire API" },
    ],
    link: "https://tribetango.vercel.app",
    gitlink: "https://github.com/8rxn/projectbarfi",
  },
  {
    title: "PayPol",
    img: paypolimg,
    subtitle: [
      {
        value:
          "A web3 based project for managing transactions and cryptocurrencies on the Ethereum blockchain.",
      },
      { value: "EthForAll By Devfolio" },
    ],
    link: "https://paypol.vercel.app",
    gitlink: "https://github.com/anushrxy/project-1ndex",
  },
  {
    title: "PNR Tracker",
    img: pnrimg,
    subtitle: [
      {
        value:
          "   Provides Realtime Data About Your PNR along with all relevant information.",
      },
    ],
    link: "https://trackpnr.rajaryan.work/",
    gitlink: "https://github.com/8rxn/pnr-tracker-rxn",
  },
  {
    title: "Phantom Press",
    img: phantompressimg,
    subtitle: [
      {
        value:
          "An application service designed to help share anonymous bits of news without any fear.",
      },
      { value: "HackNitr 4.0- Awarded Best Use of Auth0 " },
    ],
    link: "https://phantompress.co",
    gitlink: "https://github.com/duckling69/phantompress",
  },

  {
    title: "BorrowAndLend-a-hand",
    img: borrowandlendahandimg,
    subtitle: [
      {
        value:
          "An application service that helps the community share and reduce wastage of resources.",
      },
      {
        value:
          "Hacky New Year - Awarded Best Sustainability Hack sponsored by Avanade ",
      },
    ],
    link: "https://borrowandlend-a-hand.vercel.app/",
    gitlink: "https://github.com/duckling69/Borrowandlendahand",
  },
  {
    title: "QR Gen",
    img: qrgenimg,
    subtitle: [
      {
        value:
          " Creates Qr Codes from input Prompt with customization such as size and dark mode",
      },
    ],
    link: "https://getqr.rajaryan.work",
    gitlink: "https://github.com/8rxn/qrgen",
  },
  {
    title: "GYM-RXN",
    img: gymimg,
    subtitle: [
      {
        value:
          " Provides collection of thousands of exercise categorised by muscle group and equipment. ",
      },
    ],
    link: "https://gymrxn.netlify.app/",
    gitlink: "https://github.com/8rxn/gym-app-jsmastery",
  },
];

export const techStack = [
  {
    className: "fa-brands fa-html5",
  },
  {
    className: "fa-brands fa-css3",
  },
  {
    className: "fa-brands fa-js",
  },
  {
    className: "fa-brands fa-react",
  },
  {
    className: "fa-brands fa-markdown",
  },
  {
    className: "fa-brands fa-git-alt",
  },
  {
    className: "fa-brands fa-github",
  },
  {
    className: "fa-brands fa-node-js",
  },
  {
    src: materialuiicon,
  },
  {
    src: golangicon,
  },
  {
    src: nextjsicon,
  },
  {
    src: daisyuiicon,
  },
  // this one is tailwind
  {
    path: "M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z",
    viewBox: "0 0 48 48",
  },
  {
    className: "fa-brands fa-python",
  },
];

export const currentProjects = {
  ongoing: ["React Like library in JS"],
  planned: ["TCP Server in Rust"],
};
