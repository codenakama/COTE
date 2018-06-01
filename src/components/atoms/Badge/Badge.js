import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledBadge = styled.div`
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  line-height: ${props => props.size + "px"};
  font-size: ${props => props.size / 2 + "px"};
  text-align: center;
  border-radius: ${props => props.size + "px"};
  background: ${props => props.background};
  color: ${props => props.color};
`;

const Badge = ({ content, ...props }) => {
  return <StyledBadge {...props}>{content}</StyledBadge>;
};

Badge.propTypes = {
  content: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string
};

Badge.defaultProps = {
  size: 48,
  color: "white",
  background: "#27b161"
};

export default Badge;
