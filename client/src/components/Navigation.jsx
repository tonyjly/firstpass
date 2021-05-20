import AppStyles from '../styles/AppStyles';
import styled from 'styled-components';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ShieldKeyhole } from '@styled-icons/remix-line';
import { KeyboardArrowDown, Settings } from '@styled-icons/material-rounded';
import { PersonCircle } from '@styled-icons/bootstrap';
// import { Menu } from '@styled-icons/material-rounded';


const { Header, Left, Right, Main, NavigationLogo, NavigationIcon } = AppStyles;

const Navigation = () => {
  // Navigation ELEMENTS HERE

  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        {/* HOME */}
        <Navbar.Brand href="#home">
          <NavigationLogo><ShieldKeyhole size="40" color="#81A1C1"/></NavigationLogo>
          {'  '}
          <Brand>FirstPass</Brand>
        </Navbar.Brand>

        {/* TOGGLE */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* COLLAPSE */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#settings">
              <NavigationIcon><Settings size="40"/></NavigationIcon>
            </Nav.Link>
            <Nav.Link><NavigationIcon><PersonCircle size="40"/></NavigationIcon></Nav.Link>
            <Nav.Link eventKey={2} href="#account">
              {/* <NavigationIcon>Tony</NavigationIcon> */}
              <NavDropdown title="Tony" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Support</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Donate</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
  )
}

export default Navigation;

const Brand = styled.span`
  font-weight: bold;
  color: #81A1C1;
`;


const NavTest = styled.div.attrs(props => ({
  className: "small",
}))`
  background: black;
`;