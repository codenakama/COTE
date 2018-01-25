import React from "react";
import { storiesOf } from "@storybook/react";
import Navigation from "./Navigation";

storiesOf("Navigation", module).add("Normal", () => (
  <div style={{ backgroundColor: "#f3f3f3", height: "200px" }}>
    <Navigation />
  </div>
));
