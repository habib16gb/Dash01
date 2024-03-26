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
        path: '/ya/react',
        children: [
          {name: "tree"},
          {name: "grid table"}
        ]
      }
    ]
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
