import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar";
import TopBar from "../components/topbar";

const AdminLayout = () => {
  return (
    <>
      <TopBar />
      <SideBar />
      <Outlet />
    </>
  );
};

export default AdminLayout;
