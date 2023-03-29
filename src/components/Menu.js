import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Tienda online</Navbar.Brand>
        </Link>

        <Nav className="me-auto">
          <Link to="/">
            <Nav.Link href="">Inicio</Nav.Link>
          </Link>
          <Link to="/products">
            <Nav.Link href="">Productos</Nav.Link>
          </Link>
          <Link to="/contact">
            <Nav.Link href="">Contactar</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Menu
