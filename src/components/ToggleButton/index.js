import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import styled from "styled-components";
import { colors } from "../../styles/defaults";
import Paper from "../Paper/Paper";

const Wrapper = styled.div`
  border-radius: 50px;
  height: 1rem;
  z-index: 1;

  width: 2.4rem;
  position: relative;
  background: ${props => {
    if (props.isActive) {
      return props.theme ? props.theme.colorPrimary : colors.primary;
    }
    return props.theme ? props.theme.colorDanger : colors.danger;
  }};

  transition: background 150ms ease-in;
`;

const Circle = styled(Paper)`
  min-width: 0;
  min-height: 0;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding: 0;
  position: absolute;
  background: #fff;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  z-index: 2;

  left: ${props => (props.isActive ? "2.4rem" : 0)};
  transition: left 250ms ease;
`;

const HiddenInput = styled.input`
  z-index: 2;
  border: 0;
  background: transparent;
  visibility: hidden;
  width: 2.4rem;
  height: 1rem;
  display: inline-block;
`;
let state = false;

class ToggleButton extends PureComponent {
  state = {
    isActive: false
  };

  handleButtonClicked = () => {
    this.setState(
      { isActive: !this.state.isActive },
      this.props.onButtonClicked(!this.state.isActive)
    );
  };

  render() {
    return (
      <Wrapper
        isActive={
          this.props.isActive ? this.props.isActive : this.state.isActive
        }
        onClick={this.handleButtonClicked}
      >
        <Circle
          isActive={
            this.props.isActive ? this.props.isActive : this.state.isActive
          }
        />
        <HiddenInput type="checkbox" />
      </Wrapper>
    );
  }
}

ToggleButton.propTypes = {
  onButtonClicked: PropTypes.func
};

ToggleButton.defaultProps = {
  onButtonClicked: isActive => console.log(isActive),
  isActive: false
};

export default ToggleButton;
