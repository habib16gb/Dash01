import { Header } from "../components";
import MyTreeView, {
  inElement,
} from "../components/Ya Components/Tree/MyTreeView";

const listMenu: inElement[] = [
  {
    name: "Application",
    children: [{ name: "Calendar" }],
  },
  {
    name: "Documents",
    children: [
      { name: "OSS" },
      {
        name: "MUI",
        children: [{ name: "index.js" }],
      },
    ],
  },
];

const YaReactTree = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category={"YaAcademy"} title={"Tree"} />

      <div className='basic'>
        <MyTreeView listMenu={listMenu} />
      </div>
    </div>
  );
};

export default YaReactTree;
