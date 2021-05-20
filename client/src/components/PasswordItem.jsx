import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import styled from 'styled-components';
import { Form, Col, Button, Modal } from 'react-bootstrap';
import { Eye, EyeSlash } from '@styled-icons/bootstrap';

const PasswordItem = (props) => {
  const [show, setShow] = useState(false);

  const { password } = props;

  return (
    <tr>
      <td>{password.id}</td>
      <td><a href={password.site} target="_blank">{password.name}</a></td>
      <td>{password.user}</td>

      {show
        ? <td>{password.password}</td>
        : <td className="hidetext">{password.password}</td>
      }

      <td className="center">
        {show
          ? <Eye size="20" onClick={() => setShow(false)}/>
          : <EyeSlash size="20" onClick={() => setShow(true)}/>
        }

      </td>
    </tr>
    );

}

export default PasswordItem;

const Data = styled.td`
  visibility:
`;

/* : <td>********************************</td> */
