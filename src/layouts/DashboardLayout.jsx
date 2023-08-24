import { Outlet } from "react-router-dom";
import Header from "../components/DashboardHeader";
import SideBar from "../components/DashboardSidebar";

function DashboardLayout() {
  return (
    <div className="h-100">
      <Header />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <SideBar />
          <div className="col py-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
