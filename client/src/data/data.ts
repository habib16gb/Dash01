import { IconType } from "react-icons/lib";
import { AiOutlineDashboard } from "react-icons/ai";
import { TbComponents } from "react-icons/tb";
import { FcStatistics } from "react-icons/fc";
import { CiDatabase, CiSquarePlus } from "react-icons/ci";
import { GiChart } from "react-icons/gi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth, MdOutlineShoppingCart } from "react-icons/md";
import { PiKanbanLight } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { RiCustomerServiceLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { tyRows } from "../pages/YaReactDataGrid";

export interface inThemeColors {
  name: string;
  color: string;
}

export type tyChildrenLink = {
  name: string;
  icon?: IconType;
};

export type tyLink = {
  name: string;
  icon: IconType;
  path: string;
  children?: tyChildrenLink[];
};

export interface inNavbar {
  title: string;
  links: tyLink[];
}

export const links: inNavbar[] = [
  {
    title: "dashboard",
    links: [
      {
        name: "dashboard",
        icon: AiOutlineDashboard,
        path: "/dashboard",
        children: [{ name: "default" }, { name: "analytics" }],
      },
      {
        name: "components",
        icon: TbComponents,
        path: "/components",
      },
    ],
  },
  {
    title: "YacineAcademy exercices",
    links: [
      {
        name: "react js",
        icon: FaReact,
        path: "/ya/react",
        children: [{ name: "tree" }, { name: "grid table" }],
      },
    ],
  },
  {
    title: "widgets",

    links: [
      {
        name: "statistics",
        icon: FcStatistics,
        path: "/widget/statistics",
      },
      {
        name: "data",
        icon: CiDatabase,
        path: "/widget/data",
      },
      {
        name: "chart",
        icon: GiChart,
        path: "/widget/chart",
      },
    ],
  },
  {
    title: "application",
    links: [
      {
        name: "e-commerce",
        icon: MdOutlineShoppingCart,
        path: "/apps/e-commerce",
        children: [
          { name: "products" },
          { name: "product details" },
          { name: "product list" },
          { name: "add new product" },
          { name: "checkout" },
        ],
      },
      {
        name: "chat",
        icon: IoChatboxEllipsesOutline,
        path: "/apps/chat",
      },
      {
        name: "calendar",
        icon: MdOutlineCalendarMonth,
        path: "/apps/calendar",
      },
      {
        name: "kanban",
        icon: PiKanbanLight,
        path: "/apps/kanban",
      },
      {
        name: "customer",
        icon: RiCustomerServiceLine,
        path: "/apps/customer",
        children: [
          { name: "list", icon: CiSquarePlus },
          {
            name: "cards",
          },
        ],
      },
      {
        name: "invoice",
        icon: AiOutlineDashboard,
        path: "/apps/invoice",
        children: [
          { name: "create" },
          { name: "details" },
          { name: "list" },
          { name: "edit" },
        ],
      },
      {
        name: "profile",
        icon: CgProfile,
        path: "/apps/profile",
        children: [{ name: "user profile" }, { name: "account profile" }],
      },
    ],
  },
];

export const themeColors: inThemeColors[] = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const dataClients: tyRows[] = [
  {
    id: 1,
    first_name: "Junina",
    last_name: "Barette",
    email: "jbarette0@addthis.com",
    gender: "Female",
    age: 21,
    amount: 422482.6,
  },
  {
    id: 2,
    first_name: "Vasili",
    last_name: "Giraudeau",
    email: "vgiraudeau1@hexun.com",
    gender: "Male",
    age: 52,
    amount: 535734.52,
  },
  {
    id: 3,
    first_name: "Janith",
    last_name: "Woof",
    email: "jwoof2@who.int",
    gender: "Bigender",
    age: 45,
    amount: 905732.84,
  },
  {
    id: 4,
    first_name: "Colan",
    last_name: "Ledbury",
    email: "cledbury3@apple.com",
    gender: "Male",
    age: 35,
    amount: 407406.42,
  },
  {
    id: 5,
    first_name: "Deny",
    last_name: "Vairow",
    email: "dvairow4@apache.org",
    gender: "Female",
    age: 51,
    amount: 264892.33,
  },
  {
    id: 6,
    first_name: "Maximilianus",
    last_name: "Bus",
    email: "mbus5@sbwire.com",
    gender: "Male",
    age: 27,
    amount: 51269.51,
  },
  {
    id: 7,
    first_name: "Ali",
    last_name: "Klawi",
    email: "aklawi6@ftc.gov",
    gender: "Female",
    age: 20,
    amount: 567544.17,
  },
  {
    id: 8,
    first_name: "Davide",
    last_name: "Apple",
    email: "dapple7@google.fr",
    gender: "Male",
    age: 35,
    amount: 469925.09,
  },
  {
    id: 9,
    first_name: "Ellary",
    last_name: "Morrowe",
    email: "emorrowe8@t-online.de",
    gender: "Male",
    age: 20,
    amount: 571956.14,
  },
  {
    id: 10,
    first_name: "Fielding",
    last_name: "Lamprecht",
    email: "flamprecht9@nbcnews.com",
    gender: "Male",
    age: 42,
    amount: 845399.87,
  },
  {
    id: 11,
    first_name: "Thaddus",
    last_name: "Tattershaw",
    email: "ttattershawa@nsw.gov.au",
    gender: "Male",
    age: 68,
    amount: 133646.99,
  },
  {
    id: 12,
    first_name: "Brig",
    last_name: "Cockarill",
    email: "bcockarillb@creativecommons.org",
    gender: "Male",
    age: 18,
    amount: 311038.53,
  },
  {
    id: 13,
    first_name: "Binny",
    last_name: "Spellacy",
    email: "bspellacyc@vimeo.com",
    gender: "Female",
    age: 38,
    amount: 183298.92,
  },
  {
    id: 14,
    first_name: "Mirabella",
    last_name: "Behling",
    email: "mbehlingd@1688.com",
    gender: "Female",
    age: 23,
    amount: 906497.84,
  },
  {
    id: 15,
    first_name: "Molly",
    last_name: "Harbord",
    email: "mharborde@washington.edu",
    gender: "Female",
    age: 68,
    amount: 544186.01,
  },
  {
    id: 16,
    first_name: "Decca",
    last_name: "Merrilees",
    email: "dmerrileesf@artisteer.com",
    gender: "Male",
    age: 24,
    amount: 459447.67,
  },
  {
    id: 17,
    first_name: "Ripley",
    last_name: "Moggach",
    email: "rmoggachg@uol.com.br",
    gender: "Male",
    age: 34,
    amount: 818131.73,
  },
  {
    id: 18,
    first_name: "Milissent",
    last_name: "Rankin",
    email: "mrankinh@ehow.com",
    gender: "Female",
    age: 64,
    amount: 884548.95,
  },
  {
    id: 19,
    first_name: "Brand",
    last_name: "Buttler",
    email: "bbuttleri@bandcamp.com",
    gender: "Male",
    age: 42,
    amount: 143034.95,
  },
  {
    id: 20,
    first_name: "Stafani",
    last_name: "Gudde",
    email: "sguddej@abc.net.au",
    gender: "Female",
    age: 33,
    amount: 192481.76,
  },
  {
    id: 21,
    first_name: "Jefferson",
    last_name: "Petrushkevich",
    email: "jpetrushkevichk@xinhuanet.com",
    gender: "Male",
    age: 46,
    amount: 192052.04,
  },
  {
    id: 22,
    first_name: "Adda",
    last_name: "Chaudhry",
    email: "achaudhryl@google.co.uk",
    gender: "Female",
    age: 44,
    amount: 994447.72,
  },
  {
    id: 23,
    first_name: "Christin",
    last_name: "Sambles",
    email: "csamblesm@chicagotribune.com",
    gender: "Genderqueer",
    age: 42,
    amount: 192864.85,
  },
  {
    id: 24,
    first_name: "Thebault",
    last_name: "Carrel",
    email: "tcarreln@chicagotribune.com",
    gender: "Male",
    age: 22,
    amount: 728364.28,
  },
  {
    id: 25,
    first_name: "Gasper",
    last_name: "Duguid",
    email: "gduguido@netscape.com",
    gender: "Male",
    age: 34,
    amount: 136137.31,
  },
  {
    id: 26,
    first_name: "Melamie",
    last_name: "O'Clery",
    email: "mocleryp@discovery.com",
    gender: "Female",
    age: 39,
    amount: 697896.52,
  },
  {
    id: 27,
    first_name: "Luke",
    last_name: "Eliez",
    email: "leliezq@usatoday.com",
    gender: "Male",
    age: 47,
    amount: 152690.33,
  },
  {
    id: 28,
    first_name: "Alexandrina",
    last_name: "Wastell",
    email: "awastellr@boston.com",
    gender: "Female",
    age: 58,
    amount: 80470.6,
  },
  {
    id: 29,
    first_name: "Ethel",
    last_name: "Benediktovich",
    email: "ebenediktovichs@examiner.com",
    gender: "Female",
    age: 64,
    amount: 984578.52,
  },
  {
    id: 30,
    first_name: "Odell",
    last_name: "Merwede",
    email: "omerwedet@sciencedaily.com",
    gender: "Male",
    age: 67,
    amount: 824500.82,
  },
  {
    id: 31,
    first_name: "Dunn",
    last_name: "Swindell",
    email: "dswindellu@usa.gov",
    gender: "Male",
    age: 30,
    amount: 723911.68,
  },
  {
    id: 32,
    first_name: "Tab",
    last_name: "Cicci",
    email: "tcicciv@miitbeian.gov.cn",
    gender: "Male",
    age: 20,
    amount: 690482.03,
  },
  {
    id: 33,
    first_name: "Oralla",
    last_name: "Jerdan",
    email: "ojerdanw@usa.gov",
    gender: "Agender",
    age: 39,
    amount: 180984.09,
  },
  {
    id: 34,
    first_name: "Jarrid",
    last_name: "MacParland",
    email: "jmacparlandx@sciencedaily.com",
    gender: "Male",
    age: 58,
    amount: 715957.74,
  },
  {
    id: 35,
    first_name: "Davie",
    last_name: "Bushby",
    email: "dbushbyy@ocn.ne.jp",
    gender: "Male",
    age: 51,
    amount: 871327.71,
  },
  {
    id: 36,
    first_name: "Erminie",
    last_name: "Chinn",
    email: "echinnz@topsy.com",
    gender: "Female",
    age: 33,
    amount: 766572.55,
  },
  {
    id: 37,
    first_name: "Charis",
    last_name: "Melladew",
    email: "cmelladew10@mashable.com",
    gender: "Agender",
    age: 60,
    amount: 684549.69,
  },
  {
    id: 38,
    first_name: "Mareah",
    last_name: "Caldicott",
    email: "mcaldicott11@altervista.org",
    gender: "Female",
    age: 55,
    amount: 803442.82,
  },
  {
    id: 39,
    first_name: "Collette",
    last_name: "Stelle",
    email: "cstelle12@joomla.org",
    gender: "Female",
    age: 39,
    amount: 996636.72,
  },
  {
    id: 40,
    first_name: "Quincey",
    last_name: "Evill",
    email: "qevill13@multiply.com",
    gender: "Polygender",
    age: 26,
    amount: 522489.63,
  },
  {
    id: 41,
    first_name: "Shae",
    last_name: "Anthoine",
    email: "santhoine14@soup.io",
    gender: "Male",
    age: 68,
    amount: 385901.8,
  },
  {
    id: 42,
    first_name: "Ranique",
    last_name: "M'Quharge",
    email: "rmquharge15@wisc.edu",
    gender: "Female",
    age: 27,
    amount: 263415.41,
  },
  {
    id: 43,
    first_name: "Irina",
    last_name: "Dello",
    email: "idello16@hp.com",
    gender: "Female",
    age: 48,
    amount: 452493.74,
  },
  {
    id: 44,
    first_name: "Dru",
    last_name: "Bonafant",
    email: "dbonafant17@geocities.com",
    gender: "Female",
    age: 64,
    amount: 616884.34,
  },
  {
    id: 45,
    first_name: "Bridget",
    last_name: "Hirth",
    email: "bhirth18@ucsd.edu",
    gender: "Female",
    age: 60,
    amount: 850184.52,
  },
  {
    id: 46,
    first_name: "Gwynne",
    last_name: "Warham",
    email: "gwarham19@tinypic.com",
    gender: "Female",
    age: 31,
    amount: 207366.1,
  },
  {
    id: 47,
    first_name: "Mitchell",
    last_name: "Maffei",
    email: "mmaffei1a@cnn.com",
    gender: "Male",
    age: 62,
    amount: 874408.07,
  },
  {
    id: 48,
    first_name: "Chan",
    last_name: "Ferry",
    email: "cferry1b@nsw.gov.au",
    gender: "Male",
    age: 57,
    amount: 355888.36,
  },
  {
    id: 49,
    first_name: "Ferdinanda",
    last_name: "Gedney",
    email: "fgedney1c@wikia.com",
    gender: "Genderqueer",
    age: 34,
    amount: 513638.86,
  },
  {
    id: 50,
    first_name: "Arlan",
    last_name: "Halsall",
    email: "ahalsall1d@themeforest.net",
    gender: "Male",
    age: 37,
    amount: 602417.69,
  },
  {
    id: 51,
    first_name: "Pia",
    last_name: "Perrins",
    email: "pperrins1e@noaa.gov",
    gender: "Female",
    age: 28,
    amount: 693361.29,
  },
  {
    id: 52,
    first_name: "Leontine",
    last_name: "Barnsdale",
    email: "lbarnsdale1f@smugmug.com",
    gender: "Female",
    age: 48,
    amount: 291865.13,
  },
  {
    id: 53,
    first_name: "Ralph",
    last_name: "Piaggia",
    email: "rpiaggia1g@google.es",
    gender: "Male",
    age: 20,
    amount: 280816.29,
  },
  {
    id: 54,
    first_name: "Isabel",
    last_name: "Pollicott",
    email: "ipollicott1h@oaic.gov.au",
    gender: "Female",
    age: 58,
    amount: 559733.64,
  },
  {
    id: 55,
    first_name: "Nial",
    last_name: "McFadzean",
    email: "nmcfadzean1i@lycos.com",
    gender: "Genderqueer",
    age: 46,
    amount: 529366.22,
  },
  {
    id: 56,
    first_name: "Vachel",
    last_name: "Merryweather",
    email: "vmerryweather1j@bloomberg.com",
    gender: "Male",
    age: 47,
    amount: 683435.62,
  },
  {
    id: 57,
    first_name: "Terrell",
    last_name: "Philippon",
    email: "tphilippon1k@dagondesign.com",
    gender: "Male",
    age: 43,
    amount: 824159.82,
  },
  {
    id: 58,
    first_name: "Deborah",
    last_name: "Kittley",
    email: "dkittley1l@jimdo.com",
    gender: "Female",
    age: 29,
    amount: 402934.64,
  },
  {
    id: 59,
    first_name: "Mahmoud",
    last_name: "Lambert",
    email: "mlambert1m@usa.gov",
    gender: "Male",
    age: 18,
    amount: 91108.1,
  },
  {
    id: 60,
    first_name: "Dorine",
    last_name: "Peyzer",
    email: "dpeyzer1n@craigslist.org",
    gender: "Female",
    age: 54,
    amount: 684449.69,
  },
  {
    id: 61,
    first_name: "Cosimo",
    last_name: "Donneely",
    email: "cdonneely1o@acquirethisname.com",
    gender: "Male",
    age: 20,
    amount: 747423.57,
  },
  {
    id: 62,
    first_name: "Joellen",
    last_name: "Tansley",
    email: "jtansley1p@friendfeed.com",
    gender: "Female",
    age: 59,
    amount: 902830.25,
  },
  {
    id: 63,
    first_name: "Georgetta",
    last_name: "Kneaphsey",
    email: "gkneaphsey1q@bloglines.com",
    gender: "Female",
    age: 33,
    amount: 929725.37,
  },
  {
    id: 64,
    first_name: "Lowe",
    last_name: "Calderon",
    email: "lcalderon1r@webs.com",
    gender: "Male",
    age: 28,
    amount: 496416.33,
  },
  {
    id: 65,
    first_name: "Humfried",
    last_name: "Bartoloma",
    email: "hbartoloma1s@gnu.org",
    gender: "Male",
    age: 19,
    amount: 923814.01,
  },
  {
    id: 66,
    first_name: "Wainwright",
    last_name: "Knottley",
    email: "wknottley1t@amazon.com",
    gender: "Male",
    age: 47,
    amount: 554158.55,
  },
  {
    id: 67,
    first_name: "Duane",
    last_name: "Crosson",
    email: "dcrosson1u@washingtonpost.com",
    gender: "Male",
    age: 36,
    amount: 832226.63,
  },
  {
    id: 68,
    first_name: "Feodor",
    last_name: "McAllen",
    email: "fmcallen1v@freewebs.com",
    gender: "Male",
    age: 59,
    amount: 814839.75,
  },
  {
    id: 69,
    first_name: "Cory",
    last_name: "Botwood",
    email: "cbotwood1w@cmu.edu",
    gender: "Polygender",
    age: 31,
    amount: 297626.41,
  },
  {
    id: 70,
    first_name: "Roosevelt",
    last_name: "Dougherty",
    email: "rdougherty1x@webs.com",
    gender: "Male",
    age: 34,
    amount: 139454.6,
  },
  {
    id: 71,
    first_name: "Nell",
    last_name: "Balden",
    email: "nbalden1y@whitehouse.gov",
    gender: "Female",
    age: 46,
    amount: 141568.82,
  },
  {
    id: 72,
    first_name: "Caprice",
    last_name: "Kynastone",
    email: "ckynastone1z@t.co",
    gender: "Female",
    age: 29,
    amount: 990300.24,
  },
  {
    id: 73,
    first_name: "Pia",
    last_name: "Merit",
    email: "pmerit20@usgs.gov",
    gender: "Female",
    age: 47,
    amount: 708772.75,
  },
  {
    id: 74,
    first_name: "Freeland",
    last_name: "Ginman",
    email: "fginman21@yandex.ru",
    gender: "Male",
    age: 65,
    amount: 382848.33,
  },
  {
    id: 75,
    first_name: "Conway",
    last_name: "Schaben",
    email: "cschaben22@thetimes.co.uk",
    gender: "Male",
    age: 37,
    amount: 245667.33,
  },
  {
    id: 76,
    first_name: "Fernandina",
    last_name: "Charer",
    email: "fcharer23@paginegialle.it",
    gender: "Female",
    age: 18,
    amount: 164944.82,
  },
  {
    id: 77,
    first_name: "Mikey",
    last_name: "Essex",
    email: "messex24@epa.gov",
    gender: "Male",
    age: 55,
    amount: 174799.77,
  },
  {
    id: 78,
    first_name: "Justinian",
    last_name: "Creasy",
    email: "jcreasy25@weather.com",
    gender: "Male",
    age: 38,
    amount: 706948.05,
  },
  {
    id: 79,
    first_name: "Guillema",
    last_name: "Bicker",
    email: "gbicker26@g.co",
    gender: "Female",
    age: 26,
    amount: 106309.66,
  },
  {
    id: 80,
    first_name: "Harald",
    last_name: "Du Plantier",
    email: "hduplantier27@wufoo.com",
    gender: "Male",
    age: 53,
    amount: 57473.14,
  },
  {
    id: 81,
    first_name: "Cassi",
    last_name: "Lemmens",
    email: "clemmens28@timesonline.co.uk",
    gender: "Female",
    age: 46,
    amount: 468594.36,
  },
  {
    id: 82,
    first_name: "Jarid",
    last_name: "Fatscher",
    email: "jfatscher29@trellian.com",
    gender: "Male",
    age: 58,
    amount: 359980.0,
  },
  {
    id: 83,
    first_name: "Rolando",
    last_name: "Mouatt",
    email: "rmouatt2a@constantcontact.com",
    gender: "Male",
    age: 65,
    amount: 604896.36,
  },
  {
    id: 84,
    first_name: "Nev",
    last_name: "Doble",
    email: "ndoble2b@arstechnica.com",
    gender: "Male",
    age: 59,
    amount: 140300.26,
  },
  {
    id: 85,
    first_name: "Teddie",
    last_name: "Hinkes",
    email: "thinkes2c@nature.com",
    gender: "Male",
    age: 54,
    amount: 508284.68,
  },
  {
    id: 86,
    first_name: "Marline",
    last_name: "Hovert",
    email: "mhovert2d@fastcompany.com",
    gender: "Agender",
    age: 24,
    amount: 280835.32,
  },
  {
    id: 87,
    first_name: "El",
    last_name: "Thiolier",
    email: "ethiolier2e@list-manage.com",
    gender: "Male",
    age: 51,
    amount: 508104.52,
  },
  {
    id: 88,
    first_name: "Emmery",
    last_name: "Shiers",
    email: "eshiers2f@blinklist.com",
    gender: "Male",
    age: 28,
    amount: 193679.9,
  },
  {
    id: 89,
    first_name: "Vanda",
    last_name: "Woltman",
    email: "vwoltman2g@smh.com.au",
    gender: "Female",
    age: 48,
    amount: 39158.77,
  },
  {
    id: 90,
    first_name: "Malanie",
    last_name: "Saich",
    email: "msaich2h@wired.com",
    gender: "Female",
    age: 48,
    amount: 989189.97,
  },
  {
    id: 91,
    first_name: "Daren",
    last_name: "Ausiello",
    email: "dausiello2i@joomla.org",
    gender: "Male",
    age: 27,
    amount: 181791.07,
  },
  {
    id: 92,
    first_name: "Suzanne",
    last_name: "MacGahy",
    email: "smacgahy2j@dyndns.org",
    gender: "Female",
    age: 59,
    amount: 224783.91,
  },
  {
    id: 93,
    first_name: "Lonnie",
    last_name: "Truscott",
    email: "ltruscott2k@chicagotribune.com",
    gender: "Male",
    age: 20,
    amount: 603200.94,
  },
  {
    id: 94,
    first_name: "Filippa",
    last_name: "Fahy",
    email: "ffahy2l@themeforest.net",
    gender: "Female",
    age: 44,
    amount: 519371.8,
  },
  {
    id: 95,
    first_name: "Tracy",
    last_name: "Heaffey",
    email: "theaffey2m@house.gov",
    gender: "Agender",
    age: 35,
    amount: 316318.8,
  },
  {
    id: 96,
    first_name: "Bobby",
    last_name: "Yourell",
    email: "byourell2n@nytimes.com",
    gender: "Female",
    age: 62,
    amount: 221934.64,
  },
  {
    id: 97,
    first_name: "Leonhard",
    last_name: "Crickmore",
    email: "lcrickmore2o@constantcontact.com",
    gender: "Male",
    age: 63,
    amount: 785899.37,
  },
  {
    id: 98,
    first_name: "Demetra",
    last_name: "Heyfield",
    email: "dheyfield2p@edublogs.org",
    gender: "Female",
    age: 31,
    amount: 212987.31,
  },
  {
    id: 99,
    first_name: "Ethelda",
    last_name: "Mathiot",
    email: "emathiot2q@simplemachines.org",
    gender: "Female",
    age: 42,
    amount: 53861.45,
  },
  {
    id: 100,
    first_name: "Winn",
    last_name: "Lochran",
    email: "wlochran2r@imdb.com",
    gender: "Bigender",
    age: 61,
    amount: 612152.44,
  },
];
