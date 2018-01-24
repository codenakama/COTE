import React from "react";
import { storiesOf } from "@storybook/react";
import SearchTextInput from "./SearchTextInput";

storiesOf("Search Text Input", module)
  .add("Normal", () => <SearchTextInput />)
  .add("Full width", () => <SearchTextInput full />);
