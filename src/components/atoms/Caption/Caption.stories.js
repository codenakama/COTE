import React from "react";
import { storiesOf } from "@storybook/react";
import Caption from "./Caption";

storiesOf("Caption", module)
  .add("Normal", () => <Caption text="Caption" />)
  .add("Error", () => <Caption text="Caption" error />);
