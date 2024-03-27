import { Fragment, ReactNode } from "react";
import { tyFruit } from "../../../pages/YaReactDataGrid";

export interface inConfig {
  label: string;
  render: (param: tyFruit) => string | number | ReactNode;
  sortValue?: (param: tyFruit) => string | number | ReactNode;
  header?: () => ReactNode;
}

export interface PropsMyTable {
  data: tyFruit[];
  config: inConfig[];
}

const MyTable = ({ data, config }: PropsMyTable) => {
  return (
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
        {data.map((row, index) => (
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
  );
};

export default MyTable;
