// import { useEffect, useState } from "react";
// import { Card, Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Api = () => {
  // const [ricevere, setRicevere] = useState([]);
  // useEffect(() => {
  //   setRicevere();
  // }, []);
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
      // setRicevere(result);
    })
    .catch((err) => {
      throw new Error("errore nella get controlla meglio", err);
    });
  // return (
  //   <Container>
  //     <Row>
  //       {ricevere.map((mappatura) => {
  //         return (
  //           <Col md={5}>
  //             <Card className="mb-3">
  //               <Link>
  //                 <Card.Img
  //                   variant="top"
  //                   src="https://www.vivalingue.com/wp-content/uploads/2022/08/londra.jpg"
  //                 />
  //               </Link>
  //               <Card.Body className="bg-black">
  //                 <Card.Title className="text-center text-light">
  //                   Londra
  //                 </Card.Title>
  //                 <Card.Text>{mappatura[2]}</Card.Text>
  //               </Card.Body>
  //             </Card>
  //           </Col>
  //         );
  //       })}
  //     </Row>
  //   </Container>
  // );
};

export default Api;

// 259374e52c2e45927ba4f90c9a197f9e
