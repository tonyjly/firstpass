import styled from 'styled-components';
import AppStyles from '../styles/AppStyles';
import { Home5, Key } from '@styled-icons/remix-line';
import { Note, Bitcoin } from '@styled-icons/boxicons-regular';
import { AddressBook } from '@styled-icons/fa-regular';
import { Payment, BuildingBank } from '@styled-icons/fluentui-system-regular';
import { Link } from 'react-router-dom';

const Menu = () => {
  const { Logo } = AppStyles;

  return (
    <ListGroup>

      <ListItem>
        <Link to="/">
          <Logo><Home5 size="28"/></Logo>
          Home
        </Link>
      </ListItem>

      <ListItem>
        <Link to="/passwords">
          <Logo><Key size="28"/></Logo>
          Passwords
        </Link>
      </ListItem>

      <ListItem>
        <Link to="/notes">
          <Logo><Note size="28"/></Logo>
          Notes
        </Link>
      </ListItem>

      {/* <ListItem className="disabled">
        <Logo><AddressBook size="28"/></Logo>
        Addresses
      </ListItem> */}

      <ListItem className="disabled">
        <Logo><Payment size="28"/></Logo>
        Payments
      </ListItem>

      <ListItem className="disabled">
        <Logo><BuildingBank size="28"/></Logo>
        Accounts
      </ListItem>

      <ListItem>
        <Link to="/donate">
          <Logo><Bitcoin size="28"/></Logo>
          Donate
        </Link>
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


  /* &:hover{ background-color: #E5E9F0; color: red; } */
  &:hover{ text-decoration: none; }
  &:active{ background-color: #81A1C1; color: #D8DEE9; }
  font-weight: bold;
`;
