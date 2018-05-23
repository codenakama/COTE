import { storiesOf } from "@storybook/react";
import React, { Component } from "react";
import styled from "styled-components";
import SideNav from "./";

const Container = styled.div`
  min-height: 400px;
`;

storiesOf("SideNav", module)
  .add("Open", () => (
    <Container>
      <SideNav isOpen />
    </Container>
  ))
  .add("With menu button", () => {
    class PageContainer extends Component {
      handleOpenSideNav = () => {
        this.sideNavRef.togle();
      };

      render() {
        return (
          <Container>
            <div style={{ textAlign: "right" }}>
              <button type="button" onClick={this.handleOpenSideNav}>
                Togle Menu
              </button>
            </div>
            <SideNav ref={el => (this.sideNavRef = el)} />
          </Container>
        );
      }
    }

    return <PageContainer />;
  })
  .add("With content", () => {
    class PageContainer extends Component {
      handleOpenSideNav = () => {
        this.sideNavRef.togle();
      };

      render() {
        return (
          <Container>
            <SideNav ref={el => (this.sideNavRef = el)} />
            <div>
              <p>
                Eiusmod aute incididunt nisi Lorem nostrud minim officia duis
                mollit.
              </p>
              <p>
                Eiusmod aute incididunt nisi Lorem nostrud minim officia duis
                mollit.
              </p>
              <p>
                Eiusmod aute incididunt nisi Lorem nostrud minim officia duis
                mollit.
              </p>
              <p>
                Eiusmod aute incididunt nisi Lorem nostrud minim officia duis
                mollit.
              </p>
              <p>
                Eiusmod aute incididunt nisi Lorem nostrud minim officia duis
                mollit.
              </p>
              <p>
                Eiusmod aute incididunt nisi Lorem nostrud minim officia duis
                mollit.
              </p>
              <p>
                Eiusmod aute incididunt nisi Lorem nostrud minim officia duis
                mollit.
              </p>
              <p>
                Eiusmod aute incididunt nisi Lorem nostrud minim officia duis
                mollit.
              </p>
              <p>
                Eiusmod aute incididunt nisi Lorem nostrud minim officia duis
                mollit.
              </p>
              <p>
                Eiusmod aute incididunt nisi Lorem nostrud minim officia duis
                mollit.
              </p>
              <p>
                Eiusmod aute incididunt nisi Lorem nostrud minim officia duis
                mollit.
              </p>
              <p>
                Eiusmod aute incididunt nisi Lorem nostrud minim officia duis
                mollit.
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <button type="button" onClick={this.handleOpenSideNav}>
                Togle Menu
              </button>
            </div>
          </Container>
        );
      }
    }

    return <PageContainer />;
  });
