import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/defaults";
import { hexToRgbA } from "../../utils";

const Wrapper = styled.div`
  padding: 16px;
  background: ${props =>
    props.theme
      ? hexToRgbA(props.theme.colorPrimary, 0.1)
      : hexToRgbA(colors.primary, 0.1)};
`;

const HighlightStrip = ({ children, ...props }) => {
  return <Wrapper>{children}</Wrapper>;
};

HighlightStrip.propTypes = {
  children: PropTypes.number.isRequired
};

export default HighlightStrip;
