import { Button, Container, Nav, Navbar, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://cdn.create.vista.com/api/media/medium/471207810/stock-vector-black-cloud-weather-symbol-gold-plated-metalic-icon-logo-vector?token="
            alt="meteo icon"
            style={{ width: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-light">
              MeteusTemp
            </Link>
            <Link to="/altre-citta" className="nav-link text-light">
              Altre Città
            </Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-light me-4" href="#deets">
              Accedi
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Cerca Città"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
