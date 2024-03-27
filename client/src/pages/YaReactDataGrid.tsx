import { Header } from "../components";
import { SortableTable } from "../components/Ya Components/DataGrid";

import { inConfig } from "../components/Ya Components/DataGrid/MyTable";
import { dataClients } from "../data/data";
// import productData from '../data/MOCK_DATA'
// import axios from 'axios'

export type tyRows = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  age: number;
  amount: number;
};

const config: inConfig[] = [
  {
    label: "id",
    render: (client: tyRows) => client.id,
    // sortValue: (client: tyRows) => client.id,
  },
  {
    label: "first name",
    render: (client: tyRows) => <div className={` `}>{client.first_name}</div>,
    sortValue: (client: tyRows) => client.first_name,
  },
  {
    label: "last name",
    render: (client: tyRows) => <div className={``}>{client.last_name}</div>,
    sortValue: (client: tyRows) => client.last_name,
  },
  {
    label: "email",
    render: (client: tyRows) => <div className={` `}>{client.email}</div>,
    sortValue: (client: tyRows) => client.email,
  },
  {
    label: "gender",
    render: (client: tyRows) => <div className={` `}>{client.gender}</div>,
    sortValue: (client: tyRows) => client.gender,
  },
  {
    label: "age",
    render: (client: tyRows) => <div className={` `}>{client.age}</div>,
    sortValue: (client: tyRows) => client.age,
  },
  {
    label: "amount",
    render: (client: tyRows) => <div className={` }`}>{client.amount}</div>,
    sortValue: (client: tyRows) => client.amount,
  },
  // {
  //   label: "score squared",
  //   render: (client) => client.score ** 2,
  //   sortValue: (client) => client.score ** 2,
  // },
];

const YaReactDataGrid = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl overflow-auto'>
      <Header category={"YaAcademy"} title={"DataGrid"} />

      {/* <MyTable data={data} config={config} /> */}
      <SortableTable data={dataClients} config={config} />
    </div>
  );
};
export default YaReactDataGrid;
