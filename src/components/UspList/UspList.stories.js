import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import UspList from ".";
import HighLightStrip from "../HighLightStrip";
import WidgetBox from "../WidgetBox/WidgetBox";
import Button from "../atoms/Button/Button";

const usps = [
  {
    title: "Aliquip officia id nostrud minim laboris velit non incididunt.",
    description:
      "Aliqua minim nostrud excepteur qui ut magna duis ad ut dolore reprehenderit laborum veniam in.",
    icon: "lock"
  },
  {
    title:
      "Aliquip et irure labore commodo sunt nostrud dolor consectetur voluptate cillum ea consequat.",
    description:
      "Aliqua velit est dolore voluptate laboris tempor cillum anim deserunt ad dolore commodo.",
    icon: "credit_card"
  }
];

const ButtonWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  button:first-of-type {
    margin-bottom: 1.5rem;
  }
`;

storiesOf("UspList", module)
  .add("Empty", () => <UspList />)
  .add("With items", () => <UspList items={usps} />)
  .add("With other components", () => (
    <WidgetBox title="Premium Plan">
      <UspList items={usps} />
      <HighLightStrip>
        Reprehenderit laboris sunt commodo in irure culpa proident aliquip
        velit. Culpa ex velit dolor exercitation consequat aliqua deserunt
        laboris sunt nulla.
      </HighLightStrip>
      <ButtonWrapper>
        <Button primary solid>
          Cancel Premium
        </Button>

        <Button primary>Keep Premium</Button>
      </ButtonWrapper>
    </WidgetBox>
  ));
