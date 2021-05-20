
import React, { useState } from 'react';
import { Jumbotron, Alert, Button } from 'react-bootstrap';
import Announcement from './Announcement';
import AppStyles from '../styles/AppStyles';
const { JumboDiv } = AppStyles;

const Home = () => {
  const [login, setLogin] = useState(false);
  return (
    <div>
      {/* ANNOUNCE MENT */}
      {login && <Announcement/>}

      {/* JUMBOTRON */}
      <Jumbotron>
        <h1>Welcome!</h1>
        <p>
          FirstPass is your free, open-source password manager.
        </p>
        <p>
          {!login && <Button variant="primary" onClick={()=>{setLogin(!login)}}>Login</Button>}
        </p>
      </Jumbotron>
    </div>
  )
}

export default Home;
