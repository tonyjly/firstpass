import styled from 'styled-components';
import { Form, Button, Col } from 'react-bootstrap';
import Announcement from './Announcement';
import AppStyles from '../styles/AppStyles';
const { Main, List, Logo, JumboDiv, NavigationLogo } = AppStyles;

const Notes = () => {

  return (
    <NoteStyle>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label><h1>Secure Note</h1></Form.Label>

          <Form.Row className="align-items-center">
            <Col xs="auto" className="my-1">
              <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                Preference
              </Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
              >
                <option value="0">Type</option>
                <option value="1">Login</option>
                <option value="2">Card</option>
                <option value="3">Identity</option>
              </Form.Control>
            </Col>
          </Form.Row>
          <br/>
          <Form.Control type="text" placeholder="Description" />
          <br/>
          <Form.Control as="textarea" rows={3} placeholder="Note" />
        </Form.Group>

        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    </NoteStyle>
  )
}

const NoteStyle = styled.div`
  margin-top: 20px;
`;

export default Notes;
