import React from "react";
import { storiesOf } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";

const options = [
  { title: "Option 1", value: 1 },
  { title: "Option 2", value: 2 },
  { title: "Option 3", value: 3 }
];

storiesOf("ButtonGroup", module).add("With 3 buttons", () => (
  <ButtonGroup options={options} />
));
