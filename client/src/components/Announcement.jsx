import React, { useState } from 'react';
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';

const Announcement = () => {

  const [show, setShow] = useState(true);

  return (
    <Alert key="success" variant="success" show={show}>
      This is a success alert—check it out!
    </Alert>
  )
}

export default Announcement;