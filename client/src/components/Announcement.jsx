import React, { useState } from 'react';
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';

const Announcement = () => {

  const [show, setShow] = useState(true);

  return (
    <Alert key="success" variant="success" show={show}>
      You have logged in successfully!
    </Alert>
  )
}

export default Announcement;