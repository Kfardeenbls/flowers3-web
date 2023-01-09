import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import classes from "./Navbar.module.css";

const Mynavbar = () => {
  return (
    <Navbar bg="primary" expand="lg" className={classes.mainNavbar}>
      <Container fluid>
        {/* <Navbar.Brand href="#">
          <img src={logo} alt="sdlc logo" className={classes.logo} />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <a href="./Home" className={classes.contents}>
              Home
            </a>
            <NavDropdown
              title="BIRTHDAY"
              id="navbarScrollingDropdown"
              className={classes.DropdownContents}
            >
              <NavDropdown.Item href="#action3">Best Flowers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Birthday Plants
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Birthday Roses
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="ALL OCCASIONS"
              id="navbarScrollingDropdown"
              className={classes.DropdownContents}
            >
              <NavDropdown.Item href="#action3">Christmas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">New Years</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Valentine's Day
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Mother's Day</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Gifts"
              id="navbarScrollingDropdown"
              className={classes.DropdownContents}
            >
              <NavDropdown.Item href="#action3">Gifts for Her</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Gifts for Him</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Employee Gifts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Corporate Gifts
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="FLOWERS"
              id="navbarScrollingDropdown"
              className={classes.DropdownContents}
            >
              <NavDropdown.Item href="#action3">Carnations</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Christmas Flowers
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Lilies</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Roses</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="PLANT"
              id="navbarScrollingDropdown"
              className={classes.DropdownContents}
            >
              <NavDropdown.Item href="#action3">Potted Plants</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Gardening Plants
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Desk Plants</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Floor Plants</NavDropdown.Item>
            </NavDropdown>
            <a href="./Home" className={classes.contents}>
              Contect
            </a>
          </Nav>
          <Form className="d-flex " style={{ paddingRight: "15px" }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="btn btn-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Mynavbar;
