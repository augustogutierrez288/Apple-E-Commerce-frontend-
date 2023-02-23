import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget1, CartWidget2} from './CartWidget';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link to="/" className='logo'><p className='galaxi'>Galaxi</p><p className='store'>Store</p></Link>
        <Link to="/cart"><CartWidget1 /></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Inicio</NavLink>
            <NavLink className="nav-link" to="/category/iPhone">iPhone</NavLink>
            <NavLink className="nav-link" to="/category/iPad">iPad</NavLink>
            <NavLink className="nav-link" to="/category/Macbook">Macbook</NavLink>
            <NavLink className="nav-link" to="/">Servicio Tecnico</NavLink>
          </Nav>
          <Link to="/cart"><CartWidget2 /></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
