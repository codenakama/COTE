import { storiesOf } from "@storybook/react";
import React, { Component } from "react";
import SideNav from "./";

storiesOf("SideNav", module)
  .add("Open", () => <SideNav isOpen />)
  .add("With menu button", () => {
    class PageContainer extends Component {
      handleOpenSideNav = () => {
        this.sideNavRef.togle();
      };

      render() {
        return (
          <div style={{ position: "relative" }}>
            <SideNav ref={el => (this.sideNavRef = el)} />
            <div style={{ textAlign: "right" }}>
              <button type="button" onClick={this.handleOpenSideNav}>
                Togle Menu
              </button>
            </div>
          </div>
        );
      }
    }

    return <PageContainer />;
  });
