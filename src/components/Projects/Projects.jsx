import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={cardiac}
              isBlog={false}
              title="Secure Cardiac Monitoring"
              description="A real-time ECG & SpO2 monitoring system using Raspberry Pi 4B. Secured with Hyperledger Fabric blockchain & Attribute-Based Encryption, it leverages AWS IoT Greengrass for edge management and Grafana for live monitoring."
              ghLink="https://github.com/itsfazalkhan"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={smartBin}
              isBlog={false}
              title="Smart Dustbin"
              description="An AI-powered waste sorter using TensorFlow Lite on Raspberry Pi 4B, achieving 91% accuracy. A servo-driven 360° rotation ensures precise disposal into categorized compartments."
              ghLink="https://github.com/itsfazalkhan"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={smartLib}
              isBlog={false}
              title="SmartLib"
              description="An RFID-based library system with Arduino & Python UI, automating book tracking, issuance, and fines. Features real-time barcode scanning using OpenCV & Pyzbar."
              ghLink="https://github.com/itsfazalkhan"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={appWin}
              isBlog={false}
              title="AppWin"
              description="A Java-based Employee Management App with add, remove, and search features, built using Java Swing & AWT for an intuitive UI."
              ghLink="https://github.com/itsfazalkhan"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={beachView}
              isBlog={false}
              title="Beach View"
              description="The Beach-View Hotel Management System is a web-based platform that allows customers to browse rooms, check availability, view pricing, and make reservations seamlessly. Built with Django, HTML, CSS, and MySQL, it streamlines hotel operations by providing booking management, room services, and an admin panel for efficient hotel administration."
              ghLink="https://github.com/itsfazalkhan"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
