import React from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import Icon from "../atoms/Icon/Icon";
import Button from "../atoms/Button/Button";
import { Title } from "../atoms/Typography";
import { colors as defaultColors } from "../../styles/defaults";

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
`;

const Uploader = ({ icon, ...props }) => {
  return (
    <StyledDropZone {...props}>
      <Icon name={icon} primary />
      <Title bold>Drag and drop files here</Title>
      <p>or</p>
      <Button primary solid>
        Choose files
      </Button>
    </StyledDropZone>
  );
};

Uploader.propTypes = {};

Uploader.defaultProps = { icon: "add_circle_outline" };

export default Uploader;
