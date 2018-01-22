import styled from "styled-components";
import React, { Component } from "react";
import PropTypes from "prop-types";

const StyledIcon = styled.i`
  margin-left: 12px;
`;

const Icon = props => {
  return <StyledIcon {...props} />;
};

Icon.propTypes = {};

export default Icon;
