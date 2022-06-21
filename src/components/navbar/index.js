import React from "react";
import { StyledUl } from "./styled";
import { StyledLi } from "./styled";
import { StyledLink } from "./styled";

const NavBar = () => {
  return (
    <>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/todo">TODOAPP</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/counter">COUNTER</StyledLink>
        </StyledLi>
      </StyledUl>
    </>
  );
};
export default NavBar;
