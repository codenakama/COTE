import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Heading = styled.h1`
  color: ${props =>
    props.highlight ? props.theme.colorPrimary : props.theme.colorDarkBlue};
  font-size: 30px;
  font-weight: bold;
`;

export const H1 = Heading;
export const H2 = Heading.withComponent("h2").extend`
  font-size: 22px;
`;
export const H3 = Heading.withComponent("h3");
export const H4 = Heading.withComponent("h4");
export const H5 = Heading.withComponent("h5");

// export default Heading;
