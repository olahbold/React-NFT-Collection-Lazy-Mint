import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

const MainSection = () => {
  return (
    <section id="main" style={{ backgroundColor: "chocolate" }}>
      <Row className="align-items-center, g-0">
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Welcome To Pangoinu</h1>
          <div className="main-description">
            <h4>
              The Pango Inu token is totally decentralized from control by
              Banks, Companies, Institutions or Governments. The Pango Inu token
              is OF the Pangolins supporters, BY the pangolin supporters and FOR
              the Pangos
            </h4>
            <br />
          </div>
          <Container>
            <Navbar style={{ display: "block" }}>
              <Nav.Link href="/mint">
                <button className="mint-btn">How To Buy</button>
              </Nav.Link>
              <Nav.Link href="/mint">
                <button className="mint-btn"></button>
              </Nav.Link>
            </Navbar>
          </Container>
        </Col>
      </Row>
    </section>
  );
};

export default MainSection;
