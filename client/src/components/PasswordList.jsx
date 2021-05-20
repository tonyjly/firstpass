import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Card, ListGroup, Table, Form, Col, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Eye, EyeSlash } from '@styled-icons/bootstrap';
import PasswordCreate from './PasswordCreate';

const passwords = [
  'ToHi5UkKA^oF3EYVQcM@vFL2m&dohSSH',
  'Qu!2!4L%k3kV&U3cRr@k5iGV2hWuL4A*',
  '4zXUiHCkAMPMf#LWdP*HJw59dGEfs&gT',
  '8VBpH^dzoKy#dC5w@&ZEhrT5DF4AcG$F',
  'Ew*U%5GwA9TkYa!omN#u&x*EbfAssf7*',
  'gXdwM4ys!J$R%&!rQ@vd3d9R8LMHBZqK',
  'S*w*CkN4$pVTwY&BdBQbeWXP85mbVtn9',
  'wE!QTkvKUsVA8sXF53rgPe*qRLV&x9Wx',
  'E9SedUig*&s3v9W9J9hp!Y8@DX^Q5^br',
  'Gtf&e8P$QXB*@aG$Nk@sXpxk#CZKgy$F',
  '&S6&f6bNCfqqR*Fn^&9Lo63Xx45*ZHiR'
];

const PasswordList = () => {
  // use bootstrap fade effect to hide/show passwords
  const [list, setList] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    axios.get('/passwords')
      .then((res) => setList(res.data))
      .catch((err) => console.log(err))
  }, []);

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
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value=""
        />

        {/* <InputGroup.Append>
          <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup.Append> */}

        <Button variant="primary" type="submit" className="nord-btn" onClick={(e) => {e.preventDefault();}}>
          Generate
        </Button>
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
              <tr>
                <td>{password.id}</td>
                <td><a href={password.site} target="_blank">{password.name}</a></td>
                <td>{password.user}</td>
                <Data>{password.password}</Data>
              </tr>
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
