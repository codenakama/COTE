import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import styledComponents from "styled-components";
import ResultsList from "../ResultsList/ResultsList";

const Wrapper = styledComponents.div`
  position: relative;
  width: ${props => (props.full ? null : "fit-content")};
`;

const SearchTextInput = ({
  placeholder,
  handleInputChange,
  results,
  handleResultSelected,
  error,
  required,
  full,
  ...props
}) => {
  return (
    <Wrapper full={full}>
      <TextInput
        placeholder={placeholder}
        full={full}
        onChange={handleInputChange}
        error={error}
        required={required}
        {...props}
      />
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
  handleResultSelected: PropTypes.func,
  full : PropTypes.bool
};

SearchTextInput.defaultProps = {
  placeholder: "Type something to search",
  handleInputChange: () => console.log("input changed"),
  results: [],
  handleResultSelected: val => console.log(`Result ${val} selected`)
};

export default SearchTextInput;
