import GaneshImage from "../assets/ganesh_small_comp.webp";
import Satyanarayan from "../assets/satya.webp";
import grihapravesh from "../assets/grihapravesh.webp";
import Marriage from "../assets/marriage.webp";
import udakshanti from "../assets/udakshanti.webp";

export const btnText = [
  { text: "Pujas", category: 1 },
  { text: "Homa/Havan", category: 2 },
  { text: "Festival Pujas", category: 3 },
  { text: "Parihara", category: 4 },
  { text: "Ancestors rituals", category: 5 },
];

export const servicesData = [
  {
    title: "Ganesh Puja",
    category: 1,
    description: [
      "Lord Ganesha, the revered son of Lord Shiva and Goddess Parvathi, holds a special place in the hearts of many devotees. The Ganesh Puja, a ritual to honour him, is often performed prior to various ceremonies and pujas to seek his blessings and ensure the smooth flow of proceedings.",
      "Whether embarking on a new business venture, making investments, celebrating a housewarming, getting married, or seeking to mitigate the adverse effects of Ketu, conducting a Ganapathi puja is recommended.",
      "The Ganesh Puja typically involves invoking Lord Ganapathi, chanting the Ganapathi Mantra, and conducting the puja itself. This ritual serves as a conduit for connecting with Lord Ganesha's divine energy and receiving his blessings.",
    ],
    benefits: {
      title: "Benefits of Ganesh Puja:",
      points: [
        {
          title: "Enhanced Intelligence and Wisdom:",
          description:
            "The Ganesh Puja is believed to bestow worshippers with heightened intelligence and wisdom, aiding in their personal and professional growth.",
        },
        {
          title: "Obstacle Removal:",
          description:
            "One of the most renowned aspects of Lord Ganesha is his role as the remover of obstacles. The puja is performed to seek his assistance in overcoming challenges and hurdles in life's journey.",
        },
        {
          title: "Fortune and Harmony: ",
          description:
            " Invoking Lord Ganesha through the puja is said to attract good fortune, harmony, and prosperity to the individual and their family.",
        },
      ],
    },
    id: 1,
    src: GaneshImage,
  },
  {
    title: "Marriage Puja",
    category: 1,
    description: [
      "Marriage, also known as Vivah or Wedding Ceremony, holds immense significance as a pivotal life event. It marks the transition from the Brahmacharya phase to Grihasthashram, signifying the readiness to embark on a new familial journey.",
      "Vivah represents a sacred union, inviting numerous Gods and Goddesses through rituals to bless the couple. The fire witnesses this holy alliance, bearing witness to the lifelong commitments made by the bride and groom. It's a profound event where families recognize their children's maturity and support their new beginning.",
      "Conducting a Pooja for the Marriage Ceremony ensures the blessings of ancestors, deities, and a harmonious, prosperous, and joyous married life for the couple.",
    ],
    benefits: {
      title: "Appropriate Timing for Vivah Puja (Marriage Ceremony)",
      points: [
        {
          title: "Auspicious Muhurat:",
          description:
            "Choose a propitious Muhurat based on the horoscopes of the bride and groom for the marriage ceremony.",
        },
        {
          title: "Beneficial Date:",
          description:
            "Select a wedding date that aligns with the well-being and prosperity of both the bride and groom.",
        },
      ],
    },
    id: 2,
    src: Marriage,
  },
  {
    title: "Udaka Shanti ",
    category: 3,
    id: 3,
    src: udakshanti,
  },
  {
    title: "GrihaPravesh Puja.",
    category: 1,
    id: 4,
    src: grihapravesh,
  },
  {
    title: "Satyanarayan Puja",
    category: 2,
    id: 5,
    src: Satyanarayan,
  },
  {
    title: "Marriage Puja",
    category: 2,
    src: Marriage,
  },
  {
    title: "Udaka Shanti ",
    category: 4,
    src: udakshanti,
  },
  {
    title: "GrihaPravesh Puja.",
    category: 5,
    src: grihapravesh,
  },
  {
    title: "Satyanarayan Puja",
    category: 4,
    src: Satyanarayan,
  },
];
