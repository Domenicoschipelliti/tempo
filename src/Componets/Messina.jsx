import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Messina extends Component {
  state = {
    weather: [],
  };

  Libero = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=38.1938137&lon=15.5540152&units=metric&appid=259374e52c2e45927ba4f90c9a197f9e"
    )
      .then((res) => {
        if (res.ok) {
          console.log("ecco", res);
          return res.json();
        } else {
          console.log("errore nella get");
        }
      })
      .then((result) => {
        console.log("risultato", result);
        this.setState((ten) => ({
          weather: [
            ...ten.weather,
            ...result.weather.map((te) => ({
              weather: {
                main: te.main,
                id: te.id,
                description: te.description,
              },
            })),
          ],
        }));
      })
      .catch((err) => {
        throw new Error("errore nella get controlla meglio", err);
      });
  };
  componentDidMount() {
    this.Libero();
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          {this.state.weather.map((t) => {
            return (
              <Col md={7} key={t.weather.id}>
                <img
                  src="https://messina-api.municipiumapp.it/s3/640x480/s3/4037/media/laghetto4.jpg"
                  alt="Messina"
                />
                <p className="text-light">Forcast: {t.weather.description}</p>
                <p className="text-light">Current: {t.weather.main}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Messina;
