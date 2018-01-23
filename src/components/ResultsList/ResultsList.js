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
`;

const ResultWrapper = styled.div`
  cursor: pointer;
  &:hover {
    background-color: ${defaultColors.primary};
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
    <Wrapper>
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
