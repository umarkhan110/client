import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import WebLayout from "../layouts/WebLayout";
import Home from "./Home";
import NotFound from "./NotFound";
import Book from "./Book";
import Login from "./Login"
import BecomeProvider from "./BecomeProvider";
import Signup from "./Signup";
import DashboardLayout from "../layouts/DashboardLayout";
import Providers from "../components/Providers";
import PrivateRoute from "../components/PrivateRoute";
import OrderList from "../components/admin/OrderList";
import ViewProvider from "../components/admin/ViewProvider";
function Main() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/provider" element={<Login />} />
          <Route exact path="/client" element={<Login />} />
          <Route exact path="/admin" element={<Login />} />
          <Route path="/signup" element={<Signup/> }/>
          
          <Route path="/dashboard" element={<DashboardLayout />}>
          
            <Route path="/dashboard" element={
            <PrivateRoute>
              <Providers /> 
            </PrivateRoute>
            }/>
            
            <Route path="/dashboard/viewprovider/:id" element={
            <PrivateRoute>
              <ViewProvider /> 
            </PrivateRoute>
            }/>

            <Route path="/dashboard/orderlist" element={
            <PrivateRoute>
              <OrderList /> 
            </PrivateRoute>
            }/>
          
          </Route>
            
          <Route path="/" element={<WebLayout />}>
            <Route path="/" element={<Home /> }/>
            <Route path="/becomeprovider" element={<BecomeProvider/> }/>
            <Route path="/book" element={<Book/> }/>

          </Route>
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </>
    </Router>
  );
}

export default Main;
