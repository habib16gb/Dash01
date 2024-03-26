import { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

interface inElement {
  name: string;

  children?: inElement[];
}
interface Props {
  item: inElement;
}

const MyTreeItem = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const icon = () => {
    return item.children ? <IoIosArrowForward /> : "";
  };
  return (
    <div>
      <div
        className='flex items-center  gap-2 w-48 px-2 py-1 hover:bg-slate-200 cursor-pointer'
        onClick={handleOpen}
      >
        <span>{isOpen ? <IoIosArrowDown /> : icon()}</span>
        <span>{item.name}</span>
      </div>
      {isOpen && (
        <div className='ml-8'>
          {item.children?.map((item, index) => (
            <MyTreeItem item={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTreeItem;
