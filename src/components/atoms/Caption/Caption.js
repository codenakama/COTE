import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCaption = styled.span`
  font-size: 0.75rem;
  color: ${props => (props.error ? props.theme.colorDanger : "#A4AAB3")};
`;

const Caption = ({ error, text, ...props }) => {
  return (
    <StyledCaption error={error} {...props}>
      {text}
    </StyledCaption>
  );
};

Caption.propTypes = {};

export default Caption;
