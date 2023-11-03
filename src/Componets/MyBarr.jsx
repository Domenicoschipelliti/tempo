import { Col, Container, Row } from "react-bootstrap";

const MyBarrier = () => {
  return (
    <>
      <footer>
        <Container>
          <Row className="text-center mt-5">
            <Col xs={{ span: 6, offset: 3 }}>
              <Row>
                <Col xs={12} className="text-left mb-2">
                  <i className="fa fa-facebook footer-icon"></i>
                  <i className="fa fa-instagram footer-icon"></i>
                  <i className="fa fa-twitter footer-icon"></i>
                  <i className="fa fa-youtube footer-icon"></i>
                </Col>
              </Row>

              <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 justify-content-center">
                <Col xs={12} className="text-left mb-2">
                  <button
                    type="button"
                    className="btn btn-sm footer-button rounded-0 mt-3 "
                  >
                    MeteusTemp
                  </button>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="text-left mb-2 mt-2 copyright">
                  © 1997-{new Date().getFullYear()} MeteusTemp, Inc.
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default MyBarrier;
