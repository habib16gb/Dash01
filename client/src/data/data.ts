import { AiOutlineDashboard } from "react-icons/ai";
import { TbComponents } from "react-icons/tb";
import { CiDatabase } from "react-icons/ci";
import { FcStatistics } from "react-icons/fc";
import { FaRegChartBar } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { IconType } from "react-icons";

type tyChildrenLink = {
  name: string;
};

type tyLink = {
  name: string;
  icon: IconType;
  children?: tyChildrenLink[];
};

interface inLinks {
  title: string;
  links: tyLink[];
}

export const links: inLinks[] = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Dashboard",
        icon: AiOutlineDashboard,
        children: [{ name: "default" }, { name: "analytics" }],
      },
      { name: "Components", icon: TbComponents },
    ],
  },
  {
    title: "Widgets",
    links: [
      { name: "Statistics", icon: FcStatistics },
      { name: "Data", icon: CiDatabase },
      { name: "Chart", icon: FaRegChartBar },
    ],
  },
  {
    title: "Application",
    links: [
      { name: "Chat", icon: IoChatboxEllipsesOutline },
      { name: "Calendar", icon: LuCalendarDays },
      { name: "Kanban", icon: AiOutlineDashboard },
      {
        name: "Customer",
        icon: AiOutlineDashboard,
        children: [{ name: "list" }, { name: "Cards" }],
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
        icon: AiOutlineDashboard,
        children: [{ name: "user profile" }, { name: "account profile" }],
      },
      {
        name: "E-commerce",
        icon: AiOutlineDashboard,
        children: [
          { name: "Products" },
          { name: "Products Details" },
          { name: "Products List" },
          { name: "Add new Product" },
          { name: "checkout" },
        ],
      },
    ],
  },
  {
    title: "Forms & Tables",
    links: [
      { name: "Forms Validation", icon: FcStatistics },
      { name: "Forms Wizard", icon: FcStatistics },
      {
        name: "Layout",
        icon: FcStatistics,
        children: [
          { name: "basic" },
          { name: "multi column" },
          { name: "action bar" },
          { name: "sticky bar" },
        ],
      },
      {
        name: "Plugins",
        icon: FcStatistics,
        children: [
          { name: "mask" },
          { name: "clipboard" },
          { name: "reCapatcha" },
          { name: "editor" },
          { name: "dropzone" },
        ],
      },
      { name: "react table", icon: FcStatistics },
      { name: "mui react table", icon: FcStatistics },
    ],
  },
];
