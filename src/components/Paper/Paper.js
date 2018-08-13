import React from 'react';
import styled from 'styled-components';

export const PaperWrapper = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14);
  padding: ${props => (props.padding ? props.padding : '1rem')};
`;

const Paper = props => {
  const { children } = props;
  return <PaperWrapper {...props}>{children}</PaperWrapper>;
};

Paper.propTypes = {};

export default Paper;
