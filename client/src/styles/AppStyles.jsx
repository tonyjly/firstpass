import styled from 'styled-components';

const Header = styled.div`
  background: gray;
  height: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: white;
  flex: 1 0;
`;

const Left = styled.div`
  display: flex;
  flex: 0 0 16%;
  justify-content: center;
  align-items: center;
  background-color: #5E81AC;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex: 0 0 84%;
  justify-content: flex-end;
  background-color: #81A1C1;
  align-items: center;
`;

const Main = styled.div`
  background-color: red;
  color: white;
  padding: 0;
`;

const List = styled.div`
  color: #5E81AC;
`;

const Logo = styled.image`
  /* fill: blue; */
  color: blue;
  border-color: green;
`;

const NavigationLogo = styled.span`
  margin: 0;
`;

const NavigationIcon = styled.span`
  /* margin: 0 16px 0 0; */
`;

const JumboDiv = styled.div`
  color: #5E81AC;
`;

export default {
  Header, Left, Right, Main, List, Logo, NavigationLogo, NavigationIcon, JumboDiv
};
