import React from "react";
import { Row, Col } from "react-bootstrap";
const FooterContent = () => {

  return (
    <footer className="footer" sticky="bottom">
        <Row className="text-center">
          <Col>
            <p>
              &copy; {new Date().getFullYear()} Aman Rakhade. All rights
              reserved.
            </p>
          </Col>
        </Row>
    </footer>
  );
}

export default FooterContent;
