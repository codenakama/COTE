import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLabel = styled.label`
  color: ${props =>
    props.required ? props.theme.colorDanger : props.theme.colorLightBlue};
  line-height: 1.618;
  font-size: 1rem;
`;

const Label = ({ text, required, ...props }) => {
  return (
    <StyledLabel required={required} {...props}>
      {text}
    </StyledLabel>
  );
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
