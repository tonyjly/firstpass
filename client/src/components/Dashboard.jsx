import AppStyles from '../styles/AppStyles';
import { ShieldKeyhole } from '@styled-icons/remix-line';
import { Settings } from '@styled-icons/material-rounded';
import { PersonCircle } from '@styled-icons/bootstrap';
// import { Menu } from '@styled-icons/material-rounded';


const { Header, Left, Right, DashboardLogo, DashboardIcon } = AppStyles;

const Dashboard = () => {
  // DASHBOARD ELEMENTS HERE

  return (
    <div>
      <Header>
      <Left>
        <DashboardLogo>
          <ShieldKeyhole size="40"/>
        </DashboardLogo>
        <div>
          FirstPass
        </div>
      </Left>

      <Right>
        {/* <Icon><Menu size="40" /></Icon> */}
        {/* <Icon>Dashboard</Icon> */}
        {/* <DashboardIcon><Menu size="40"/></DashboardIcon> */}
        <DashboardIcon><Settings size="40"/></DashboardIcon>
        <DashboardIcon><PersonCircle size="40"/></DashboardIcon>
        <DashboardIcon>Tony</DashboardIcon>
      </Right>
      </Header>
    </div>
  )
}

export default Dashboard;