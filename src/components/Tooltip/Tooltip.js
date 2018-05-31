import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import Paper from "../Paper/Paper";
import { Caption } from "../atoms/Typography";

const StyledPaper = styled(Paper)`
  position: relative;
  width: 272px;
`;

const Wrapper = styled.div`
  width: 272px;

  top: ${props => (props.openDirection === "bottom" ? "38px" : null)};
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
  top: ${props => (props.openDirection === "bottom" ? "-14px" : null)};
  transform: ${props =>
    props.openDirection === "bottom" ? "scale(-1, -1)" : null};
`;

const Title = styled.p`
  font-size: 1em;
  margin-bottom: 1em;
`;

function getCoords(elem) {
  // crossbrowser version
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
}

class Tooltip extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    openDirection: "top"
  };

  componentDidMount() {
    // get parent element of tooltip (e.g. textinput)
    //because tooltip can be dynamically rendered
    const elementCoordinates = getCoords(this.tooltipRef.parentElement);

    if (elementCoordinates.top < 100) {
      this.setState({ openDirection: "bottom" });
    }
  }

  render() {
    const { title, description } = this.props;

    return (
      <Wrapper
        {...this.props}
        innerRef={el => (this.tooltipRef = el)}
        openDirection={this.state.openDirection}
      >
        <StyledPaper>
          <Title>{title}</Title>
          <Caption text={description} />
          <ArrowDown openDirection={this.state.openDirection} />
        </StyledPaper>
      </Wrapper>
    );
  }
}

Tooltip.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

Tooltip.defaultProps = {
  title: "Title of tooltip",
  description: "A short description should go here."
};

Tooltip.displayName = "Tooltip";

export default Tooltip;
