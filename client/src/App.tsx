import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { Navbar, Sidebar, ThemeSettings } from "./components";

import { useStateContext } from "./contexts/ContextsProvider";

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className='flex relative dark:bg-main-dark-bg '>
        <div className='fixed right-4 bottom-4 z-50'>
          <Tooltip title='settings' placement='top'>
            <IconButton
              aria-label='settings'
              onClick={() => setThemeSettings(true)}
            >
              <SettingsIcon
                style={{ background: currentColor }}
                className='text-3xl rounded-full hover:drop-shadow-xl p-1 hover:bg-white text-white'
              />
            </IconButton>
          </Tooltip>
        </div>
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white  '>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-1"
          }`}
        >
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
            <Navbar />
          </div>

          <div>{themeSettings && <ThemeSettings />}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
