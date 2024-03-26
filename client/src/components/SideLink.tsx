import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextsProvider";
import { tyLink } from "../data/data";

interface Props {
  link: tyLink;
  onClick: () => void;
}

const activeLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2 rounded-lg text-white text-md m-2";
const inactiveLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

const SideLink = ({ link, onClick }: Props) => {
  const { currentColor } = useStateContext();

  return (
    <NavLink
      onClick={onClick}
      style={({ isActive }) =>
        isActive ? { backgroundColor: currentColor } : {}
      }
      className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
      to={link.path}
    >
      <link.icon />
      <span className='capitalize'>{link.name}</span>
    </NavLink>
  );
};

export default SideLink;
