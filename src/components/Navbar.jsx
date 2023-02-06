import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget1, CartWidget2} from './CartWidget';
import logoApple from '../assets/apple-logo.png';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link to="/"><img className="logo" src={logoApple} alt="logo" /></Link>
        <CartWidget1 />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/categoria">Inicio</NavLink>
            <NavLink className="nav-link" to="/categoria/iPhone">iPhone</NavLink>
            <NavLink className="nav-link" to="/categoria/iPad">iPad</NavLink>
            <NavLink className="nav-link" to="/categoria/Macbook">Macbook</NavLink>
            <NavLink className="nav-link" to="/categoria/MacStudio">Mac Studio</NavLink>
            <NavLink className="nav-link" to="/categoria/MacDisplay">Mac Display</NavLink>
            <NavLink className="nav-link" to="/categoria/Accesorios">Accesorios</NavLink>
            <NavLink className="nav-link" to="/">Servicio Tecnico</NavLink>
          </Nav>
          <CartWidget2 />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
