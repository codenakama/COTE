import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Paper from "../Paper/Paper";
import { Heading2, Title } from "../atoms/Typography";
import Icon from "../atoms/Icon/Icon";

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
`;

const MessageCard = props => {
  const { title, subtitle, isLoading, icon } = props;
  console.log(subtitle);
  return (
    <Paper>
      <Wrapper>
        <Heading2>{title}</Heading2>
      </Wrapper>
      <Wrapper>
        <Title>{subtitle}</Title>
      </Wrapper>
      <Wrapper>
        <Icon name={icon} primary />
      </Wrapper>
    </Paper>
  );
};

MessageCard.propTypes = {};

export default MessageCard;
