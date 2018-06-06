import React from "react";
import { storiesOf } from "@storybook/react";
import Tabs, { Tab } from "./TabsPanel";

storiesOf("Tab", module).add("Normal", () => (
  <Tab title="Tab One" isActive>
    <div>Tab One Content</div>
  </Tab>
));

storiesOf("TabsPanel", module).add("Tabs", () => (
  <Tabs>
    <Tab title="Tab One" active="true">
      <div>Tab One Content</div>
    </Tab>
    <Tab title="Tab Two">
      <div>Tab Two Content</div>
    </Tab>
    <Tab title="Tab Three">
      <div>Tab Two Content</div>
    </Tab>
  </Tabs>
));
