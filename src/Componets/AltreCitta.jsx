import { Card, Col, Container, Row } from "react-bootstrap";

const AltreCitta = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-4">
          <Col md={5}>
            <Card className="mb-3">
              <Card.Img
                variant="top"
                src="https://www.vivalingue.com/wp-content/uploads/2022/08/londra.jpg"
              />
              <Card.Body>
                <Card.Title>Londra</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="mb-3">
              <Card.Img
                variant="top"
                src="https://tourismmedia.italia.it/is/image/mitur/1600X1000_cosa_vedere_a_palermo_hero-1?wid=1080&hei=660&fit=constrain,1&fmt=webp"
              />

              <Card.Body>
                <Card.Title>Palermo</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="mb-3">
              <Card.Img
                variant="top"
                src="https://www.hotelalgamilano.it/sites/alga2torri.gisnet.it/files/Hotel_Santa_Barbara_Milano_01t.jpg"
              />
              <Card.Body>
                <Card.Title>Milano</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm0b_FagbOXW7xB2hc3fT5xpBWJ8xJP_Ee_Q&usqp=CAU"
              />
              <Card.Body>
                <Card.Title>Venezia</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AltreCitta;
