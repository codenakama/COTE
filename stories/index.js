import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const Button = props => <button {...props}>{props.children}</button>;

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));
