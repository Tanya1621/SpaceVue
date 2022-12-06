import andromeda from "@/assets/Andromeda.png";
import taurus from "@/assets/taurus.jpeg";
import triangulum from "@/assets/Triangulum_Galaxy.jpeg";
import type IGalaxy from "@/types/IGalaxy";
import type IStar from "@/types/IStar";
import alpheratz from '@/assets/alpheratz.jpeg';
import titawin from '@/assets/titawin.jpeg';
import almach from '@/assets/almach.jpeg';
import mirach from '@/assets/Mirach.jpeg';
import aldebaran from '@/assets/Aldebaran.jpeg';
import aries from '@/assets/aries.webp'

export const spaceList: IGalaxy[] = [
  {
    name: "Andromeda",
    stars: 65,
    description:
      "Andromeda is one of the 48 constellations listed by the 2nd-century Greco-Roman astronomer Ptolemy, and one of the 88 modern constellations. Located in the northern celestial hemisphere, it is named for Andromeda, daughter of Cassiopeia, in the Greek myth, who was chained to a rock to be eaten by the sea monster Cetus.",
    symbol: "Andromeda, the Chained woman",
    id: 1,
    img: andromeda,
  },
  {
    name: "Taurus",
    stars: 132,
    description:
      "Taurus is one of the constellations of the zodiac and is located in the northern celestial hemisphere. Taurus is a large and prominent constellation in the Northern Hemisphere's winter sky. It is one of the oldest constellations, dating back to the Early Bronze Age at least, when it marked the location of the Sun during the spring equinox.",
    symbol: "The Bull",
    id: 2,
    img: taurus,
  },
  {
    name: "Aries",
    stars: 61,
    description: "The name Aries is Latin for ram. Its old astronomical symbol is Aries symbol. It is one of the 48 constellations described by the 2nd century astronomer Ptolemy, and remains one of the 88 modern constellations.",
    symbol: "The Ram",
    id: 3,
    img: aries,
  },
];

export const andromedaStars: IStar[] = [
  {
    id: 1,
    name: "Alpheratz",
    distance: "97 light-years",
    mass: "3.8 solar masses",
    type: "8500 K",
    description:
      "Although it appears to the naked eye as a single star, it is actually a binary system composed of two stars in close orbit. The chemical composition of the brighter of the two stars is unusual as it is a mercury-manganese star whose atmosphere contains abnormally high levels of mercury, manganese, and other elements, including gallium and xenon. It is the brightest mercury-manganese star known.",
    img: alpheratz,
  },
  {
    id: 2,
    name: "Mirach",
    distance: "197 light-years",
    mass: "2.19 solar masses",
    type: "3842 K",
    description: "β Andromedae, officially named Mirach is a prominent star in the northern constellation of Andromeda. It is commonly used by stargazers to find the Andromeda Galaxy. This star is the brightest star in the constellation.",
    img: mirach,
  },
  {
    id: 3,
    name: "Almach",
    distance: "390 light-years",
    mass: "23.7 solar masses",
    type: "4250 K",
    description: "Gamma Andromedae is the third-brightest point of light in the northern constellation of Andromeda. It is a multiple star system. It appears to be a bright, golden-yellow star next to a dimmer, indigo-blue star",
    img: almach,
  },
  {
    id: 4,
    name: "Titawin",
    distance: "44 light-years",
    mass: "0.2 solar masses",
    type: "6213 K",
    description: "Upsilon Andromedae is a binary star located 44 light-years from Earth in the constellation of Andromeda. The system consists of an F-type main-sequence star, officially named Titawin, and a smaller red dwarf.",
    img: titawin,
  },
];

export const milkyWayStars: IStar[] = [
  {
    id: 1,
    name: "Aldebaran",
    distance: "65.3 light-years",
    mass: "1.16 solar masses",
    type: "3900 K",
    description: "Aldebaran is the brightest star in the zodiac constellation of Taurus. Aldebaran is a giant star that is cooler than the Sun with a surface temperature of 3,900 K, but its radius is about 44 times the Sun's, so it is over 400 times as luminous.",
    img: aldebaran,
  },
  {
    id: 2,
    name: "milky2",
    distance: "",
    mass: "mnogo",
    type: "big big",
    description: "star star star star star",
    img: triangulum,
  },
  {
    id: 3,
    name: "milky4",
    distance: "",
    mass: "mnogo",
    type: "big big",
    description: "star star star star star",
    img: triangulum,
  },
  {
    id: 4,
    name: "planet4",
    distance: "",
    mass: "mnogo",
    type: "big big",
    description: "star star star star star",
    img: triangulum,
  },
];

export const triangulumStars: IStar[] = [
  {
    id: 1,
    name: "tri",
    mass: "mnogo",
    distance: "",
    type: "big big",
    description: "star star star star star",
    img: triangulum,
  },
  {
    id: 2,
    name: "trian",
    mass: "mnogo",
    distance: "",
    type: "big big",
    description: "star star star star star",
    img: triangulum,
  },
  {
    id: 3,
    name: "trudn",
    mass: "mnogo",
    distance: "",
    type: "big big",
    description: "star star star star star",
    img: triangulum,
  },
  {
    id: 4,
    name: "plghanet4",
    mass: "mnogo",
    distance: "",
    type: "big big",
    description: "star star star star star",
    img: triangulum,
  },
];
