import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Admin = () => {
  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
        <Sidebar />

        <Outlet />
      </div>
    </>
  );
};

export default Admin;
