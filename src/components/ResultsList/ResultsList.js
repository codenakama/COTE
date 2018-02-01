import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Paper from "../Paper/Paper";
import { colors as defaultColors } from "../../styles/defaults";

const Wrapper = styled(Paper)`
  position: absolute;
  top: 48px;
  width: 100%;
  left: 0;
  padding: 0;
  min-height auto;
  z-index: 10;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14);
`;

const ResultWrapper = styled.div`
  cursor: pointer;
  &:hover {
    /*60 added at the end is alpha channel of color - 60 percent translucent*/
    background-color: ${defaultColors.primary}60;
  }
`;

const Result = styled.span`
  padding: 1em;
  font-weight: bold;
  display: inline-block;
  width: 100%;
  &:hover {
    color: #fff;
  }
`;

const ResultsList = ({ results, handleResultSelected, ...props }) => {
  return (
    <Wrapper {...props}>
      {results.map((result, i) => {
        return (
          <ResultWrapper key={`r-${i}`}>
            <Result onClick={() => handleResultSelected(result)}>
              {result.title}
            </Result>
          </ResultWrapper>
        );
      })}
    </Wrapper>
  );
};

ResultsList.propTypes = {};

ResultsList.defaultProps = {
  results: [],
  handleResultSelected: val => console.log(`Result ${val} clicked`)
};

export default ResultsList;
