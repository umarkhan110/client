import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import {AiOutlineLogout} from "react-icons/ai"
const Header = () => {

  const [token, setToken] = useState(localStorage.getItem("massage-token"))
  const role = localStorage.getItem("role")
  const navigate = useNavigate()
  // const token = localStorage.getItem("massage-token")
  const logout = async ()=>{
    localStorage.removeItem("massage-token")
    localStorage.removeItem("role")
    localStorage.removeItem("user")
    setToken(null)
    navigate("/")
  }
  useEffect(()=>{

  })
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Body Workers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Massage" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/massage/Massage For Home">Massage For Home</NavDropdown.Item>
                <NavDropdown.Item href="/massage/Massage For Office">Massage For Office</NavDropdown.Item>
                <NavDropdown.Item href="/massage/Massage For Hotel">Massage For Hotel</NavDropdown.Item>
                <NavDropdown.Item href="/massage/Massage For Group">Massage For Group</NavDropdown.Item>
                <NavDropdown.Item href="/massage/Massage For Event">Massage For Event</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/service/Swedish">Swedish</NavDropdown.Item>
                <NavDropdown.Item href="/service/Deep Tissue">Deep Tissue</NavDropdown.Item>
                <NavDropdown.Item href="/service/Prenatal">Prenatal</NavDropdown.Item>
                <NavDropdown.Item href="/service/Sports">Sports</NavDropdown.Item>
                <NavDropdown.Item href="/service/Reflexology">Reflexology</NavDropdown.Item>
                <NavDropdown.Item href="/service/Postpartum">Postpartum</NavDropdown.Item>
                <NavDropdown.Item href="/service/Lymphatic">Lymphatic</NavDropdown.Item>
                <NavDropdown.Item href="/service/Post-OP Lymphatic">Post-OP Lymphatic</NavDropdown.Item>
                <NavDropdown.Item href="/service/Foot Massage">Foot Massage</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pricing" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/price/Swedish">Swedish</NavDropdown.Item>
                <NavDropdown.Item href="/price/Deep Tissue">Deep Tissue</NavDropdown.Item>
                <NavDropdown.Item href="/price/Prenatal">Prenatal</NavDropdown.Item>
                <NavDropdown.Item href="/price/Sports">Sports</NavDropdown.Item>
                <NavDropdown.Item href="/price/Reflexology">Reflexology</NavDropdown.Item>
                <NavDropdown.Item href="/price/Postpartum">Postpartum</NavDropdown.Item>
                <NavDropdown.Item href="/price/Lymphatic">Lymphatic</NavDropdown.Item>
                <NavDropdown.Item href="/price/Post-OP Lymphatic">Post-OP Lymphatic</NavDropdown.Item>
                <NavDropdown.Item href="/price/Foot Massage">Foot Massage</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/becomeprovider" >Become a provider</Nav.Link>
            <Nav.Link href="/" >FAQ</Nav.Link>
            <Nav.Link href="/" >Blog</Nav.Link>
            <Nav.Link href="/" >Contact us</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="/book" className='navbar-button'>Book now</Nav.Link>
            {/* <Nav.Link href="/signin" >Login</Nav.Link> */}
            {token ? 
              <div class="dropdown pt-2 pl-4">
              {/* <a href="/" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
              </a> */}
              <div class="d-flex align-items-center dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <AiOutlineLogout size={20}/>
              </div>
                  {/* <span class="d-none d-sm-inline mx-1">User Name</span> */}
              <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                {role === "Client" ?
                  <li><a class="dropdown-item" href="/client-dashboard">Dashboard</a></li>
                  :
                  <li><a class="dropdown-item" href="/provider-dashboard">Dashboard</a></li>
                }
                  <li>
                      <hr class="dropdown-divider" />
                  </li>
                  <li><button class="dropdown-item"  onClick={logout}>Sign out</button></li>
              </ul>
              </div>
            :
            <NavDropdown title="Login" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/provider">Login as Provider</NavDropdown.Item>
                <NavDropdown.Item href="/client">Login as Client</NavDropdown.Item>
                
                <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
            </NavDropdown>
             }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;