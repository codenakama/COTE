import React from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import Icon from "../atoms/Icon/Icon";
import Button from "../atoms/Button/Button";
import { Title } from "../atoms/Typography";
import { colors as defaultColors, colors } from "../../styles/defaults";

const StyledDropZone = styled(Dropzone)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 224px;
  border: dashed 2px ${defaultColors.darkGrey};
  border-radius: 4px;
  padding: 1.5em;
  width: 232px;
  @media screen and (max-width: 640px) {
    border: none;
    height: auto;
    width: fit-content;
  }
`;

const ContentWrapper = styled.div`
  text-align: center;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const Uploader = ({ icon, theme, buttonText, title, ...props }) => {
  return (
    <StyledDropZone
      {...props}
      activeStyle={{
        border: `dashed 2px ${
          theme ? theme.colorPrimary : defaultColors.success
        }`
      }}
      rejectStyle={{
        border: `dashed 2px ${theme ? theme.colorDanger : defaultColors.danger}`
      }}
    >
      <ContentWrapper>
        <Icon name={icon} primary />
        <Title bold>{title}</Title>
        <p>or</p>
      </ContentWrapper>
      <Button primary solid>
        {buttonText}
      </Button>
    </StyledDropZone>
  );
};

Uploader.propTypes = {};

Uploader.defaultProps = {
  icon: "add_circle_outline",
  buttonText: "Choose files",
  title: "Drag and drop files here"
};

export default Uploader;
