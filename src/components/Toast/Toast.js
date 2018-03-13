import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Paper from "../Paper/Paper";
import Icon from "../atoms/Icon/Icon";
import { Title } from "../atoms/Typography/Heading";
import { colors } from "../../styles/defaults";
import Button from "../atoms/Button/Button";

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

const StyledIcon = styled(Icon)`
  margin-right: 1em;
`;

const StyledTitle = styled(Title)`
  color: ${props => (props.error ? colors.danger : colors.primary)};
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Message = styled.div`
  margin-bottom: 1em;
`;

const Toast = ({
  icon,
  title,
  buttonText,
  error,
  message,
  onButtonClick,
  ...props
}) => {
  return (
    <Paper key={this}>
      <Header>
        <StyledIcon name={icon} error={error} primary={!error} />{" "}
        <StyledTitle error={error}>
          <b>Hello</b>
        </StyledTitle>
      </Header>
      <Message>{message}</Message>
      <Actions>
        <Button onClick={onButtonClick}>{buttonText}</Button>
      </Actions>
    </Paper>
  );
};

Toast.propTypes = {
  icon: PropTypes.string,
  buttonText: PropTypes.string,
  error: PropTypes.bool,
  onButtonClick: PropTypes.func
};

Toast.defaultProps = {
  icon: "circle_check",
  buttonText: "Dismiss",
  error: false,
  onButtonClick: () => alert("Button clicked")
};

export default Toast;
