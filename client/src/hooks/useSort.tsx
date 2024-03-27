import { useState } from "react";
import { tyRows } from "../pages/YaReactDataGrid";
import { inConfig } from "../components/Ya Components/DataGrid/MyTable";
// import { PropsMyTable } from "../components/Ya Components/DataGrid/MyTable";

export enum enSortOrder {
  ASC = "asc",
  DESC = "desc",
}

const useSort = (data: tyRows[], config: inConfig[]) => {
  const [sortOrder, setSortOrder] = useState<null | enSortOrder>(null);
  const [sortBy, setSortBy] = useState<null | string>(null);
  let sortedData = data;

  const handleSort = (label: string) => {
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

  if (sortBy && sortOrder) {
    const column = config.find((col) => col.label === sortBy);

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
  return { handleSort, sortBy, sortOrder, sortedData };
};

export default useSort;
