import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/PrivateRoute";
import OrderList from "../components/admin/OrderList";
import Providers from "../components/Providers";
function AdminRoutes({ children }) {
  return (
    <>
      <Routes>
      <Route
          path="/"
          element={
            <ProtectedRoute>
              <Providers />
            </ProtectedRoute>
          }
        />
        <Route
          path="orderlist"
          element={
            <ProtectedRoute>
              <OrderList />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path=":id"
          element={
            <ProtectedRoute>
              <ViewUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="edit/:id"
          element={
            <ProtectedRoute>
              <EditUser />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </>
  );
}

export default AdminRoutes;
