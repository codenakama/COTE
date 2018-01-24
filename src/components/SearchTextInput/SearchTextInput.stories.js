import React from "react";
import { storiesOf } from "@storybook/react";
import SearchTextInput from "./SearchTextInput";

const results = [{ title: "1" }, { title: "2" }, { title: "3" }];

storiesOf("Search Text Input", module)
  .add("Without results", () => <SearchTextInput />)
  .add("With results", () => <SearchTextInput results={results} />)
  .add("Full width - no results", () => <SearchTextInput full />)
  .add("Full width - results", () => (
    <SearchTextInput results={results} full />
  ));
