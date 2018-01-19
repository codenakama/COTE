import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../../styles/defaults";

const StyledCaption = styled.span`
  font-size: 12px;
  color: ${props => {
    if (props.required) return props.theme.colorDanger;

    if (props.theme) return props.theme.colorBlack;

    return colors.black;
  }};
  display: block;
`;

const Caption = ({ error, text, ...props }) => {
  return (
    <StyledCaption error={error} {...props}>
      {text}
    </StyledCaption>
  );
};

Caption.propTypes = {
  text: PropTypes.string
};

Caption.defaultProps = {
  text: "Caption text here"
};

export default Caption;
