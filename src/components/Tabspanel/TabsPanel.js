import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Title } from "../atoms/Typography";
import { colors } from "../../styles/defaults";

const TabWrapper = styled.a`
  display: inline-block;
  flex: 1;
`;

const TabTitle = Title.withComponent("a").extend`
cursor: pointer;
color: ${props => (props.isActive ? colors.black : colors.darkGrey)};

font-weight: 700;
padding: 8px;
display: inline-block;
margin-bottom: 1rem;
width: 100%
text-align: center;
`;

const TabsWrapper = styled.div`
  display: flex;
  position: relative;
`;

const TabContent = styled.div`
  padding: 1.5rem;
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
    this.setState({ activeIndex: index });
  };

  render() {
    const { children } = this.props;
    const { activeIndex } = this.state;

    return (
      <TabsWrapper>
        {children.map((tab, index) => {
          return (
            <Tab
              onClick={() => this.handleTabClicked(index)}
              isActive={activeIndex === index}
              {...tab.props}
            />
          );
        })}
        <TabMarker width={100 / children.length} position={activeIndex * 100} />
      </TabsWrapper>
    );
  }
}

Tabs.propTypes = {};

export default Tabs;

export const Tab = ({ children, title, isActive, ...props }) => {
  return (
    <TabWrapper {...props}>
      <TabTitle isActive={isActive}>{title}</TabTitle>

      <TabContent>{isActive && children}</TabContent>
    </TabWrapper>
  );
};

Tab.propTypes = {};
