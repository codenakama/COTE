import { configure, addDecorator } from "@storybook/react";
import globalStyles from "./globalStyles";
import { ThemeProvider } from "styled-components";
import React from "react";
import "../src/styles/lato.css";

globalStyles();

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "200px"
};

const theme = {
  colorPrimary: "#27B161",
  colorLightGrey: "#F3F3F3",
  colorDarkgrey: "#A4AAB3",
  colorShadow: "#000000",
  colorLightBlue: "rgba(6, 31, 51, 0.7)",
  colorDarkBlue: "rgba(6, 31, 51, 1)",
  colorHover: "#148443",
  colorDisabled: "#27B161",
  colorDanger: "#FF7183"
};
//decorators
const LayoutDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <div style={styles}>{storyFn()}</div>
  </ThemeProvider>
);

addDecorator(LayoutDecorator);

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
