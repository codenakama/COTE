import styled from "styled-components";
import {
  colors as defaultColors,
  fontWeights,
  colors
} from "../../../styles/defaults";

export const Small = styled.span`
  display: inline-block;
  font-size: 10px;
  font-weight: ${fontWeights.light};
  color: ${props => {
    if (props.reverse) return "#fff";

    if (props.theme) return props.theme.colorBlack;

    return colors.black;
  }};
`;
