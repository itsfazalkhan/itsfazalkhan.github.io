import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiArduino,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
      </Col>
    </Row>
  );
}

export default Toolstack;
