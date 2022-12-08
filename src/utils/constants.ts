import andromeda from "@/assets/andromeda.jpeg";
import milkyway from "@/assets/milkyway.jpeg";
import triangulum from "@/assets/Triangulum_Galaxy.jpeg";
import type ISpaceItem from "@/types/ISpaceItem";
import type IStar from "@/types/IStar";
import alpheratz from "@/assets/alpheratz.jpeg";
import titawin from "@/assets/titawin.jpeg";
import almach from "@/assets/almach.jpeg";
import mirach from "@/assets/Mirach.jpeg";
import aldebaran from "@/assets/Aldebaran.jpeg";
import aries from "@/assets/aries.webp";
import blackHoles from "@/assets/black_holes.jpeg";
import saggitarius from "@/assets/saggitarius.jpeg";
import m87 from "@/assets/m87.jpg";
import henize from "@/assets/henize.jpg";
import gnz7q from "@/assets/GNz7q.jpeg";
import grs from "@/assets/grs.jpeg";
import galaxies from "@/assets/galaxies.jpeg";
import type IGalaxy from "@/types/IGalaxy";
import eso from "@/assets/eso.jpg";
import nebula from "@/assets/nebula.jpeg";
import orion from "@/assets/orion.jpeg";
import crab from "@/assets/crab.jpeg";
import helix from "@/assets/helix.jpeg";
import eagle from "@/assets/eagle.jpeg";
import omega from "@/assets/omega.jpeg"

export const spaceList: ISpaceItem[] = [
  {
    name: "Black Holes",
    description:
      "A black hole is a place in space where gravity pulls so much that even light can not get out. The gravity is so strong because matter has been squeezed into a tiny space. This can happen when a star is dying. Because no light can get out, people can't see black holes. They are invisible. Space telescopes with special tools can help find black holes. The special tools can see how stars that are very close to black holes act differently than other stars.",
    id: 1,
    img: blackHoles,
  },
  {
    name: "Galaxies",
    description:
      "A galaxy is a system of stars, stellar remnants, interstellar gas, dust, dark matter, bound together by gravity. Some scientists think there could be as many as one hundred billion galaxies in the universe.",
    id: 2,
    img: galaxies,
  },
  {
    name: "Nebulae",
    description:
      'Nebula is a giant cloud of dust and gas in space. Some nebulae (more than one nebula) come from the gas and dust thrown out by the explosion of a dying star, such as a supernova. Other nebulae are regions where new stars are beginning to form. For this reason, some nebulae are called "star nurseries."',
    id: 3,
    img: nebula,
  },
];

export const blackHolesList: IStar[] = [
  {
    id: 1,
    name: "Sagittarius A",
    distance: "26 673 light-years",
    mass: "4 million solar masses",
    location: "The Milky Way Galaxy",
    description:
      'Sagittarius A*, often abbreviated to Sgr A* and pronounced "Sagittarius A star", is a supermassive black hole located at the center of our spiral galaxy, the Milky Way.\n' +
      "\n" +
      "Sagittarius A* is mostly dormant and only occasionally absorbs gas or dust, but nonetheless has an estimated mass millions times that of our sun. ",
    img: saggitarius,
  },
  {
    id: 2,
    name: "M87",
    distance: "55 million light-years",
    mass: "3.5 - 6.6 billion solar masses",
    location: "Messier 87",
    description:
      "M87* is located in the center of Messier 87 and it is one of the largest known black holes in the universe at about 6.5 billion times the mass of the sun, more than 1000 times the mass of Sgr A*. ",
    img: m87,
  },
  {
    id: 3,
    name: "BH in Henize 2-10",
    distance: "30 million light-years",
    mass: "1 million solar masses",
    location: "Henize 2-10",
    description:
      " This black hole is at the heart of the dwarf galaxy Henize 2-10 and it is creating stars rather than gobbling them up. The black hole is apparently contributing to the firestorm of new star formation taking place in the galaxy. The dwarf galaxy lies 30 million light-years away, in the southern constellation Pyxis.",
    img: henize,
  },
  {
    id: 4,
    name: "GNz7q",
    distance: "13.1 billion light-years",
    mass: "Unknown",
    location: "GNz7q galaxy",
    description:
      "GNz7q is the first example of a rapidly-growing black hole in the dusty core of a starburst galaxy at an epoch close to the earliest supermassive black hole known in the Universe. Scientists believe this black hole existed just 750 million years after the Big Bang.",
    img: gnz7q,
  },
  {
    id: 5,
    name: "GRS 1915+105",
    distance: "28 000 light-years",
    mass: "12.4 solar masses",
    location: "The Milky Way Galaxy",
    description:
      "What makes GRS 1915+105 unusual is that it's spinning about 1,000 times per second. That's the maximum possible rate. Scientists measure the spin to determine how strongly the black hole drags spacetime right outside the hole's event horizon, the point beyond which nothing can escape.",
    img: grs,
  },
];

export const galaxiesList: IGalaxy[] = [
  {
    name: "Andromeda",
    distance: "2.5 million light-years",
    description:
      "Also known as Messier 31(M31) is a barred spiral galaxy and the nearest large galaxy to the Milky Way",
    radius: "46.56 kiloparsecs",
    id: 1,
    img: andromeda,
  },
  {
    name: "Milky Way",
    distance: "Current location",
    radius: "26.8 kiloparsecs",
    description:
      "The Milky Way is the galaxy that includes our Solar System, with the name describing the galaxy's appearance from Earth: a hazy band of light seen in the night sky formed from stars that cannot be individually distinguished by the naked eye",

    id: 2,
    img: milkyway,
  },
  {
    name: "Triangulum",
    distance: "3.2 million light-years",
    radius: "18.74 kiloparsecs",
    description:
      "The Triangulum Galaxy is the third-largest member of the Local Group of galaxies, behind the Andromeda Galaxy and the Milky Way. It is one of the most distant permanent objects that can be viewed with the naked eye",
    id: 3,
    img: triangulum,
  },
  {
    id: 4,
    name: "ESO 137-001",
    distance: "220 million light-years",
    radius: "30.66 kiloparsecs",
    description:
      "ESO 137-001 is a barred spiral galaxy with located in the constellation Triangulum Australe and in the cluster Abell 3627. As the galaxy moves to the center of the cluster at 1900 km/s  it is stripped by hot gas, thus creating a 260,000 light-year long tail. This is called ram pressure stripping. The intergalactic gas in Abell 3627 is at 100 million Kelvin, which causes star formation in the tails.",
    img: eso,
  },
];

export const nebulae: IGalaxy[] = [
  {
    name: "Orion Nebula",
    distance: "1344 light-years",
    radius: "3.7 parsecs",
    description:
      "The Orion Nebula (also known as Messier 42, M42, or NGC 1976) is a diffuse nebula situated in the Milky Way, being south of Orion's Belt in the constellation of Orion. It is one of the brightest nebulae and is visible to the naked eye in the night sky and is the closest region of massive star formation to Earth. ",
    id: 1,
    img: orion,
  },
  {
    name: "Crab Nebula",
    distance: "6500 light-years",
    radius: "1.7 parsecs",
    description:
      "Crab Nebula, (catalog numbers NGC 1952 and M1), probably the most intensely studied bright nebula, in the constellation Taurus. It is assumed to be the remnant of a supernova (violently exploding star) observed by Chinese and other astronomers first on July 4, 1054. The supernova was visible in daylight for 23 days and at night for almost 2 years. There are no records of its observation at the time by Europeans.",
    id: 2,
    img: crab,
  },
  {
    name: "Helix Nebula",
    distance: "650 light-years",
    radius: "0.88 parsecs",
    description:
      "This object, called the Helix nebula, lies in the constellation of Aquarius. Also known by the catalog number NGC 7293, it is a typical example of a class of objects called planetary nebulae. Discovered in the 18th century, these cosmic works of art were erroneously named for their resemblance to gas-giant planets.\n" +
      "\n" +
      "Planetary nebulae are actually the remains of stars that once looked a lot like our sun. These stars spend most of their lives turning hydrogen into helium in massive runaway nuclear fusion reactions in their cores. In fact, this process of fusion provides all the light and heat that we get from our sun.",
    id: 3,
    img: helix,
  },
   {
    name: "Eagle Nebula",
    distance: "7000 light-years",
    radius: "21.5 parsecs",
    description:
        "The Eagle Nebula, also known as Messier 16 or M16, is one of the most amazing sights you can see in a large telescope. It’s the location of several famous structures, including the stunning Pillars of Creation, a star-forming region. The Eagle Nebula contains not only the Pillars of Creation but several other star-forming regions as well. It also has many emission nebulae, or clouds in space that shine with their own light. And it has some dark nebulae. These are space clouds that don’t shine themselves, but that can be seen because they obscure light from shining objects located behind them.",
    id: 4,
    img: eagle,
  },
  {
    name: "Omega Nebula",
    distance: "5500 light-years",
    radius: "3.4 parsecs",
    description:
        "M17, also known as the Omega Nebula or Swan Nebula, is one of the largest star-forming regions in the Milky Way galaxy. M17 contains one of our galaxy’s youngest star clusters, at only 1 million years old. However, many of the young stars in this cluster are impossible to see because of the gas and dust that surrounds them. The powerful radiation from the young stars evaporates and erodes the dense clouds of cold gas in which new stars form. ",
    id: 5,
    img: omega,
  },
];

export const wholeListOfSpaceItems: [IStar[], IGalaxy[], IGalaxy[]] = [blackHolesList, galaxiesList, nebulae];
