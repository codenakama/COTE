import React from "react";
import { storiesOf } from "@storybook/react";
import Uploader from "./Uploader";

storiesOf("Uploader", module).add("Normal", () => (
  <Uploader accept="image/jpeg, image/png, application/pdf" />
));
