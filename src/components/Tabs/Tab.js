import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/defaults';
import { Title } from '../atoms/Typography';

const TabWrapper = styled.div`
  display: inline-block;
  flex: 1;
`;

const TabTitle = Title.withComponent('a').extend`
cursor: pointer;
color: ${props => (props.isActive ? colors.black : colors.darkGrey)};

font-weight: 700;
padding: 8px;
display: inline-block;
/* margin-bottom: 1rem; */
width: 100%;
text-align: center;
`;

const Tab = ({ children, title, isActive, contentHeight, ...props }) => {
  return (
    <TabWrapper {...props}>
      <TabTitle isActive={isActive}>{title}</TabTitle>
    </TabWrapper>
  );
};

Tab.propTypes = {};

Tab.defaultProps = {};

export default Tab;
