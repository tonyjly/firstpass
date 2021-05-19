// import React from 'react';
// import ReactDOM from 'react-dom';
import { Card, ListGroup } from 'react-bootstrap';

const passwords = [
  'Application 1',
  'Application 2',
  'Application 3',
  'Application 4',
  'Application 5',
  'Application 6',
  'Application 7',
  'Application 8',
];

const PasswordList = () => {
  // use bootstrap fade effect to hide/show passwords

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Passwords</Card.Header>
        <ListGroup variant="flush">
          {passwords.map((password) => (
            <ListGroup.Item>{password}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  )
}

export default PasswordList;