import { Link } from "react-router-dom";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { ShoppingBasketOutlined } from "@material-ui/icons";
import brand from "../components/Assets/companylogo.png";

const NavContainer = styled.nav`
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 99;
  background: white;
  margin-top: -3px;
`;
const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 10;
  width: 100%;
  padding-right: 60px;
  padding-left: 60px;

  @media screen and (max-width: 760px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;
const NavLogo = styled(Link)`
  color: #fff;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
  //margin-right: -22px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
const NavItem = styled.li`
  height: 80px;
  position: relative;
  font-size: 16px;
  color: gray;

  :after {
    content: "";
    height: 3px;
    width: 0;
    background: yellowgreen;
    position: absolute;
    left: 0;
    transition: 0.5s;
  }
  &:hover:after {
    width: 100%;
  }
`;
const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    //transition: all 0.3s ease-in-out;
    //color: #e67817;
  }
`;
const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;
const NavBtnLink = styled(Link)`
  background: darkgreen;
  white-space: nowrap;
  padding: 7px 30px;
  font-size: 16px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: transparent;
    color: yellowgreen;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavLogo to="/">
          <img src={brand} alt="" style={{ height: "50px" }} />
        </NavLogo>
        <NavMenu>
          <NavItem>
            <NavLink to="/about">ABOUT</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/services">SERVICES</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/services">PRICE CALCULATOR</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/services">VIEW ESTATE</NavLink>
          </NavItem>
          <NavBtn>
            <NavBtnLink to="/register">REGISTER</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/login">SIGN IN</NavBtnLink>
          </NavBtn>
          <NavItem>
            <NavLink to="/cart">
              <Badge badgeContent={0} color="secondary" showZero>
                <ShoppingBasketOutlined style={{fontSize: "30px"}}/>
              </Badge>
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
