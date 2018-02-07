import React from "react";
import { storiesOf } from "@storybook/react";
import HighlightsBarSlider from "./HighlightsBarSlider";

const items = [
  { icon: "check_circle", name: "USP 1" },
  { icon: "check_circle", name: "USP 2" },
  { icon: "check_circle", name: "USP 3" },
  { icon: "check_circle", name: "USP 4" }
];

storiesOf("HighlightsBarSlider", module)
  .add("With Icons", () => <HighlightsBarSlider items={items} />)
  .add("Without Icons", () => <HighlightsBarSlider items={items} />);
