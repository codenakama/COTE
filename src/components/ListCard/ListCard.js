import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors as defaultColors } from "../../styles/defaults";
import { Title } from '../atoms/Typography';

const Wrapper = styled.div`
  width: ${props => (props.full ? "100%" : "232px")};
  height: 48px;
  border: ${props => (props.border ? `1px solid ${defaultColors.black}` : '0')};
  border-bottom: ${props => (props.underline ? `1px solid #eeeeee` : (props.border ? '1px solid ${defaultColors.black}' : '0'))};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;
  justify-content: space-between;
  text-align: center;
`;

const ListCard = ({ children, title, ...props }) => {
    return (
        <Wrapper {...props}>
            <Title bold>{title}</Title>
            {children}
        </Wrapper>
    );
};

export default ListCard;