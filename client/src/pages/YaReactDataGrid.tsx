import { Header } from "../components";
import { SortableTable } from "../components/Ya Components/DataGrid";

import { inConfig } from "../components/Ya Components/DataGrid/MyTable";
// import productData from '../data/MOCK_DATA'
// import axios from 'axios'

export type tyFruit = {
  name: string;
  color: string;
  score: number;
};

const data: tyFruit[] = [
  { name: "orange", color: "bg-orange-500", score: 5 },
  { name: "apple", color: "bg-red-500", score: 4 },
  { name: "banana", color: "bg-yellow-500", score: 7 },
  { name: "lime", color: "bg-green-500", score: 1 },
];

const config: inConfig[] = [
  {
    label: "name",
    render: (fruit: tyFruit) => fruit.name,
    sortValue: (fruit: tyFruit) => fruit.name,
  },
  {
    label: "color",
    render: (fruit: tyFruit) => (
      <div className={`p-3 m-2 ${fruit.color}`}></div>
    ),
  },
  {
    label: "score",
    render: (fruit: tyFruit) => fruit.score,
    sortValue: (fruit: tyFruit) => fruit.score,
    header: () => (
      <th onClick={() => {}} className='bg-red-500'>
        score
      </th>
    ),
  },
  {
    label: "score squared",
    render: (fruit) => fruit.score ** 2,
    sortValue: (fruit) => fruit.score ** 2,
  },
];

const YaReactDataGrid = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category={"YaAcademy"} title={"DataGrid"} />

      {/* <MyTable data={data} config={config} /> */}
      <SortableTable data={data} config={config} />
    </div>
  );
};
export default YaReactDataGrid;
