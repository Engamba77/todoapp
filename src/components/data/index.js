import React from "react";
import { DelteIcon } from "../../pages/todoapp/styled";
import { StoredText } from "../../pages/todoapp/styled";
import { DelButton } from "../../pages/todoapp/styled";

const Data = ({ value, onClickDel }) => {
  return (
    <>
      <DelButton>
        <StoredText>
          <p>{value}</p>
        </StoredText>
        <DelteIcon onClick={onClickDel} size="40px" />
      </DelButton>
    </>
  );
};

export default Data;
