import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import RadioButton from ".";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

storiesOf("RadioButton", module).add("Normal", () => (
  <Container>
    <RadioButton value={1} label="Option 1" checked />
    <RadioButton value={2} label="Option 2" />
    <RadioButton value={3} label="Option 3" />
  </Container>
));
