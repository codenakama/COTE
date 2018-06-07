import { storiesOf } from "@storybook/react";
import React, { Component } from "react";
import styled from "styled-components";
import TextInput from "../TextInput/TextInput";
import WidgetBox from "../WidgetBox/WidgetBox";
import { Caption } from "../atoms/Typography";
import Tab from "./Tab";
import Tabs from "./Tabs";

const ButtonWrapper = styled.div`
  padding: 1rem;
  border-top: 1px solid lightgrey;
`;

const TabPanel = styled.div`
  padding: 1rem;
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

storiesOf("Tab", module).add("Normal", () => (
  <Tab title="Tab One" isActive>
    <div>Tab One Content</div>
  </Tab>
));

class MyComponent extends Component {
  state = {
    selectedTab: 0
  };

  handleTabClicked = index => {
    this.setState({ selectedTab: index });
  };

  render() {
    return (
      <WidgetBox>
        <Tabs onTabClicked={this.handleTabClicked}>
          <Tab title="Tab One" active />
          <Tabs title="Tab Two" />
        </Tabs>
        {this.state.selectedTab === 0 && (
          <TabPanel>
            <InputWrapper>
              <TextInput
                full
                error="*The amount of money can’t surpass your redeemable points."
              />
            </InputWrapper>
            <InputWrapper>
              <Caption text="Conversion rate: 0.5%" />
            </InputWrapper>
            <InputWrapper>
              <Caption text="Redeem fee: Free" />
            </InputWrapper>
            <InputWrapper>
              <TextInput
                error="*The amount of money can’t surpass your redeemable points."
                full
              />
            </InputWrapper>
          </TabPanel>
        )}
        {this.state.selectedTab === 1 && (
          <TabPanel>
            <h1>Panel 2 content</h1>
          </TabPanel>
        )}
      </WidgetBox>
    );
  }
}

storiesOf("TabsPanel", module).add("Tabs", () => <MyComponent />);
