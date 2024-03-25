import { Tooltip } from "@mui/material";
import { ReactNode } from "react";

interface inNavBtnProps {
  title: string;
  customFunc: () => void;
  icon: ReactNode;
  color: string;
  dotColor: string;
}

const NavBtn = ({
  title,
  customFunc,
  icon,
  color,
  dotColor,
}: inNavBtnProps) => {
  return (
    <Tooltip title={title} placement='bottom'>
      <button
        type='button'
        onClick={() => customFunc()}
        style={{ color }}
        className='relative text-xl rounded-full p-3 hover:bg-light-gray'
      >
        <span
          className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
          style={{ background: dotColor }}
        />
        {icon}
      </button>
    </Tooltip>
  );
};

export default NavBtn;
