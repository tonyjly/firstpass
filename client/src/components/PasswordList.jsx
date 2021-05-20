import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
// import { Card, ListGroup, Table, Form, Col, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Table, Button, InputGroup, FormControl, Overlay, Tooltip } from 'react-bootstrap';
import passwords from './examplePasswords.js';

import PasswordCreate from './PasswordCreate';
import PasswordItem from './PasswordItem';

const PasswordList = () => {
  // use bootstrap fade effect to hide/show passwords
  const [list, setList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [password, setPassword] = useState('');
  const [tooltip, setTooltip] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    axios.get('/passwords')
      .then((res) => setList(res.data))
      .catch((err) => console.log(err))
  }, []);

  function copyToClipboard(e) {
    navigator.clipboard.writeText(password)
  }

  function generate() {
    const min = 1;
    const max = 500;
    const rand = Math.floor(min + Math.random() * (max - min));

    setPassword(
      passwords[rand]
    )
  }

  return (
    <div>
      {/* ADD PASSWORD */}
      <Title>Add Password</Title>

      <Button variant="primary" type="text" className="nord-btn" onClick={() => setModalShow(true)}>
        Add
      </Button>

      <PasswordCreate
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <br/>
      {/* GENERATE PASSWORD */}
      <Title>Generate Password</Title>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Password"
          aria-label="Generate Password"
          aria-describedby="basic-addon2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* <InputGroup.Append>
          <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup.Append> */}

        {/* GENERATE PASSWORD BUTTON */}
        <Button variant="primary" type="submit" className="nord-btn" onClick={(e) => setPassword(() => generate())}>
          Generate
        </Button>

        {/* COPY TO CLIPBOARD BUTTON */}
        <Button
          ref={target}
          variant="primary"
          type="text"
          className="nord-btn"
          onClick={(e) => {
            copyToClipboard(e);
            setTooltip(!tooltip);
          }}
        >
          Copy
        </Button>

        {/* COPY TO CLIPBOARD TOOLTIP */}
        <Overlay target={target.current} show={tooltip} placement="top">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              Copied
            </Tooltip>
          )}
        </Overlay>

      </InputGroup>

      <br/>

      {/* PASSWORD LIST */}
      <Title>Password List</Title>

      <ListStyle>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Filter Passwords"
          aria-label="Filter Passwords"
          aria-describedby="basic-addon1"
        />
        <Button variant="primary" type="submit" className="nord-btn" onClick={(e) => {e.preventDefault();}}>
          Search
        </Button>
      </InputGroup>

        <Table striped bordered hover responsive>
          <thead className="ptable">
            <th>#</th>
            <th>Label</th>
            <th>Username</th>
            <th>Password</th>
          </thead>
          <tbody className="ptable">
            {list.map((password) => (
              <PasswordItem password={password}/>
            ))}
          </tbody>
        </Table>
      </ListStyle>
    </div>
  )
}

export default PasswordList;

const ListStyle = styled.div`
  font-weight: bold;
  color: #5E81AC;
  margin-top: 20px;
`;

const Title = styled.h3`
  margin-top: 20px;
`;

const Data = styled.td`
  visibility:
`;

/* CARD LISTGROUP
  <Card style={{ width: '18rem' }}>
    <Card.Header>Passwords</Card.Header>
    <ListGroup variant="flush">
      {list.map((password) => (
        <ListGroup.Item>{password.name}</ListGroup.Item>
      ))}
    </ListGroup>
  </Card>
*/

/* <tr>
                <td>{password.id}</td>
                <td><a href={password.site} target="_blank">{password.name}</a></td>
                <td>{password.user}</td>
                <Data>{password.password}</Data>
              </tr> */