import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoApple from '../assets/apple-logo.png';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><img className='logo' src={logoApple} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Servicio Tecnico</Nav.Link>
            <NavDropdown title="Catalogo" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">iPhone</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tablet
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MackBook</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Accesorios
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default Menu;
