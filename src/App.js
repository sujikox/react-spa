import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import logo from "./logo.svg";
import "./App.css";
import FavButton from "./FavButton";

function App() {
  const works = [
    ["DisAGreE", "images/DisAGreE_Logo_White.jpg", "あいうえお"],
    //["作品２", "img2", "かきくけこ"],
    //["作品3", "img3", "さしすせお"],
  ];

  return (
    <Container fluid>
      <Container className="text-center">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1 className="p-5">
              <Image
                src={logo}
                alt="osaka design office"
                className="img-fluid"
              ></Image>
            </h1>
          </Col>
        </Row>
      </Container>
      <Container className="text-left">
        <h2 className="text-center mb-5">Works</h2>
        <Row>
          {works.map((item, index) => {
            return (
              <Col sm={12} md={4} lg={4} xl={4} xxl={3} className="border">
                <Image
                  src={item[1]}
                  alt={item[0]}
                  className="img-fluid mb-2"
                ></Image>
                <h3 className="h5">{item[0]}</h3>
                <FavButton></FavButton>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default App;
