import { Carousel, Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

const MyCard = () => (
  <Container className="mb-4">
    <Row className="d-flex justify-content-center">
      <Col md={5}>
        <Carousel>
          <Carousel.Item interval={2000}>
            <Link to="messina">
              <img
                src="https://messina-api.municipiumapp.it/s3/640x480/s3/4037/media/laghetto4.jpg"
                alt="Messina"
              />
            </Link>

            <Carousel.Caption>
              <h3>Messina</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Link to="roma">
              <img
                src="https://images.placesonline.com/photos/424012702200354_Roma_478173823.jpg?quality=80&w=550"
                alt="Roma"
              />
            </Link>

            <Carousel.Caption>
              <h3>Roma</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <Link to="berlino">
              <img
                src="https://www.berlino.com/wp-content/uploads/sites/13/berlino-panorama.jpg"
                alt="Berlino"
              />
            </Link>

            <Carousel.Caption>
              <h3>Berlino</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Container>
);

export default MyCard;
