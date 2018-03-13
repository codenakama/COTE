import styled from "styled-components";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { colors } from "../../../styles/defaults";

const StyledIcon = styled.i`
  font-size: 24px;
  color: ${props => {
    if (props.reverse || props.solid) return "#fff";

    if (props.primary && props.theme) return props.theme.colorPrimary;

    if (props.error && props.theme) return props.theme.colorDanger;

    return colors.darkGrey;
  }};
  padding: ${props => (props.circle ? "8px" : null)};
  border: ${props => {
    if (props.primary && props.theme && props.circle && !props.solid)
      return `1px solid ${props.theme.colorPrimary}`;

    if (props.primary && props.circle && !props.solid)
      return `1px solid ${colors.primary}`;

    if (props.circle && !props.solid) return `1px solid ${colors.darkGrey}`;

    return null;
  }};
  border-radius: ${props => (props.circle ? "50%" : null)};
  background-color: ${props => {
    if (props.circle && props.solid && props.theme)
      return props.theme.colorPrimary;
    if (props.circle && props.solid) return colors.primary;
    return null;
  }};
`;

const Icon = ({ name, primary, error, circle, solid, className, ...props }) => {
  return (
    <StyledIcon
      className={`material-icons ${className}`}
      primary={primary}
      circle={circle}
      solid={solid}
      error={error}
      {...props}
    >
      {name}
    </StyledIcon>
  );
};

Icon.propTypes = {
  /** Render icon with primary color if defined in the theme */
  primary: PropTypes.bool,
  /** Material design name of the icon, e.g. face */
  name: PropTypes.string.isRequired,
  /** Render icon in a circle shape */
  circle: PropTypes.bool
};

Icon.defaultProps = {
  primary: false,
  name: "face",
  circle: false
};

export default Icon;
