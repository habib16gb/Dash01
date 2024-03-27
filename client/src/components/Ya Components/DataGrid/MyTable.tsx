import { Fragment, ReactNode, useState } from "react";
import { tyRows } from "../../../pages/YaReactDataGrid";

export interface inConfig {
  label: string;
  render: (param: tyRows) => string | number | ReactNode;
  sortValue?: (param: tyRows) => string | number | ReactNode;
  header?: () => ReactNode;
}

export interface PropsMyTable {
  data: tyRows[];
  config: inConfig[];
}

const MyTable = ({ data, config }: PropsMyTable) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const numberPages = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(numberPages + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changePage = (id: number) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div>
      <table className=' table-auto border-spacing-2'>
        <thead>
          <tr className='border-b-2'>
            {config.map((ele, index) => {
              if (ele.header)
                return <Fragment key={index}>{ele.header()}</Fragment>;
              return <th key={index}>{ele.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {records.map((row, index) => (
            <tr className='border-b' key={index}>
              {config.map((column, index) => (
                <td key={index} className='p-3'>
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <nav className=' p-2 mt-12 border-2 rounded-sm'>
        <ul className='flex items-center justify-between'>
          {currentPage > 1 && (
            <li className='p-1 border-1 font-semibold border-blue-400'>
              <a className='' href='#' onClick={() => prevPage()}>
                Prev
              </a>
            </li>
          )}
          {numbers.map((n, i) => (
            <li
              className={`p-1 border-1 border-blue-400 ${
                currentPage === n && "bg-blue-500 text-white font-semibold"
              }`}
              key={i}
            >
              <a onClick={() => changePage(n)} className='' href='#'>
                {n}
              </a>
            </li>
          ))}
          {currentPage < numberPages && (
            <li className='p-1 border-1  font-semibold border-blue-400'>
              <a className='' href='#' onClick={() => nextPage()}>
                Next
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MyTable;
