// import React from 'react';
// import ReactDOM from 'react-dom';
import logo from './images/shield-keyhole-line.svg';
import './styles/App.css';
// import styled from 'styled-components';
import PasswordList from './components/PasswordList';
import AppStyles from './styles/AppStyles';
import { ShieldKeyhole } from '@styled-icons/remix-line';

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

        <Col sm={2}>
          <p>Home</p>
          <p>Passwords</p>
          <p>Notes</p>
          <p>Addresses</p>
          <p>Payments</p>
          <p>Bank Accounts</p>
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

/* <div>
<Navigation/>

<Main>

  <div className="App-div">
    <Logo src={logo} className="App-logo" alt="logo"/>
  </div>

  <Jumbotron fluid>
    <JumboDiv>
      <h1>Welcome</h1>
      <p>
        To your free, open-source password manager.
      </p>
    </JumboDiv>
  </Jumbotron>

  <List>
    <PasswordList />
  </List>

</Main>
</div> */
