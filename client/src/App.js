// import React from 'react';
// import ReactDOM from 'react-dom';
import logo from './images/shield-keyhole-line.svg';
import './styles/App.css';
// import styled from 'styled-components';
import PasswordList from './components/PasswordList';
// import { Container, Row, Col } from 'react-bootstrap'
import AppStyles from './styles/AppStyles';
import { ShieldKeyhole } from '@styled-icons/remix-line';
import { Menu } from '@styled-icons/material-rounded';
import { Settings } from '@styled-icons/material-rounded';
import { PersonCircle } from '@styled-icons/bootstrap';

const { Header, Left, Right, Main, List, DashboardLogo, DashboardIcon } = AppStyles;

function App(props) {
  return (
    <>
      <Header>
        <Left>
          <DashboardLogo>
            <ShieldKeyhole size="40"/>
          </DashboardLogo>
          <div>
            FirstPass
          </div>
        </Left>

        <Right>
          {/* <Icon><Menu size="40" /></Icon> */}
          {/* <Icon>Dashboard</Icon> */}
          {/* <DashboardIcon><Menu size="40"/></DashboardIcon> */}
          <DashboardIcon><Settings size="40"/></DashboardIcon>
          <DashboardIcon><PersonCircle size="40"/></DashboardIcon>
          <DashboardIcon>Tony</DashboardIcon>
        </Right>
      </Header>

      <Main>

        <div className="App-div">
          <img src={logo} className="App-logo" alt="logo" background="white" />
        </div>

        <List>
          <PasswordList />
        </List>

      </Main>
    </>
  );
}



export default App;
