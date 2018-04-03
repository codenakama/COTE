import React from "react";
import { storiesOf } from "@storybook/react";
import CaptionedImageBox from "./index";
import styled from "styled-components";

storiesOf("CaptionedImageBox", module).add("Normal", () => (
  <CaptionedImageBox />
));
