import React from 'react';
import styled from 'styled-components';

const TabWrapper = styled.div`
  width: 100%;
  flex: 0 0 auto;
  transition: all 250ms ease;
  transform: translateX(${props => `-${props.position}%`});
`;

const Tab = ({ children, title, isActive, contentHeight, ...props }) => {
  return <TabWrapper {...props}>{children}</TabWrapper>;
};

Tab.propTypes = {};

Tab.defaultProps = {};

export default Tab;
