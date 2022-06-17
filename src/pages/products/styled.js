import styled from "styled-components";

export const Images = styled.div`
  border: 0px solid red;
  height: 320px;
  padding: 30px;
  width: calc(98% / ${(props) => props.count});
  /* margin: 10px; */
  border-radius: 7px;
  /* box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px; */
  box-shadow: 7px 3px 15px 2px #ffe6e6;
`;
