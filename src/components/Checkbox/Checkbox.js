import React, { Component } from "react";
import PropTypes from "prop-types";
import styledComponents from "styled-components";
import { Label } from "../atoms/Typography";

const Wrapper = styledComponents.div`
    display: block;
    position:relative;
    height: 24px;
    & input[type="checkbox"]{
        display: none;
    }

    & input[type="checkbox"]:checked + span > i{
        opacity: 1;
    }
`;

const Box = styledComponents.span`
    position: relative;
    display: inline-block;
    border: 1px solid #a9a9a9;
    border-radius: .25em;
    width: 24px;
    height: 24px;
    float: left;
    margin-right: .5em;
`;

const CheckMark = styledComponents.i`
    opacity: 0;
    transition: all .3s ease-in;
    position: absolute;
    font-size: 22px;
    line-height: 0;
    top: 50%;
    left: 0;
`;

const HiddenInput = styledComponents.input`
    position: absolute;
    left: 0;
    width: 24px;
    height: 24px;
`;

const WrappingLabel = styledComponents.label`
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
    const { label, name, handleClicked } = this.props;
    const { checked } = this.state;
    return (
      <Wrapper>
        <WrappingLabel>
          <HiddenInput
            name={name}
            type="checkbox"
            onChange={() => this.handleValueChange(checked)}
            value={checked}
          />
          <Box>
            <CheckMark className="material-icons">check</CheckMark>
          </Box>
          <label>{label}</label>
        </WrappingLabel>
      </Wrapper>
    );
  }
}

Checkbox.propTypes = { label: PropTypes.string, handleClicked: PropTypes.func };
Checkbox.defaultProps = {
  label: "",
  handleClicked: val => console.log(val)
};

export default Checkbox;
