import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./Dropdown";
const options = [
  { title: "Option 1", value: 1 },
  { title: "Option 2", value: 2 },
  { title: "Option 3", value: 3 }
];

storiesOf("Dropdown", module)
  .add("Normal", () => <Dropdown options={options} />)
  .add("Error", () => (
    <Dropdown
      error="Show this error message"
      options={options}
      onBlur={e => console.log(e)}
    />
  ))
  .add("Full width", () => <Dropdown options={options} full />)
  .add("With label", () => <Dropdown label="My dropdown" options={options} />);
