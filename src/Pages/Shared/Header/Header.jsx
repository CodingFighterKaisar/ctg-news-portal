import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="mx-auto text-center">
        <img src={logo} alt="" />
        <p>
          <small className="text-secondary">
            Journalism Without Fear or Favour
          </small>
        </p>
        <p>{moment().format("dddd MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex gap-6 justify-center">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={60}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, tenetur
          ullam rem odio cupiditate quae molestias eaque corrupti, hic incidunt
          adipisci ex. Veritatis quae ullam corrupti nihil vel, assumenda atque.
          Officiis porro, aut voluptatibus explicabo consectetur iure placeat a
          quis inventore ut itaque! Molestias eligendi, corporis accusantium
          facere molestiae voluptatibus neque quisquam repellendus deleniti
          sunt! Necessitatibus praesentium iure mollitia rerum! Illo iure libero
          qui tempora cum veritatis, iste inventore, deleniti neque illum
          corporis animi, aliquam cumque impedit aliquid minima recusandae
          reprehenderit tenetur officia omnis sapiente molestiae eligendi
          ducimus. Dolores, optio.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Carreer</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary">Secondary</Button>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
