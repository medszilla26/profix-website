import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>This is the Home Page</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
