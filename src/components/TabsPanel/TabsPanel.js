import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ListItems = styled.Li`
  display: inline-block;
  margin: 0 40px 0 0;
`;

const LinkItem = styled.a`
  padding: 20px 40px;
  display: inline-block;
  text-decoration: none;
  :hover,
  :active,
  :focus {
    cursor: pointer;
    text-decoration: none;
  }
`;

const BoxVisibility = styled.div`
  display: ${props => (props.active ? "block" : "none")};
`;

class Tabs extends Component {
  state = {
    activeIndex: 0
  };

  handleOnClick(key, event) {
    event.preventDefault();

    this.setState({
      activeIndex: key
    });
  }

  renderNavItem(key) {
    let tab = this.props.children[key];

    return (
      <ListItems
        key={key}
        className={this.state.activeIndex == key ? "active" : ""}
      >
        <LinkItem href="#" onClick={this.handleOnClick.bind(this, key)}>
          {tab.props.title}
        </LinkItem>
      </ListItems>
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
        <div className="tabs-content">{tabs}</div>
      </div>
    );
  }
}

class Tab extends Component {
  render() {
    return <BoxVisibility>{this.props.children}</BoxVisibility>;
  }
}

Tab.defaultProps = {
  active: false
};
