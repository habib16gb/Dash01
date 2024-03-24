import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface inDashContext {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashContext = createContext<inDashContext | null>(null);

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const DashContextProvider = ({ children }: Props) => {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <DashContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </DashContext.Provider>
  );
};

export const useStateContext = () => useContext(DashContext) as inDashContext;
