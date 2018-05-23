import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../styles/defaults";
import Paper from "../Paper/Paper";

const Wrapper = styled.div`
  width: ${props => `${props.width}px`};

  transition-duration: 235ms;
  position: fixed;

  ${props => {
    if (props.isOpen) {
      return `transform: translateX(0)`;
    }

    return `transform: translateX(-1000%)`;
  }};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  width: 100%;
`;

const ListItem = styled.li`
  color: ${props => (props.selected ? colors.primary : colors.darkGrey)};
  padding: 1rem;
  background-color: ${props => (props.selected ? colors.lightGrey : null)};
  border-left: ${props =>
    props.selected ? `4px solid ${colors.primary}` : null};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Logo = styled.img`
  width: 64px;
  margin-bottom: 4rem;
`;

class SideNav extends Component {
  state = {
    isOpen: false
  };

  togle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const {
      width,
      openingDirection,
      logoUrl,
      sideNavRef,
      className,
      navItems,
      isOpen
    } = this.props;

    return (
      <nav>
        <Wrapper
          width={width}
          // use props to control if isOpen is different from undefined
          isOpen={isOpen !== undefined ? isOpen : this.state.isOpen}
          className={className}
        >
          <Paper padding={"0px"}>
            <Content>
              <Logo src={logoUrl} />
              <List>
                {navItems.map((item, i) => (
                  <ListItem selected={item.isSelected}>
                    <a href={item.pathname}>{item.title}</a>
                  </ListItem>
                ))}
              </List>
            </Content>
          </Paper>
        </Wrapper>
      </nav>
    );
  }
}

SideNav.propTypes = {
  openingDirection: PropTypes.oneOf(["left-right", "right-left"]),
  width: PropTypes.number,
  logoUrl: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      isSelected: PropTypes.bool
    })
  )
};

SideNav.defaultProps = {
  width: 144,
  logoUrl: "http://via.placeholder.com/64x64",
  navItems: [
    {
      title: "Dashboard",
      pathname: "/dashboard",
      isSelected: true
    },
    {
      title: "Dashboard",
      pathname: "/dashboard",
      isSelected: false
    },
    {
      title: "Dashboard",
      pathname: "/dashboard",
      isSelected: false
    },
    {
      title: "Dashboard",
      pathname: "/dashboard",
      isSelected: false
    },
    {
      title: "Dashboard",
      pathname: "/dashboard",
      isSelected: false
    }
  ]
};

export default SideNav;
