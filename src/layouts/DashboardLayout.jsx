import { Outlet } from "react-router-dom";
import Header from "../components/DashboardHeader";
import SideBar from "../components/DashboardSidebar";
function DashboardLayout() {
  return (
    <>
      <Header />
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <SideBar />
          <div class="col py-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
