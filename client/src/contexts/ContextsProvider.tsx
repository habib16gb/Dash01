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
  currentColor: string;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
  currentMode: string;
  setCurrentMode: React.Dispatch<React.SetStateAction<string>>;
  setColor: (e: any) => void;
  setMode: (e: any) => void;
  themeSettings: boolean;
  setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (e) => {
    setCurrentColor(e.target.value);
    localStorage.setItem("themeColor", e.target.value);
  };

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
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        setColor,
        setMode,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};

export const useStateContext = () => useContext(DashContext) as inDashContext;
