import React from "react";
import { storiesOf } from "@storybook/react";
import TextInput from "./TextInput";

storiesOf("Text Input", module)
  .add("Normal", () => <TextInput placeholder="Placeholder value" />)
  .add("Required", () => <TextInput required error="There was an error" />)
  .add("With Label", () => (
    <TextInput placeholder="Placeholder value" labelText="Label" />
  ))
  .add("With info", () => <TextInput info="This is an info to help user." />)
  .add("With info and error", () => (
    <TextInput info="This is an info to help user." error="Field is required" />
  ))
  .add("With mask - Number", () => (
    <TextInput
      placeholder="e.g. 07858585858855"
      mask={[
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        " ",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        " ",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/
      ]}
    />
  ))
  .add("With mask and guide - Number", () => (
    <TextInput
      placeholder="e.g. 07858585858855"
      guide={true}
      mask={[
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        " ",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        " ",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/
      ]}
    />
  ))
  .add("With mask - Text", () => (
    <TextInput
      placeholder="e.g. Text up to 8 characters"
      mask={[/^[a-zA-Z ]+$/]}
    />
  ));
