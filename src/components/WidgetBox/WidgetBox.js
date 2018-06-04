import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../atoms/Typography';
import { colors as defaultColors } from '../../styles/defaults';

const Wrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
`;

const ContentWrapper = styled.div`
  padding: 24px 0;
`;

const TitleWrapper = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid #f3f3f3;
`;

const ContentBox = ({ children, title, className, id, ...props }) => {
  return (
    <Wrapper className={className} {...props} id={id}>
      <TitleWrapper>
        <Title bold>{title}</Title>
      </TitleWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
};

ContentBox.propTypes = {
  title: PropTypes.string,
  /** What to render inside the content area of the box */
  children: PropTypes.node
};

ContentBox.defaultProps = {
  title: 'Title',
  children: 'The content goes here'
};

export default ContentBox;
