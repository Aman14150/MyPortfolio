import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGreaterThan } from "react-icons/fa";
import ProfilePic from "../../assets/profile1.png";
import { LinkContainer } from "react-router-bootstrap";

function Home() {
  return (
    <div>
      <Container className="mainBody">
        <Row>
          <Col md={6} className="profileCol">
            <img src={ProfilePic} alt="Profile Pic" className="profileImg" />
          </Col>
          <Col md={6} className="introCol">
            <h3>Hello!</h3>
            <h1>My Name is Aman Rakhade</h1>
            <h5>And I'm a Web Developer</h5>
            <br />
            <p className="introText">
              A passionate full-stack web developer with expertise in creating
              dynamic, responsive web applications. I specialize in crafting
              seamless user experiences and am always eager to learn and explore
              new technologies. Let's connect and build something amazing
              together!
            </p>
            <br />
            <LinkContainer to="/contacts">
              <Button className="" >
                Contact Me <FaGreaterThan style={{ marginLeft: 5 }} />
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
