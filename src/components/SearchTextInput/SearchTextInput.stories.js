import React from "react";
import { storiesOf } from "@storybook/react";
import SearchTextInput from "./SearchTextInput";

const results = [
  { title: "1", value: "Result 1" },
  { title: "2", value: "Result 2" },
  { title: "3", value: "Result 3" }
];

const handleResultSelected = result => {
  alert(result.value);
};

storiesOf("Search Text Input", module)
  .add("Without results", () => <SearchTextInput />)
  .add("With results", () => <SearchTextInput results={results} />)
  .add("Full width - no results", () => <SearchTextInput full />)
  .add("Full width - results", () => <SearchTextInput results={results} full />)
  .add("With error", () => <SearchTextInput required />)
  .add("When selected a result", () => (
    <SearchTextInput
      results={results}
      onResultSelected={handleResultSelected}
    />
  ));
