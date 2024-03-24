import { useStateContext } from "../contexts/ContextsProvider";

const Navbar = () => {
  const { setActiveMenu } = useStateContext();
  return (
    <div>
      <p>navbar</p>
      <button
        onClick={() => setActiveMenu(true)}
        className='p-2 bg-green-300 rounded-full m-6'
      >
        show menu
      </button>
    </div>
  );
};

export default Navbar;
