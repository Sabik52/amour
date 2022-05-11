import React from 'react';
import logo from '../../../images/logo/logo.png'
import { Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
       <div>
         <Navbar className='navbar' collapseOnSelect expand="lg" bg="" variant="dark">
  <Container>
  <Navbar.Brand className='title' href="/"><img className='logo-img' src={logo } alt="" /> Amour</Navbar.Brand>
  <Navbar.Toggle className='toggle-icon' aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="home/products">Products</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
       </div>
       
       
    );
};

export default Header;