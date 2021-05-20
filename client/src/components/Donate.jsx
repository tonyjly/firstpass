import styled from 'styled-components';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import Announcement from './Announcement';
import AppStyles from '../styles/AppStyles';
const { Main, List, Logo, JumboDiv, NavigationLogo } = AppStyles;

const Donate = () => {

  return (
    <DonateStyle>

      <h1>Donate</h1>
      <p>Thank you for keeping our service free!</p>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Send us a coffee at FirstPass"
          aria-label="Amount (to the nearest dollar)"
        />
      </InputGroup>

      <Button type="submit">Send</Button>

    </DonateStyle>
  )
}

const DonateStyle = styled.div`
  margin-top: 20px;
`;

export default Donate;
