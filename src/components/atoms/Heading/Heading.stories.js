import React from "react";
import { storiesOf } from "@storybook/react";
import { H1, H2, H3, H4 } from "./Heading";

storiesOf("Headings", module)
  .add("H1", () => <H1>Heading 1</H1>)
  .add("H2", () => <H2>Heading 2</H2>);
