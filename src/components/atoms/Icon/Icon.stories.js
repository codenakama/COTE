import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";

storiesOf("Icon", module).add("Normal", () => (
  <Icon className="material-icons">face</Icon>
));
