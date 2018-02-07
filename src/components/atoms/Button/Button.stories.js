import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("Normal", () => <Button>Click me</Button>)
  .add("Solid background", () => <Button solid>Click me</Button>)
  .add("Large", () => (
    <Button solid large>
      Click me
    </Button>
  ))
  .add("Disabled", () => <Button disabled>Click me</Button>)
  .add("Full width", () => (
    <Button solid full>
      Click me
    </Button>
  ));
