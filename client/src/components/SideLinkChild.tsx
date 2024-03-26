import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextsProvider";
import { tyChildrenLink } from "../data/data";

interface Props {
  link: tyChildrenLink;
  path: string;
  onClick: () => void;
}

const activeLink =
  "flex items-center justify-between pr-4 gap-5 pl-16 pt-3 pb-2 rounded-lg text-white text-md m-2";
const inactiveLink =
  "flex items-center justify-between pr-4 gap-5 pl-16 pt-3 pb-2 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

const SideLinkChild = ({ link, onClick, path }: Props) => {
  const { currentColor } = useStateContext();

  return (
    <NavLink
      onClick={onClick}
      style={({ isActive }) =>
        isActive ? { backgroundColor: currentColor } : {}
      }
      className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
      to={`${path}/${link.name}`}
    >
      <span className='capitalize'>{link.name}</span>
      {link.icon && (
        <link.icon className='text-2xl text-slate-500 hover:text-black' />
      )}
      {/* <link.icon /> */}
    </NavLink>
  );
};

export default SideLinkChild;
