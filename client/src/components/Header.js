import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar fixed bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <div className="d-flex align-items-center jstify-content-between gap-2">
            <img
              alt=""
              src="/logo.png"
              width="40"
              className="d-inline-block align-top"
            />{" "}
            <h3>Scudler</h3>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
