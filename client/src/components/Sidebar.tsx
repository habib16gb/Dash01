import { Link, NavLink } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { links } from "../data/data";
import { useStateContext } from "../contexts/ContextsProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu !== undefined && screenSize <= 900) setActiveMenu(false);
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2 rounded-lg text-white text-md m-2";
  const inactiveLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 transition-all duration-300">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to={"/"}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extralight tracking-tight dark:text-white text-slate-900  "
              onClick={handleCloseSidebar}
            >
              <FaLaptopCode className="text-3xl" />
              <span>HabibDev</span>
            </Link>
            <Tooltip title="Menu" placement="bottom">
              <IconButton
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                aria-label="menu"
                onClick={() => setActiveMenu(!activeMenu)}
              >
                <MdOutlineCancel />
              </IconButton>
            </Tooltip>
          </div>
          <div className="mt-10">
            {links.map((link, index) => (
              <div key={index}>
                <p className="text-gray-400 m-3 mt4 capitalize">{link.title}</p>
                {link.links.map((link, index) => (
                  <NavLink
                    onClick={handleCloseSidebar}
                    style={({ isActive }) =>
                      isActive ? { backgroundColor: currentColor } : {}
                    }
                    className={({ isActive }) =>
                      isActive ? activeLink : inactiveLink
                    }
                    to={link.name}
                    key={index}
                  >
                    <link.icon />
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
