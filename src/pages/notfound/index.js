import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class NotFound extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>This is the 404 Page</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NotFound;
