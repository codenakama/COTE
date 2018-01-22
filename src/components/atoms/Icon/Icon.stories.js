import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";

storiesOf("Icon", module)
  .add("Normal", () => <Icon name="face" />)
  .add("Primary color", () => <Icon name="face" primary />)
  .add("Circle", () => <Icon name="face" circle />)
  .add("Circle solid", () => <Icon name="face" circle solid />);
