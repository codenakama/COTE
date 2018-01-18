import styled from "styled-components";
import { colors as defaultColors, fontWeights } from "../../../styles/defaults";

// Create a Title component that'll render an <h1> tag with some styles
const Heading = styled.h1`
  color: ${props => {
    if (props.inverse) return "#fff";

    if (props.highlight && props.theme.colorPrimary)
      return props.theme.colorPrimary;

    if (props.theme.colorDarkBlue) return props.theme.colorDarkBlue;

    return defaultColors.colorDarkBlue;
  }};
  font-size: 36px;
  font-weight: ${fontWeights.bold};
`;

export const Heading1 = Heading;
export const Heading2 = Heading.withComponent("h2").extend`
  font-size: 30px;
`;
export const Title = Heading.withComponent("h3").extend`
  font-size: 16px;
`;
export const Subtitle = Heading.withComponent("h4").extend`
  font-size: 16px;
  font-weight: ${fontWeights.light};
`;

export default Heading;
