import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/defaults";
import { Title } from "../atoms/Typography";

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
width: 100%;
text-align: center;
`;

const TabContent = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
`;

const Tab = ({
  children,
  title,
  isActive,
  contentWidth,
  contentHeight,
  ...props
}) => {
  return (
    <TabWrapper {...props}>
      <TabTitle isActive={isActive}>{title}</TabTitle>

      <TabContent contentWidth={contentWidth}>
        {isActive && children}
      </TabContent>
    </TabWrapper>
  );
};

Tab.propTypes = {
  /**
   * The width of content container,in percentage
   */
  contentWidth: PropTypes.number.isRequired
};

Tab.defaultProps = {};

export default Tab;
