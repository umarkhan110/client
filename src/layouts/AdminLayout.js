import { Outlet } from "react-router-dom";
// import Header from "../components/admin/Navbar";
import Sidebar from "../components/admin/Sidebar";
function AdminLayout() {
  return (
    <>
    <div className="flex">
    <Sidebar />
    <Outlet />
    </div>
  </>
  );
}

export default AdminLayout;
