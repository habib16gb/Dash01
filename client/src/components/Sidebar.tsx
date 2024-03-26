import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { links } from "../data/data";
import { useStateContext } from "../contexts/ContextsProvider";
import { SideLink, SideLinkChild } from ".";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const Sidebar = () => {
  const [expendedIndex, setExpendecIndex] = useState(-1);

  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu !== undefined && screenSize <= 900) setActiveMenu(false);
  };

  const handleExtract = (index: number) => {
    setExpendecIndex((prev) => (index === prev ? -1 : index));
  };

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 transition-all duration-300'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link
              to={"/"}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extralight tracking-tight dark:text-white text-slate-900  '
              onClick={handleCloseSidebar}
            >
              <FaLaptopCode className='text-3xl' />
              <span>HabibDev</span>
            </Link>
            <Tooltip title='Menu' placement='bottom'>
              <IconButton
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
                aria-label='menu'
                onClick={() => setActiveMenu(!activeMenu)}
              >
                <MdOutlineCancel />
              </IconButton>
            </Tooltip>
          </div>
          <div className='mt-10'>
            {links.map(({ links, title }, index) => (
              <div key={index}>
                <p className='text-gray-400 m-3 mt4 capitalize'>{title}</p>
                {links.map((link, index) => {
                  const isExpended = index === expendedIndex;
                  return link.children ? (
                    <div key={index}>
                      <div
                        className='px-4 pt-3 pb-2 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 cursor-pointer flex items-center justify-between'
                        onClick={() => handleExtract(index)}
                      >
                        <div className='flex items-center gap-5'>
                          <link.icon />
                          <span className='capitalize'>{link.name}</span>
                        </div>
                        {isExpended ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </div>
                      <div>
                        {isExpended &&
                          link.children.map((el, index) => (
                            <SideLinkChild
                              onClick={handleCloseSidebar}
                              key={index}
                              link={el}
                              path={link.path}
                            />
                          ))}
                      </div>
                    </div>
                  ) : (
                    <SideLink
                      onClick={handleCloseSidebar}
                      key={index}
                      link={link}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
