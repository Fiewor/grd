import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-100 flex">
      <div className="w-2/12">
        <Sidebar />
      </div>

      <div className="w-10/12 flex flex-col bg-[]">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
   
export default Home;
