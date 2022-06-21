import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  background-color: #848484;
  gap: 10px;
  margin: 0;
  padding: 15px;
`;
export const StyledLi = styled.li`
  /* border: 1px solid red; */
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  /* background-color: #0000ff; */
  padding: 10px;
  border-radius: 2px;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  color: whitesmoke;
  :hover {
    background-color: #e6e6e6;
    color: black;
  }
`;
