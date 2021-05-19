// import React from 'react';
// import ReactDOM from 'react-dom';
import logo from './images/shield-keyhole-line.svg';
import './styles/App.css';
// import styled from 'styled-components';
import PasswordList from './components/PasswordList';
// import { Container, Row, Col } from 'react-bootstrap'
import AppStyles from './styles/AppStyles';

import { Jumbotron } from 'react-bootstrap';
import Dashboard from './components/Dashboard';

const { Main, List, Logo, JumboDiv } = AppStyles;

function App(props) {
  return (
    <div>
      <Dashboard/>

      <Main>

        <div className="App-div">
          <Logo src={logo} className="App-logo" alt="logo"/>
        </div>

        <Jumbotron fluid>
          <JumboDiv>
            <h1>Welcome</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal space of
              its parent.
            </p>
          </JumboDiv>
        </Jumbotron>

        <List>
          <PasswordList />
        </List>

      </Main>
    </div>
  );
}

export default App;
