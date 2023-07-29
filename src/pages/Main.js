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
import Dashboard from "./Dashboard";
function Main() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup/> }/>
            <Route path="/dashboard" element={<Dashboard /> }/>
            
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
