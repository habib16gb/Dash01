import { enClicked, useStateContext } from "../contexts/ContextsProvider";
import { AiOutlineMenuFold, AiOutlineMenuUnfold ,AiOutlineShoppingCart  } from "react-icons/ai";
import { BsChatLeftDots } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip'
import {Cart, Notification, UserProfile, Chat} from './'
import { ReactNode } from "react";


interface inNavBtnProps {
  title: string;
  customFunc: () => void;
  icon: ReactNode;
  color: string;
  dotColor: string;
}

const NavBtn = ({title,customFunc,icon,color,dotColor}: inNavBtnProps) => {
  return <Tooltip title={title} placement="bottom">
    <button type="button" onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" style={{background: dotColor}} >
        {icon}
      </span>
    </button>
  </Tooltip>
}

const Navbar = () => {
  const { setActiveMenu, isClicked, handleClick } = useStateContext();

 

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavBtn title="Menu" customFunc={() => setActiveMenu(prev => !prev)} color="blue" icon={<AiOutlineMenuFold />} dotColor="" />

      <div className="flex">
        <NavBtn title="Cart" customFunc={() => handleClick(enClicked.CART)} color="blue" icon={<AiOutlineShoppingCart />} dotColor="" />
        <NavBtn title="Chat" customFunc={() => handleClick(enClicked.CHAT)}  color="blue" icon={<BsChatLeftDots />} dotColor="#03c9d7" />
        <NavBtn title="Notification" customFunc={() => handleClick(enClicked.NOTIFICATION)} color="blue" icon={<IoMdNotificationsOutline />} dotColor="03c9d7" />

        <Tooltip title="Profile" placement="bottom">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick(enClicked.USER_PROFILE)}>
            <img className="rounded-full w-8 h-8" src="https://static.vecteezy.com/system/resources/previews/006/487/917/non_2x/man-avatar-icon-free-vector.jpg" alt="avatar" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">HabibDev</span>{" "}
            </p>
            <MdOutlineKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </Tooltip>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
