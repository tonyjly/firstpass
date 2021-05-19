import AppStyles from '../styles/AppStyles';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ShieldKeyhole } from '@styled-icons/remix-line';
import { KeyboardArrowDown, Settings } from '@styled-icons/material-rounded';
import { PersonCircle } from '@styled-icons/bootstrap';
// import { Menu } from '@styled-icons/material-rounded';


const { Header, Left, Right, NavigationLogo, NavigationIcon } = AppStyles;

const Navigation = () => {
  // Navigation ELEMENTS HERE

  return (
    <div>
      <Header>
      <Left>
        <NavigationLogo>
          <ShieldKeyhole size="40"/>
        </NavigationLogo>
        <div>
          FirstPass
        </div>
      </Left>

      <Right>
        {/* <Icon><Menu size="40" /></Icon> */}
        {/* <Icon>Navigation</Icon> */}
        {/* <NavigationIcon><Menu size="40"/></NavigationIcon> */}
        <NavigationIcon><Settings size="40"/></NavigationIcon>
        <NavigationIcon><PersonCircle size="40"/></NavigationIcon>
        <NavigationIcon>Tony</NavigationIcon>
        <NavigationIcon><KeyboardArrowDown size="28"/></NavigationIcon>

      </Right>
      </Header>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation;