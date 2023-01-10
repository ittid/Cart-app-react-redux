import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function NavbarItems() {
  const cart = useSelector((state) => state.cart);

  return (
    <Navbar
      fixed="top"
      bg="light"
      expand="lg"
      className="shadow-sm p-3 mb-5 bg-white rounded"
    >
      <Container>
        <Link to="/" className="navbar-brand">
          CartAppReact
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/product" className="nav-link">
              Products
            </Link>
            <Link to="/cart" className="nav-link">
              Cart - {cart.length}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarItems;
