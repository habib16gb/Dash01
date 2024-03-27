import { useState } from "react";
import MyTable, { PropsMyTable } from "./MyTable";
import {
  TiArrowUnsorted,
  TiArrowSortedUp,
  TiArrowSortedDown,
} from "react-icons/ti";

export enum enSortOrder {
  ASC = "asc",
  DESC = "desc",
}

const SortableTable = (props: PropsMyTable) => {
  const [sortOrder, setSortOrder] = useState<null | enSortOrder>(null);
  const [sortBy, setSortBy] = useState<null | string>(null);
  const { config, data } = props;

  const handleClick = (label: string) => {
    if (sortBy && label !== sortBy) {
      setSortBy(label);
      setSortOrder(enSortOrder.ASC);
      return;
    }

    switch (sortOrder) {
      case null:
        setSortOrder(enSortOrder.ASC);
        setSortBy(label);
        break;
      case enSortOrder.ASC:
        setSortOrder(enSortOrder.DESC);
        setSortBy(label);
        break;
      case enSortOrder.DESC:
        setSortOrder(null);
        setSortBy(null);
        break;
      default:
        break;
    }
  };

  const updatedConfig = config.map((col) => {
    if (!col.sortValue) return col;

    return {
      ...col,
      header: () => (
        <th className='cursor-pointer' onClick={() => handleClick(col.label)}>
          <div className=' flex items-center justify-center gap-3'>
            {getIcons(col.label, sortBy, sortOrder)}
            {col.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;

  if (sortBy && sortOrder) {
    const column = config.find((col) => col.label === sortBy);

    if (column) {
      sortedData = [...data].sort((a, b) => {
        const valueA: typeof column.sortValue = column?.sortValue(a);
        const valueB: typeof column.sortValue = column?.sortValue(b);

        const reverseOrder = sortOrder === enSortOrder.ASC ? 1 : -1;

        if (typeof valueA === "string") {
          return valueA.localeCompare(valueB) * reverseOrder;
        } else if (typeof valueA === "number") {
          return (valueA - valueB) * reverseOrder;
        }
      });
    }
  }

  return <MyTable {...props} data={sortedData} config={updatedConfig} />;
};

function getIcons(label: string, sortBy: string, sortOrder: enSortOrder) {
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
