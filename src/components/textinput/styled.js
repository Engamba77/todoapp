import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 1px dotted gray;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 10px;
  /* margin-left: 50px; */
  width: 60%;
`;
export const StyleLabel = styled.label`
  font-size: 15px;
  width: 40%;
`;
export const Form = styled.form`
  border: 0.5px dotted gray;
  width: 400px;
  padding: 20px;

  /* box-shadow: 9px 9px 9px -6px rgba(0, 0, 0, 0.49);
  -webkit-box-shadow: 9px 9px 9px -6px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 9px 9px 9px -6px rgba(0, 0, 0, 0.49); */

  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  /* box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px; */
`;
export const Layout = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 10px solid green;
`;
