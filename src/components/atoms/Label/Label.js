import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLabel = styled.label`
  color: rgba(6, 31, 51, 0.7);
  line-height: 1.618;
  font-size: ;
`;

const Label = ({ text, ...props }) => {
  return <StyledLabel {...props}>{text}</StyledLabel>;
};

Label.propTypes = {
  text: PropTypes.string,
  info: PropTypes.string
};

Label.defaultProps = {
  text: "Label",
  info:
    "If you have any problems, please contact us on 0208 9627 400. Monday - Friday, 9 am- 6pm."
};

export default Label;
