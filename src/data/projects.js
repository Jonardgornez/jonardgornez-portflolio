import Laplantaimg1 from "../assets/laplantahotel 1.png";
import Laplantaimg2 from "../assets/laplantahotel 2.png";
import Laplantaimg3 from "../assets/laplantahotel 3.png";
import ris_create_acoount from "../assets/ris_create_acoount.png";
import ris_homepage from "../assets/ris_homepage.png";
import ris_login from "../assets/ris_login.png";

export const PROJECTS = [
  {
    id: 1,
    title: "LaPlanta Hotel",
    type: "Restaurant Website",
    description:
      "La Planta Hotel and Restaurant offers refreshing drinks and light bites in a calm coastal setting, perfect for unwinding by the pool or after a day of exploring Bais. Enjoy freshly made juices, handcrafted beverages, and refreshing refreshments prepared with local ingredients, all served in a relaxed atmosphere that complements the beauty of the sea and surroundings.",
    detail:
      "To achieve this I analyze the flow and and ask the client about the requirements.",
    tags: ["php", "jquery", "html", "css"],
    link: "#",
    bgColor: "rgb(60, 190, 238)",
    cardBg: "#111111",
    images: [Laplantaimg1, Laplantaimg2, Laplantaimg3],
    productTitle: "",
    productSubtitle: "",
    ctaLabel: "See More Details",
  },
  {
    id: 2,
    title: "Supply Requisition Issuance Monitoring System",
    type: "Monitoring Web Applications",
    description:
      "The Supply Requisition Issuance Monitoring System is a web-based system designed to manage and track the request and distribution of supplies in an organization. It replaces manual processes such as paper forms and Excel files with a digital platform that is easier to use and manage.",
    detail:
      "To achieve this I analyze the flow and and ask the client about the requirements.",
    tags: ["php", "sweet Alert", "html", "css"],
    link: "#",
    bgColor: "rgb(17, 38, 58)",
    cardBg: "#111111",
    images: [ris_homepage, ris_create_acoount, ris_login],
    productTitle: "",
    productSubtitle: "",
    ctaLabel: "See More Details",
  },
];
