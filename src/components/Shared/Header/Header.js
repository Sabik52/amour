import React from 'react';
import logo from '../../../images/logo/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
const Header = () => {
  const [user]= useAuthState(auth);

  const handleSignOut = ()=>{
    signOut(auth);
  }
  return (
    <div>
      <Navbar  collapseOnSelect expand="lg" bg="" variant="dark">
        <Container>
          <Navbar.Brand className='title' href="/"><img className='logo-img' src={logo} alt="" /> Amour</Navbar.Brand>
          <Navbar.Toggle className='toggle-icon' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/manageinventory">Manage Inventory</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              {
                user && <>
                <Nav.Link as ={Link} to= "addproduct">Add Product</Nav.Link>
                </>
              }
             { 
              user ?
                    <button className='signout-btn' onClick={handleSignOut}>Sign Out</button>

              :
             <Nav.Link eventKey={2} href="/login">
                Login
              </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>


  );
};

export default Header;