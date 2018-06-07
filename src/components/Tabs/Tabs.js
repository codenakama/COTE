import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../styles/defaults";
import Tab from "./Tab";

const TabsWrapper = styled.div`
  display: flex;
  position: relative;
`;

const TabMarker = styled.div`
  height: 2px;
  width: ${props => props.width}%;
  position: absolute;
  z-index: 2;
  background: ${colors.primary};
  transition: all 250ms ease;
  transform: translateX(${props => `${props.position}%`});
  top: 30px;
`;

class Tabs extends Component {
  state = {
    activeIndex: 0
  };

  handleTabClicked = index => {
    this.props.onTabClicked(index);
    this.setState({ activeIndex: index });
  };

  render() {
    const { children } = this.props;
    const { activeIndex } = this.state;

    return (
      <TabsWrapper {...this.props}>
        {children.map((tab, index) => {
          return (
            <Tab
              onClick={() => this.handleTabClicked(index)}
              isActive={activeIndex === index}
              contentWidth={children.length * 100}
              {...tab.props}
            />
          );
        })}
        <TabMarker width={100 / children.length} position={activeIndex * 100} />
      </TabsWrapper>
    );
  }
}

Tabs.propTypes = {
  onTabClicked: PropTypes.func.isRequired
};

Tabs.defaultProps = {
  onTabClicked: index => alert(index)
};

export default Tabs;
