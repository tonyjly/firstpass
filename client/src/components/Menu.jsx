import styled from 'styled-components';
import AppStyles from '../styles/AppStyles';
import { Home5, Key } from '@styled-icons/remix-line';
import { Note, Bitcoin } from '@styled-icons/boxicons-regular';
import { AddressBook } from '@styled-icons/fa-regular';
import { Payment, BuildingBank } from '@styled-icons/fluentui-system-regular';

const Menu = () => {
  const { Logo } = AppStyles;

  return (
    <ListGroup>

      <ListItem>
        <Logo><Home5 size="28"/></Logo>
        Home
      </ListItem>

      <ListItem>
        <Logo><Key size="28"/></Logo>
        Passwords
      </ListItem>

      <ListItem>
        <Logo><Note size="28"/></Logo>
        Notes
      </ListItem>

      <ListItem>
        <Logo><AddressBook size="28"/></Logo>
        Addresses
      </ListItem>

      <ListItem>
        <Logo><Payment size="28"/></Logo>
        Payments
      </ListItem>

      <ListItem>
        <Logo><BuildingBank size="28"/></Logo>
        Accounts
      </ListItem>

      <ListItem>
        <Logo><Bitcoin size="28"/></Logo>
        Donate
      </ListItem>

    </ListGroup>
  )
}

export default Menu;

const ListGroup = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

`;

const ListItem = styled.li`
  border: 0 solid black;
  /* margin-top: -1px; */
  padding: 16px;
  display: flex;
  align-items: center;
`;
