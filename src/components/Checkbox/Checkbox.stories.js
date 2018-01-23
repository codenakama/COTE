import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";

storiesOf("Checkbox", module)
  .add("Normal", () => <Checkbox />)
  .add("With label", () => <Checkbox label="This is a label." />);
