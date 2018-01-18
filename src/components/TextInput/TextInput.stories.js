import React from "react";
import { storiesOf } from "@storybook/react";
import TextInput from "./TextInput";

storiesOf("Text Input", module)
  .add("Normal", () => <TextInput placeholder="Placeholder value" />)
  .add("Required", () => <TextInput />);
