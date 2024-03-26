import { useEffect, useState } from "react";
import { Header } from "../components";
import productData from '../data/MOCK_DATA'
// import axios from 'axios'

const YaReactDataGrid = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(productData)
  },[])
  console.log(data)
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category={"YaAcademy"} title={"DataGrid"} />
      <table>
        <thead></thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
export default YaReactDataGrid