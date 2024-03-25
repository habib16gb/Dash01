import { MdOutlineCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { themeColors } from "../data/data";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useStateContext } from "../contexts/ContextsProvider";
export { themeColors } from "../data/data";

const ThemeSettings = () => {
  const { setColor, setMode, currentColor, currentMode, setThemeSettings } =
    useStateContext();
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl capitalize">settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex flex-col border-t-1 border-slate-400 p-4 ml-4">
          <p className="font-semibold text-lg capitalize text-slate-700">
            theme options
          </p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value={"Light"}
              className="cursor-pointer"
              onChange={() => {}}
              checked={true}
            />
            <label
              className="ml-2 capitalize text-sm cursor-pointer"
              htmlFor="light"
            >
              light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value={"Dark"}
              className="cursor-pointer"
              onChange={() => {}}
              checked={true}
            />
            <label
              className="ml-2 capitalize text-sm cursor-pointer"
              htmlFor="dark"
            >
              dark
            </label>
          </div>
        </div>
        <div className="flex flex-col border-t-1 border-slate-400 p-4 ml-4">
          <p className="font-semibold text-lg capitalize text-slate-700">
            theme colors
          </p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <Tooltip key={index} placement="top" title={item.name}>
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center ">
                  <button
                    className="h-10 w-10 rounded-full cursor-pointer flex items-center justify-center"
                    aria-label="btn"
                    style={{ backgroundColor: item.color }}
                    onClick={() => {}}
                  >
                    <FaCheck
                      className={`text-2xl text-white ${
                        item.color == currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
