import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/shield-keyhole-line.svg';
import './styles/App.css';
import styled from 'styled-components';
import PasswordList from './components/PasswordList';

function App(props) {
  // <div className="App App-header">
  return (
    <Main>

      <div className="App-div">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <List>
        <PasswordList />
      </List>

    </Main>
  );
}

const Main = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const List = styled.div`
  color: orange;
`;

export default App;
