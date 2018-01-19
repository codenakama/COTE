import styled from "styled-components";
import { colors as defaultColors, fontWeights } from "../../../styles/defaults";

const Heading = styled.h1`
  color: ${props => {
    if (props.inverse) return "#fff";

    if (props.highlight && props.theme) return props.theme.colorPrimary;

    if (props.theme) return props.theme.colorBlack;

    return defaultColors.black;
  }};
  font-size: 36px;
  font-weight: ${fontWeights.bold};
`;

export const Heading1 = Heading;
Heading1.displayName = "Heading1";

export const Heading2 = Heading.withComponent("h2").extend`
  font-size: 30px;
`;
Heading2.displayName = "Heading2";

export const Heading3 = Heading.withComponent("h3").extend`
  font-size: 22px;
`;
Heading3.displayName = "Heading3";

export const Subheading = Heading.withComponent("h4").extend`
  font-size: 18px;
`;
Heading3.displayName = "Subheading";

export const Title = Heading.withComponent("h5").extend`
  font-size: 16px;
  font-weight:${props => (props.light ? fontWeights.light : fontWeights.normal)}
`;
Title.displayName = "Title";

export const Subtitle = Heading.withComponent("h6").extend`
  font-size: 15px;
  font-weight: ${fontWeights.light};
`;
Subtitle.displayName = "Subtitle";

export default Heading;
