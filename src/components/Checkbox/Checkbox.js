import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Label } from "../atoms/Typography";
import { colors as defaultColors } from "../../styles/defaults";

const Wrapper = styled.div`
  display: block;
  position: relative;
  height: 24px;
  & input[type="checkbox"] {
    display: none;
  }

  & input[type="checkbox"]:checked + span > i {
    opacity: 1;
  }
`;

const Box = styled.span`
  color: ${props => {
    if (props.primary) return "#fff";
    return `1px solid ${defaultColors.black}`;
  }};
  position: relative;
  display: inline-block;
  border: ${props => {
    if (props.primary) return null;
    return `1px solid ${defaultColors.darkGrey}`;
  }};
  border-radius: 0.25em;
  width: 24px;
  height: 24px;
  float: left;
  margin-right: 0.5em;
  background-color: ${props => {
    if (props.theme && props.primary) return props.theme.colorPrimary;
    if (props.primary) return defaultColors.primary;
    return "#fff";
  }};
  transition: background-color 0.3s ease-in;
`;

const CheckMark = styled.i`
  opacity: 0;
  position: absolute;
  font-size: 22px;
  line-height: 0;
  top: 50%;
  left: 0;
  transition: background-color 0.3s ease-in;
`;

const HiddenInput = styled.input`
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
`;

const WrappingLabel = styled.label`
  min-height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }

  handleValueChange = val => {
    this.setState({ checked: !val }, this.props.handleClicked(!val));
  };

  render() {
    const { label, name, handleClicked, primary, id } = this.props;
    const { checked } = this.state;
    return (
      <Wrapper {...this.props} id={id}>
        <WrappingLabel>
          <HiddenInput
            name={name}
            type="checkbox"
            onChange={e => {
              this.handleValueChange(checked);
            }}
            value={checked}
            {...this.props}
          />
          <Box primary={primary}>
            <CheckMark className="material-icons">check</CheckMark>
          </Box>
          <label>{label}</label>
        </WrappingLabel>
      </Wrapper>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string,
  handleClicked: PropTypes.func,
  primary: PropTypes.bool
};
Checkbox.defaultProps = {
  label: "",
  handleClicked: val => console.log(val),
  primary: false
};

export default Checkbox;
