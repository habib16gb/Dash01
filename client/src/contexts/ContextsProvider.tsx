import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface inDashContext {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isClicked: tyState;
  setIsClicked: React.Dispatch<React.SetStateAction<tyState>>;
  handleClick: (clicked: enClicked) => void;
  screenSize: number;
  setScreenSize: React.Dispatch<React.SetStateAction<number>>;
}

const DashContext = createContext<inDashContext | null>(null);

export enum enClicked {
  CHAT = "chat",
  CART = "cart",
  USER_PROFILE = "userProfile",
  NOTIFICATION = "notification",
}

type tyState = {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
};

const initialState: tyState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const DashContextProvider = ({ children }: Props) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked: enClicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <DashContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};

export const useStateContext = () => useContext(DashContext) as inDashContext;
