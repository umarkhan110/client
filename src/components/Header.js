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
            <NavDropdown.Item href="/">In-home Massage</NavDropdown.Item>
                <NavDropdown.Item href="/massage/Mobile Massage">Mobile Massage</NavDropdown.Item>
                <NavDropdown.Item href="/massage/Swedish">Swedish</NavDropdown.Item>
                <NavDropdown.Item href="/massage/Deep Tissue">Deep Tissue</NavDropdown.Item>
                <NavDropdown.Item href="/massage/Prenatal">Prenatal</NavDropdown.Item>
                <NavDropdown.Item href="/massage/Lymphatic">Lymphatic</NavDropdown.Item>
                <NavDropdown.Item href="/massage/Sports">Sports</NavDropdown.Item>
                <NavDropdown.Item href="/massage/Reflexology">Reflexology</NavDropdown.Item>
                <NavDropdown.Item href="/massage/Couples">Couples</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/">In-home Massage</NavDropdown.Item>
                <NavDropdown.Item href="/">Mobile Massage</NavDropdown.Item>
                <NavDropdown.Item href="/">Swedish</NavDropdown.Item>
                <NavDropdown.Item href="/">Deep Tissue</NavDropdown.Item>
                <NavDropdown.Item href="/">Prenatal</NavDropdown.Item>
                <NavDropdown.Item href="/">Lymphatic</NavDropdown.Item>
                <NavDropdown.Item href="/">Sports</NavDropdown.Item>
                <NavDropdown.Item href="/">Reflexology</NavDropdown.Item>
                <NavDropdown.Item href="/">Couples</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pricing" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/">In-home Massage</NavDropdown.Item>
                <NavDropdown.Item href="/">Mobile Massage</NavDropdown.Item>
                <NavDropdown.Item href="/">Swedish</NavDropdown.Item>
                <NavDropdown.Item href="/">Deep Tissue</NavDropdown.Item>
                <NavDropdown.Item href="/">Prenatal</NavDropdown.Item>
                <NavDropdown.Item href="/">Lymphatic</NavDropdown.Item>
                <NavDropdown.Item href="/">Sports</NavDropdown.Item>
                <NavDropdown.Item href="/">Reflexology</NavDropdown.Item>
                <NavDropdown.Item href="/">Couples</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/becomeprovider" >Become a provider</Nav.Link>
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