import React from "react";
import { List } from "../../pages/todoapp/styled";

const TextList = ({ type, name, place, value, onChange, required }) => {
  return (
    <>
      <List
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={place}
        required={required}
      ></List>
    </>
  );
};
export default TextList;
