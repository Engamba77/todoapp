import styled from "styled-components";

export const NewButton = styled.button`
  background-color: lightgreen;
  border: 0px dotted gray;
  padding: 10px;
  font-size: 20px;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  background-size: cover;
  background-position: center;

  :hover {
    background-color: white;
  }
`;
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;
export const Head = styled.h1`
  color: green;
  paddingleft: 12px;
`;
export const Mount = styled.div`
  height: 100%;
  width: 100%;
`;
export const Zero = styled.p`
  color: green;
  font-size: 40px;
  position: relative;
`;
export const Center = styled.div`
  width: 400px;
  position: absolute;
  left: 700px;
  top: 300px;
`;
export const Box = styled.div`
  width: 400px;
  position: absolute;
  left: 700px;
  top: 300px;
`;
