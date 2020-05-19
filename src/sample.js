import React, {useState} from 'react';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

function App() {
  const [onOff, setOnOff] = useState(false);
  const isOpen = true;

  return (
    <div className="App">
      <Navbar color="inverse" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={() => setOnOff(!onOff)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <h1>Welcome to React</h1>
              <p>
                <Button
                  tag="a"
                  color="success"
                  size="large"
                  href="http://reactstrap.github.io"
                  target="_blank"
                >
                  View Reactstrap Docs
                  </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
