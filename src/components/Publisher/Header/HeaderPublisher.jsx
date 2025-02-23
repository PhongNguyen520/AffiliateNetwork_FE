import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import styles from "./Header.module.scss"; // SCSS Module cho custom styles'
import avatar from '../../../assets/images/avatar.png'

const HeaderPublisher = () => {
  return (
    <Navbar expand="lg" className={`shadow-sm ${styles.header}`}>
      <Container fluid>
        {/* Phần Welcome + Avatar */}
        <Navbar.Brand className={styles.welcome}>
          Welcome Back, <span style={{ color: "#60B2B7" }}>John</span> 👋
        </Navbar.Brand>

        {/* Icon thông báo và avatar */}
        <Nav className="ml-auto d-flex align-items-center gap-3">
          <Form className={styles.search}>
            <FormControl type="text" placeholder="Search Anything" className="me-2" />
            <Button variant="outline-secondary">🔍</Button>
          </Form>

          <Nav.Link href="#">
            <i className="bi bi-bell fs-5"></i> {/* Biểu tượng chuông Bootstrap */}
          </Nav.Link>
          <Nav.Link href="#" className="d-flex align-items-center">
            <img
              src={avatar}
              alt="Profile"
              className={`rounded-circle ${styles.profileImage}`}
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderPublisher;
