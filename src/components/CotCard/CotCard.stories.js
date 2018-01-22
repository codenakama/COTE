import React from "react";
import { storiesOf } from "@storybook/react";
import CotCard from "./CotCard";

storiesOf("CotCard", module)
  .add("Normal", () => <CotCard />)
  .add("With cardholder name", () => <CotCard cardHolderName="Joe Bloke" />);
