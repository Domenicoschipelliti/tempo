import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AltreCitta = () => {
  return (
    <>
      <Container>
        <h2 className="text-center text-light">Altre Città Cercate</h2>
        <Row className="justify-content-center mt-4">
          <Col md={5}>
            <Card className="mb-3">
              <Link>
                <Card.Img
                  variant="top"
                  src="https://www.vivalingue.com/wp-content/uploads/2022/08/londra.jpg"
                />
              </Link>
              <Card.Body className="bg-black">
                <Card.Title className="text-center text-light">
                  Londra
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="mb-3">
              <Link>
                <Card.Img
                  variant="top"
                  src="https://tourismmedia.italia.it/is/image/mitur/1600X1000_cosa_vedere_a_palermo_hero-1?wid=1080&hei=660&fit=constrain,1&fmt=webp"
                />
              </Link>

              <Card.Body className="bg-black">
                <Card.Title className="text-center text-light">
                  Palermo
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="mb-3">
              <Link>
                <Card.Img
                  variant="top"
                  src="https://www.hotelalgamilano.it/sites/alga2torri.gisnet.it/files/Hotel_Santa_Barbara_Milano_01t.jpg"
                />
              </Link>
              <Card.Body className="bg-black">
                <Card.Title className="text-center text-light">
                  Milano
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card>
              <Link>
                <Card.Img
                  variant="top"
                  src="https://www.repstatic.it/content/nazionale/img/2021/08/30/133750379-a3feb0bc-ca4b-491c-9cb5-73cf5b36ac6f.jpg"
                />
              </Link>
              <Card.Body className="bg-black">
                <Card.Title className="text-center text-light">
                  Venezia
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AltreCitta;
