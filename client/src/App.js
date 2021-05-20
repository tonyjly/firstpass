import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
// import styled from 'styled-components';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AppStyles from './styles/AppStyles';
import Announcement from './components/Announcement';
import Home from './components/Home';
import Menu from './components/Menu';
import Notes from './components/Notes';
import Donate from './components/Donate';
import Navigation from './components/Navigation';
import PasswordList from './components/PasswordList';
// import { ShieldKeyhole, Home5, Key } from '@styled-icons/remix-line';
// import { Note } from '@styled-icons/boxicons-regular';
// import { AddressBook } from '@styled-icons/fa-regular';
// import { Payment, BuildingBank } from '@styled-icons/fluentui-system-regular';

import { Container, Row, Col, Jumbotron, Navbar, variant, Alert } from 'react-bootstrap';

const { Main, List, Logo, JumboDiv, NavigationLogo } = AppStyles;

function App() {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState('');

  return (
    <Container className="App" fluid="md">
      <Router>

        {/* NAVIGATION BAR */}
        <Row>
          <Col>
            <Navigation/>
          </Col>
        </Row>

        <Row>

          {/* MENU LIST */}
          <Col sm={3}>
            <Menu />
          </Col>

          <Col>

            <Switch login={login} setLogin={setLogin}>
              <Route path="/" exact component={Home} />
              <Route path="/passwords" component={PasswordList} />
              <Route path="/notes" component={Notes} />
              <Route path="/donate" component={Donate} />
            </Switch>

            {/* PASSWORD LIST */}
            {/* <PasswordList/> */}
          </Col>
        </Row>
      </Router>
    </Container>
  );
}

export default App;

// {/* ANNOUNCE MENT */}
// <Announcement/>
// {/* JUMBOTRON */}
// <Jumbotron fluid className="jumbo">
//   <JumboDiv>
//     <h1>Welcome</h1>
//     <p>
//       FirstPass is your free, open-source password manager.
//     </p>
//   </JumboDiv>
// </Jumbotron>