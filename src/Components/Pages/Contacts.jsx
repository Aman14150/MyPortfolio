import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaInstagram } from "react-icons/fa";

function Contacts() {
  const onSubmitClick = (params) => {
    alert(params);
  };
  return (
    <Container className="contacts">
      <Row >
        <Col md={6}>
        <h2 style={{paddingBottom: 20}}>Let Me, Know</h2>
          <Form className="form">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Enter your message"
              />
            </Form.Group>
            <br />
            <Button
              variant="primary"
              type="submit"
              onClick={() => onSubmitClick("Message Sent")}
            >
              Send Message <FaPaperPlane style={{ marginLeft: 5 }} />
            </Button>
          </Form>
        </Col>
        <Col md={6} className="contactMe">
          <h2>Contact Me</h2>
          <ul className="list-unstyled">
            <li>
              <a href="mailto: amanrakhade14@gmail.com">
                <FaEnvelope style={{ margin: "10px", fontSize: 25 }} />
              </a>
              amanrakhade14@gmail.com
            </li>
            <li>
              <a href="tel:+919637799513">
                <FaPhone style={{ margin: "10px", fontSize: 25 }} />
              </a>
              +91 9637799513
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aman-rakhade-07a5031b5">
                <FaLinkedin style={{ margin: "10px", fontSize: 30 }} />
              </a>
              <a href="https://github.com/Aman14150">
                <FaGithub style={{ margin: "10px", fontSize: 30 }} />
              </a>
              <a href="#instagram">
                <FaInstagram style={{ margin: "10px", fontSize: 30 }} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
