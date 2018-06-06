import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Item = styled.li`
  display: inline-block;
  margin: 0 40px 0 0;
`;

const ItemLink = styled.a`
  text-decoration: none;
  padding-bottom: 10px;
  color: #a4aab3;
  :hover {
    color: #061f33;
    cursor: pointer;
    border-bottom: 1px solid #27b161;
    font-weight: bold;
  }
  border-bottom: ${props => (props.isActive ? "1px solid  #27b161" : null)};
  font-weight: ${props => (props.isActive ? "bold" : "normal")};
  color: ${props => (props.isActive ? "#061f33" : "#a4aab3")};
`;

const TabsContentBox = styled.div`
  display: ${props => (props.isActive ? "block" : "none")};
  margin-top: 25px;
`;

export class Tabs extends Component {
  state = {
    activeIndex: 0
  };

  handleOnClick(key) {
    this.setState({
      activeIndex: key
    });
  }

  renderNavItem(key) {
    let tab = this.props.children[key];

    return (
      <Item key={key}>
        <ItemLink
          isActive={this.state.activeIndex === key}
          onClick={e => this.handleOnClick(key)}
        >
          {tab.props.title}
        </ItemLink>
      </Item>
    );
  }
  render() {
    let index = 0;
    let active = this.state.activeIndex;

    let tabs = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        active: child.props.active === true ? true : active == index++
      });
    });

    return (
      <div>
        <ul>
          {Object.keys(this.props.children).map(this.renderNavItem.bind(this))}
        </ul>
        <div>{tabs}</div>
      </div>
    );
  }
}

export class Tab extends Component {
  render() {
    return (
      <TabsContentBox isActive={this.props.active}>
        {this.props.children}
      </TabsContentBox>
    );
  }
}

Tab.propTypes = {
  active: PropTypes.bool
};

Tab.defaultProps = {
  active: false
};
