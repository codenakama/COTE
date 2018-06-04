import React from "react";
import { storiesOf } from "@storybook/react";
import TabsPanel from "./TabsPanel";

storiesOf("TabsPanel", module).add("With subitems", () => (
  <TabsPanel className="">
    <Tab active="true" title="Tab One">
      <div>Tab One Content</div>
    </Tab>
    <Tab title="Tab Two">
      <div>Tab Two Content</div>
    </Tab>
  </TabsPanel>
));
