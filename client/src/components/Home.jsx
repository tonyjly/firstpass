
import React, { useState } from 'react';
import { Jumbotron, Alert, Button, Form } from 'react-bootstrap';
import Announcement from './Announcement';
import AppStyles from '../styles/AppStyles';
const { JumboDiv } = AppStyles;

const Home = () => {
  const [login, setLogin] = useState(false);
  return (
    <div>
      {/* ANNOUNCE MENT */}
      {login && <Announcement/>}
      <br/>
      {/* JUMBOTRON */}
      <Jumbotron>
        <h1>Welcome!</h1>
        <p>
          FirstPass is your free, open-source password manager.
        </p>

      </Jumbotron>

      <p>
        {!login &&
          <Form>

          <br/>
            <h3>Please Login</h3>

            <Form.Group controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="nord-btn" onClick={()=>{setLogin(!login)}}>Login</Button>
          </Form>

        }
      </p>

    </div>
  )
}

export default Home;
