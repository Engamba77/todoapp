import React from 'react';
import { StyledButton } from './styled';
import PropTypes from 'prop-types';

const Button = ({ buttonlabel, buttonColor, type }) => {
  return (
    <StyledButton color={buttonColor} type={type}>
      {buttonlabel}
    </StyledButton>
  );
};

Button.propTypes = {
  buttonColor: PropTypes.string,
  buttonlabel: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
//buttonlabel=props
// buttonColor == props
//functional component
// class compponent
