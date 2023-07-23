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
import Register from "./Register";
import BecomeProvider from "./BecomeProvider";
import Signup from "./Signup";
function Main() {
  return (
    <Router>
      <>
        <Routes>
          {/* <Route exact path="/account/login" element={<Login />} /> */}
         
            <Route path="book" element={<Book/> }/>
          <Route path="/" element={<WebLayout />}>
            <Route path="/" element={<Home /> }/>
            <Route path="signin" element={<Login /> }/>
            <Route path="register" element={<Register/> }/>
            <Route path="/becomeprovider" element={<BecomeProvider/> }/>
            <Route path="/login" element={<Login/> }/>
            <Route path="/signup" element={<Signup/> }/>

          </Route>
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </>
    </Router>
  );
}

export default Main;
