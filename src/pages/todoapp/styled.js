import styled from "styled-components";
import { RiAddFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";

export const List = styled.input`
  border: 1px solid green;
  padding: 10px;
  border-radius: 4px;
  width: 90%;
  height: 30px;
`;
export const Container = styled.div`
  width: 400px;
  gap: 7px;
  padding: 20px;
  background: #ebf5fb;
  border-radius: 10px;
  box-shadow: 9px 9px 9px -6px rgba(0, 0, 0, 0.49);
`;
export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to bottom,
    #ffffff,
    #dbd7fc,
    #b2b1f8,
    #818df4,
    #326cf0
  );
`;
export const HeadOne = styled.h1`
  color: black;
  text-align: center;
`;
export const Border = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin-bottom: 20px;
`;
export const StyledAddIcon = styled(RiAddFill)`
  color: white;
  background-color: blueviolet;
  cursor: pointer;
`;
export const DelteIcon = styled(AiFillDelete)`
  color: white;
  background-color: red;
  padding: 5px;
  border-radius: 6px;
  box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.56);
  cursor: pointer;
`;
export const StoredText = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  width: 100%;
  align-items: center;
  justify-content: start;
  padding: 10px;
  height: 40px;
  background-color: white;
  box-shadow: 0px 3px 4px -2px rgba(0, 0, 0, 0.53);
`;
export const DelButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  padding: 3px;
`;
