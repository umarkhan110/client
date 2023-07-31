import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
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
                <NavDropdown.Item href="/">Mobile Massage</NavDropdown.Item>
                <NavDropdown.Item href="/">Swedish</NavDropdown.Item>
                <NavDropdown.Item href="/">Deep Tissue</NavDropdown.Item>
                <NavDropdown.Item href="/">Prenatal</NavDropdown.Item>
                <NavDropdown.Item href="/">Lymphatic</NavDropdown.Item>
                <NavDropdown.Item href="/">Sports</NavDropdown.Item>
                <NavDropdown.Item href="/">Reflexology</NavDropdown.Item>
                <NavDropdown.Item href="/">Couples</NavDropdown.Item>
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
            <NavDropdown title="Login" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/provider">Login as Provider</NavDropdown.Item>
                <NavDropdown.Item href="/client">Login as Client</NavDropdown.Item>
                
                <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;