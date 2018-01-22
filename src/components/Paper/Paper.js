import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PaperWrapper = styled.div`
  min-width: 150px;
  min-height: 100px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14);
  padding: 1rem;
`;

const Paper = props => {
  const { children } = props;
  return <PaperWrapper {...props}>{children}</PaperWrapper>;
};

Paper.propTypes = {};

export default Paper;
