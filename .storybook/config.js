import { configure, addDecorator } from "@storybook/react";
import globalStyles from "./globalStyles";

import React from "react";

globalStyles();

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "200px"
};

//decorators
const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>;
addDecorator(CenterDecorator);

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
