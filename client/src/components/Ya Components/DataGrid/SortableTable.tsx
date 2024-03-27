import MyTable, { PropsMyTable } from "./MyTable";
import {
  TiArrowUnsorted,
  TiArrowSortedUp,
  TiArrowSortedDown,
} from "react-icons/ti";
import useSort, { enSortOrder } from "../../../hooks/useSort";


const SortableTable = (props: PropsMyTable) => {
  const { data, config } = props;
  const { handleSort, sortBy, sortOrder, sortedData } = useSort(data, config);
  

  const updatedConfig = config.map((col) => {
    if (!col.sortValue) return col;

    return {
      ...col,
      header: () => (
        <th className='cursor-pointer' onClick={() => handleSort(col.label)}>
          <div className=' flex items-center justify-center gap-3'>
            {getIcons(col.label, sortBy, sortOrder)}
            {col.label}
          </div>
        </th>
      ),
    };
  });

  return <MyTable {...props} data={sortedData} config={updatedConfig} />;
};

function getIcons(
  label: string,
  sortBy: string | null,
  sortOrder: enSortOrder | null
) {
  if (label !== sortBy) {
    return <TiArrowUnsorted />;
  }

  switch (sortOrder) {
    case null:
      return <TiArrowUnsorted />;
    case enSortOrder.ASC:
      return <TiArrowSortedUp />;
    case enSortOrder.DESC:
      return <TiArrowSortedDown />;
    default:
      break;
  }
}

export default SortableTable;
