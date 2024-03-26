import { Header } from "../components";

const DefaultDashboard = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category={"dashboard"} title={"default"} />
      Default Dashboard page
    </div>
  );
};

export default DefaultDashboard;
