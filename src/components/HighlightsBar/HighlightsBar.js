import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "../atoms/Icon/Icon";
import { colors as defaultColors } from "../../styles/defaults";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1em;
  height: 64px;
  background-color: ${props =>
    props.theme ? props.theme.colorPrimary : defaultColors.primary};
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14);
`;

const Item = styled.div`
  display: flex;
  width: ${props => props.width}%;
  align-items: center;
  @media screen and (max-width: 32em) {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    & i {
      margin-right: 0;
      margin-bottom: 0.8rem;
    }
  }
`;

const StyledIcon = styled(Icon)`
  margin-right: 1em;
`;

const Name = styled.span`
  color: #fff;
  font-weight: bold;
`;

class HighlightsBar extends Component {
  render() {
    const { items } = this.props;
    return (
      <Wrapper>
        {items.map((item, i) => (
          <Item width={100 / items.length} key={i}>
            <StyledIcon name={item.icon} size={2} reverse />
            <Name style={{ color: "#fff" }}>{item.name}</Name>
          </Item>
        ))}
      </Wrapper>
    );
  }
}

HighlightsBar.propTypes = {
  items: PropTypes.array
};

HighlightsBar.defaultProps = {
  items: [
    { icon: "circle-o", name: "USP 1" },
    { icon: "circle-o", name: "USP 2" },
    { icon: "circle-o", name: "USP 3" },
    { icon: "circle-o", name: "USP 4" }
  ]
};

export default HighlightsBar;
