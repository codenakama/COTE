import { storiesOf } from "@storybook/react";
import React from "react";
import TextInput from "../../TextInput/TextInput";
import Button from "./Button";

storiesOf("Button", module)
  .add("Normal", () => <Button>Click me</Button>)
  .add("Danger", () => <Button danger>Delete</Button>)
  .add("Solid background", () => (
    <Button solid primary>
      Click me
    </Button>
  ))
  .add("Large", () => (
    <Button primary solid large>
      Click me
    </Button>
  ))
  .add("Disabled", () => <Button disabled>Click me</Button>)
  .add("Full width", () => (
    <Button solid primary full>
      Click me
    </Button>
  ))
  .add("Loading", () => (
    <div>
      <Button solid loading>
        Click me
      </Button>
    </div>
  ))
  .add("Button and textinput side by side", () => (
    <div
      style={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <Button
        solid
        loading
        loadingText="wait for it..."
        style={{ marginRight: "1em" }}
      >
        Click me
      </Button>
      <TextInput />
    </div>
  ));
