import { IconType } from "react-icons/lib";
import { AiOutlineDashboard } from "react-icons/ai";
import { TbComponents } from "react-icons/tb";
import { FcStatistics } from "react-icons/fc";
import { CiDatabase, CiSquarePlus } from "react-icons/ci";
import { GiChart } from "react-icons/gi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth, MdOutlineShoppingCart } from "react-icons/md";
import { PiKanbanLight } from "react-icons/pi";
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
  children?: tyChildrenLink[];
};

export interface inNavbar {
  title: string;
  links: tyLink[];
}

export const links: inNavbar[] = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Dashboard",
        icon: AiOutlineDashboard,
        children: [{ name: "Default" }, { name: "Analytics" }],
      },
      {
        name: "Components",
        icon: TbComponents,
      },
    ],
  },
  {
    title: "widgets",
    links: [
      {
        name: "Statistics",
        icon: FcStatistics,
      },
      {
        name: "Data",
        icon: CiDatabase,
      },
      {
        name: "Chart",
        icon: GiChart,
      },
    ],
  },
  {
    title: "Applicationa",
    links: [
      {
        name: "Chat",
        icon: IoChatboxEllipsesOutline,
      },
      {
        name: "Calendar",
        icon: MdOutlineCalendarMonth,
      },
      {
        name: "Kanban",
        icon: PiKanbanLight,
      },
      {
        name: "Customer",
        icon: RiCustomerServiceLine,
        children: [
          { name: "list", icon: CiSquarePlus },
          {
            name: "cards",
          },
        ],
      },
      {
        name: "Invoice",
        icon: AiOutlineDashboard,
        children: [
          { name: "create" },
          { name: "details" },
          { name: "list" },
          { name: "edit" },
        ],
      },
      {
        name: "Profile",
        icon: CgProfile,
        children: [{ name: "user profile" }, { name: "account profile" }],
      },
      {
        name: "E-commerce",
        icon: MdOutlineShoppingCart,
        children: [
          { name: "products" },
          { name: "product details" },
          { name: "product list" },
          { name: "add new product" },
          { name: "checkout" },
        ],
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
