// import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './images/shield-keyhole-line.svg';
import './styles/App.css';
// import styled from 'styled-components';
import Menu from './components/Menu';
import PasswordList from './components/PasswordList';
import AppStyles from './styles/AppStyles';
// import { ShieldKeyhole, Home5, Key } from '@styled-icons/remix-line';
// import { Note } from '@styled-icons/boxicons-regular';
// import { AddressBook } from '@styled-icons/fa-regular';
// import { Payment, BuildingBank } from '@styled-icons/fluentui-system-regular';

import { Container, Row, Col, Jumbotron, Navbar } from 'react-bootstrap';
import Navigation from './components/Navigation';

const { Main, List, Logo, JumboDiv, NavigationLogo } = AppStyles;

function App(props) {
  return (
    <Container className="App" fluid="md">

      {/* NAVIGATION */}
      <Row>
        <Col>
          <Navigation/>
        </Col>
      </Row>

      <Row>

        <Col sm={3}>
          <Menu />
        </Col>

        <Col>

          <Jumbotron fluid>
            <JumboDiv>
              <h1>Welcome</h1>
              <p>
                FirstPass is your free, open-source password manager.
              </p>
            </JumboDiv>
          </Jumbotron>

          <PasswordList/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
