import React from 'react';
import { StyledInput } from './styled';
import { StyleLabel } from './styled';

const TextInput = ({ label, type, value, onChange, required }) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <StyleLabel htmlFor=" ">{label}</StyleLabel>
        <StyledInput
          type={type}
          // name={products}
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    </>
  );
};

export default TextInput;
