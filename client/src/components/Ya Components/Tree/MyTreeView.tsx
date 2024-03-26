import { MyTreeItem } from ".";

export interface inElement {
  name: string;
  children?: inElement[];
}

interface Props {
  listMenu: inElement[];
}

const MyTreeView = ({ listMenu }: Props) => {
  return (
    <div>
      {listMenu.map((item, index) => (
        <MyTreeItem item={item} key={index} />
      ))}
    </div>
  );
};

export default MyTreeView;
