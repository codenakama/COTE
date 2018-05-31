import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { colors as defaultColors } from "../../styles/defaults";
import OutsideAlerter from "../OutsideAlerter/OutsideAlerter";
import Badge from "../atoms/Badge/Badge";
import Icon from "../atoms/Icon/Icon";

const ArrowIcon = styled(Icon)`
  z-index: 2;
  color: ${props => {
    if (props.reverse) return "#fff";
    return props.theme ? props.theme.colorPrimary : defaultColors.primary;
  }};
  cursor: pointer;
`;

const ArrowWrapper = styled.div`
  display: inline-block;
  position: relative;
  top: 2px;
`;

const DropdownWrapper = styled.div`
  display: initial;
  position: relative;
`;

const DropdownButton = styled.div`
  display: inline-block;
  position: relative;
  background-color: inherit;
  font-family: inherit;
`;

const FirstName = styled.p`
  position: relative;
  margin: 0 9px 0 10px;
  top: 50%;
  transform: translateY(-25%);
  display: inline-block;
`;

const BadgeWrapper = styled.div`
  display: inline-block;
`;

const MenuWrapper = styled.div`
  right: ${props => (props.right ? 0 : null)};
  display: ${props => (props.display ? "block" : "none")};
  margin-top: 5px;
  position: absolute;
  background-color: white;
  min-width: 178px;
  z-index: 2;
  border: solid 1px #e4e4e4;
  border-radius: 5px;
`;

const MenuBox = styled.div`
  padding: 16px 16px ${props => (props.last ? "16px" : "0")} 16px;
  display: block;
`;

const MenuEntry = styled.p`
  margin-bottom: 8px;
  :last-child {
    margin-bottom: 0;
  }
`;

const Link = styled.a`
  color: ${props => (props.reverse ? "#fff" : props.theme.colorPrimary)};
`;

const Separator = styled.hr`
  margin: 0;
`;

class MenuDropdown extends Component {
  state = {
    opened: false
  };

  handleClick = () => {
    var opened = this.state.opened;
    this.setState({
      opened: !opened
    });
  };

  handleClickOutside = () => {
    this.setState({ opened: false });
  };

  render() {
    const {
      firstName,
      lastName,
      legalName,
      locatorId,
      detailUrl,
      logOutClick,
      reverse,
      small
    } = this.props;

    const initial = firstName[0] + lastName[0];
    const badgeSize = small ? 32 : 48;

    return (
      <OutsideAlerter handleClickOutsideElement={this.handleClickOutside}>
        <DropdownWrapper {...this.props}>
          <DropdownButton onClick={this.handleClick}>
            <BadgeWrapper>
              <Badge
                content={initial || ""}
                size={badgeSize}
                background={reverse ? "#fff" : "#27b161"}
                color={reverse ? "#27b161" : "#fff"}
              />
            </BadgeWrapper>
            {!small && <FirstName>{firstName}</FirstName>}
            <ArrowWrapper>
              <ArrowIcon reverse={reverse} name="keyboard_arrow_down" />
            </ArrowWrapper>
          </DropdownButton>
          <MenuWrapper display={this.state.opened} right={small}>
            <MenuBox>
              <MenuEntry>
                <b>
                  {firstName} {lastName}
                </b>
              </MenuEntry>
              <MenuEntry>
                <b>{legalName}</b>
              </MenuEntry>
            </MenuBox>
            <MenuBox>
              <MenuEntry>Customer Reference: </MenuEntry>
              <MenuEntry>
                <b>{locatorId}</b>
              </MenuEntry>
            </MenuBox>
            <MenuBox last="true">
              <MenuEntry>
                <Link href={detailUrl}>View your details</Link>
              </MenuEntry>
            </MenuBox>
            <Separator />
            <MenuBox last="true">
              <MenuEntry onClick={logOutClick}>Log Out</MenuEntry>
            </MenuBox>
          </MenuWrapper>
        </DropdownWrapper>
      </OutsideAlerter>
    );
  }
}

MenuDropdown.PropTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  legalName: PropTypes.string.isRequired,
  locatorId: PropTypes.string.isRequired,
  detailUrl: PropTypes.string,
  logOutClick: PropTypes.func,
  small: PropTypes.bool
};

MenuDropdown.defaultProps = {
  detailUrl: "http://google.com",
  logOutClick: () => {
    console.log("Logout!");
  },
  small: false,
  firstName: "",
  lastName: ""
};

export default MenuDropdown;
