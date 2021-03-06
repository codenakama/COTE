import React from "react";
import { storiesOf } from "@storybook/react";
import { Heading1, Heading2, Title, Subtitle } from "./Heading";
import Caption from "./Caption";
import Small from "./Small";
import Label from "./Label";

// storiesOf("Typography", module).add();

storiesOf("Typography/Headings", module)
  .add("Heading1", () => <Heading1>Heading 1</Heading1>)
  .add("Heading1 with a lot of text", () => (
    <Heading1>
      Etiam porta tempus orci quis tristique. Fusce blandit quis risus in
      suscipit. Etiam porta tempus orci quis tristique. Fusce blandit quis risus
      in suscipit
    </Heading1>
  ))
  .add("Heading1 highlighted", () => (
    <Heading1 highlight>This text is important!</Heading1>
  ))
  .add("Heading 2", () => <Heading2>Heading 2</Heading2>)
  .add("Title", () => <Title>Title</Title>)
  .add("Subtitle", () => <Subtitle>Subtitle</Subtitle>);

storiesOf("Typography/Label", module)
  .add("Normal", () => <Label />)
  .add("Required", () => <Label required />);

storiesOf("Typography/Caption", module)
  .add("Normal", () => <Caption text="Caption" />)
  .add("Error", () => <Caption text="Caption" required />);
