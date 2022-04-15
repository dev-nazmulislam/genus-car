import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import logo from "../../../images/logo.png";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={30} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#exparts">Exparts</Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {user ? (
                <button
                  onClick={() => signOut(auth)}
                  className="btn btn-primary"
                >
                  Sing Out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
