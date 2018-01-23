import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import styledComponents from "styled-components";
import ResultsList from "../ResultsList/ResultsList";

const Wrapper = styledComponents.div`
  position: relative;
  width: fit-content;
`;

const SearchTextInput = ({
  placeholder,
  handleInputChange,
  results,
  handleResultSelected,
  ...props
}) => {
  return (
    <Wrapper>
      <TextInput placeholder={placeholder} full />
      {results && (
        <ResultsList
          results={results}
          handleResultSelected={handleResultSelected}
        />
      )}
    </Wrapper>
  );
};

SearchTextInput.propTypes = {
  placeholder: PropTypes.string,
  /** Callback that returns search criteria */
  handleInputChange: PropTypes.func,
  /** Array of possible results */
  results: PropTypes.array,
  /** Callback to retrieve the selected result */
  handleResultSelected: PropTypes.func
};

SearchTextInput.defaultProps = {
  placeholder: "Type something to search",
  handleInputChange: () => console.log("input changed"),
  results: [{ title: "1" }, { title: "2" }, { title: "3" }],
  handleResultSelected: val => console.log(`Result ${val} selected`)
};

export default SearchTextInput;
