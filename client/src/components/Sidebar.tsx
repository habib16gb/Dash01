import { Link, NavLink } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center '>
            <Link
              to={"/"}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extralight tracking-tight dark:text-white text-slate-900  '
              onClick={() => {}}
            >
              <FaLaptopCode className='text-3xl' />
              <span>HabibDev</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
