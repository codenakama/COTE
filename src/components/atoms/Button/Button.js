import styled from "styled-components";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { colors } from "../../../styles/defaults";

const boxShadow = `box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);`;

export const StyledButton = styled.button`
  font-family: inherit;
  background-color: ${props => {
    if (props.danger && props.theme) return props.theme.colorDanger;

    if (props.danger) return colors.danger;

    if (props.theme && props.solid) return props.theme.colorPrimary;

    return "transparent";
  }};

  color: ${props => {
    if (props.solid) return "#fff";

    return colors.black;
  }};

  font-size: 1rem;
  padding: 0.68em 2em;
  width: ${props => {
    if (props.small) return "16px";

    if (props.large) return "448px";
    if (props.full) return "100%";
  }};
  opacity: ${props => {
    if (!props.solid) return "0.7";
  }};
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.25s ease-in;
  font-weight: normal;
  &:hover {
    background-color: ${props => {
      if (props.danger && props.theme && props.solid)
        return props.theme.colorDanger;

      if (props.danger && props.solid) return colors.danger;

      if (props.theme && props.solid) return props.theme.colorPrimaryEmphasis;

      if (props.solid) return colors.primaryEmphasis;
    }};

    opacity: ${props => {
      if (!props.solid) return "1";
    }};
  }

  border: ${props => (props.solid ? "none" : `1px solid ${colors.black}`)};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: inline-block;
  text-align: center;
  ${props => (props.shadow ? boxShadow : null)};
`;

const StyledLinkButton = styled.a``;

const Icon = styled.i`
  margin-left: 12px;
`;

class Button extends Component {
  render() {
    const { onClick, children, icon } = this.props;
    return (
      <StyledButton {...this.props}>
        {children}
        {icon && <Icon className={`fa fa-${icon}`} />}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  solid: PropTypes.bool,
  full: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool
};

Button.defaultProps = {};

export default Button;
