import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Form, Col, Button, Modal } from 'react-bootstrap';

const PasswordCreate = (props) => {
  // const [modalShow, setModalShow] = useState(false);

  return (
    <div>



      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* ADD PASSWORD FORM */}
        <Form>
          <Form.Row>
            <Col>
              <Form.Control placeholder="Label" />
            </Col>
            <Col>
              <Form.Control placeholder="http://example.com" />
            </Col>
            <Col>
              <Form.Control placeholder="Username" />
            </Col>
            <Col>
              <Form.Control placeholder="Password" />
            </Col>
          </Form.Row>
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="nord-btn">Submit</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );

}

export default PasswordCreate;