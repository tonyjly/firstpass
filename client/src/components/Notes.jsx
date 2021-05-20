import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import Announcement from './Announcement';
import AppStyles from '../styles/AppStyles';
const { Main, List, Logo, JumboDiv, NavigationLogo } = AppStyles;

const Notes = () => {

  return (
    <NoteStyle>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label><h1>Secure Note</h1></Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </NoteStyle>
  )
}

const NoteStyle = styled.div`
  margin-top: 20px;
`;

export default Notes;
