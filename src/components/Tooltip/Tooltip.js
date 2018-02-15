import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors as defaultColors } from "../../styles/defaults";
import Paper from "../Paper/Paper";
import {Label, Caption} from "../atoms/Typography";

const StyledPaper = styled(Paper)`
  position: relative;
  width: 272px;

`;

const Wrapper = styled.div`
  width: 272px;
  
`;

const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-top: 16px solid #fff;
  position: absolute;
  bottom: -14px;
  right: 14px;
  z-index: 10;
`;

const Title = styled.p`
  font-size: 1em;
  margin-bottom: 1em;
`

const Tooltip = ({ title, description, ...props }) => {
  return (
    <Wrapper {...props}>
      <StyledPaper>
      <Title>{title}</Title>
        <Caption text={description} />
        <ArrowDown />
      </StyledPaper>
    </Wrapper>
  );
};

Tooltip.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Tooltip.defaultProps = {
  title: "Title of tooltip",
  description: "A short description should go here.",
};

Tooltip.displayName = "Tooltip";

export default Tooltip;
