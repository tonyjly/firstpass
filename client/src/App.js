import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/shield-keyhole-line.svg';
import './styles/App.css';
import styled from 'styled-components';
import PasswordList from './components/PasswordList';

function App(props) {
  // <div className="App App-header">
  return (
    <div>
    <Header>SWAG</Header>
    <Main>


      <div className="App-div">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <List>
        <PasswordList />
      </List>

    </Main>
    </div>
  );
}


const Header = styled.div`
  background: ${(props) => (props.colorScheme ? 'purple' : 'orange')};
  background: gray;
  height: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: white;
  padding: 0px;
  padding-right: 35px;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
`;

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
