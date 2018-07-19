import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors as defaultColors } from "../../styles/defaults";
import Icon from "../atoms/Icon/Icon";
import Paper from "../Paper/Paper";
import OutsideAlerter from "../OutsideAlerter/OutsideAlerter";
import { Caption } from "../atoms/Typography";
import { Label } from "../atoms/Typography";
import ResultsList from "../ResultsList/ResultsList";

const ArrowIcon = styled(Icon)`
  position: absolute;
  z-index: 1;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: ${defaultColors.black};
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
  min-width: 66px;
  width: ${props => (props.full ? "100%" : "232px")};
  border: ${props => {
    if (props.error && props.theme)
      return `1px solid ${props.theme.colorDanger}`;
    if (props.error) return `1px solid ${defaultColors.danger}`;

    return `1px solid ${defaultColors.black}`;
  }};
  border-radius: 4px;
  padding: 9px 16px;
  cursor: pointer;
`;

const OptionsWrapper = styled(Paper)`
  position: absolute;
  top: 40px;
  width: 102%;
  left: -2px;
  padding: 0;
  min-height auto;
  z-index: 10;
`;

const OptionWrapper = styled.div`
  cursor: pointer;
  &:hover {
    background-color: ${defaultColors.primary};
  }
`;

const Option = styled.span`
  padding: 1em;
  font-weight: bold;
  display: inline-block;
  width: 100%;
  &:hover {
    color: #fff;
  }
`;

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedOption: null
    };
  }

  handleOptionChange = option => {
    this.setState(
      { selectedOption: option },
      this.props.handleValueChange(option.value)
    );
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClickOutsideDropdown = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen, selectedOption } = this.state;
    const {
      options,
      title,
      error,
      full,
      label,
      lastOption,
      id,
      theme
    } = this.props;
    return (
      <OutsideAlerter
        handleClickOutsideElement={this.handleClickOutsideDropdown}
      >
        {label && <Label required={error} text={label} />}

        <Wrapper
          onClick={this.handleClick}
          error={error}
          full={full}
          id={id}
          {...this.props}
        >
          {selectedOption ? (
            <span>{selectedOption.title}</span>
          ) : (
            <span>{title}</span>
          )}
          {!isOpen && (
            <ArrowIcon name="keyboard_arrow_down" onClick={this.handleClick} />
          )}
          {isOpen ? (
            <div>
              <ResultsList
                handleResultSelected={this.handleOptionChange}
                results={options}
                lastItem={lastOption}
                theme={theme}
              />
              <ArrowIcon name="keyboard_arrow_up" onClick={this.handleClick} />
            </div>
          ) : null}
        </Wrapper>
        {error && <Caption required text={error} />}
      </OutsideAlerter>
    );
  }
}

Dropdown.propTypes = {
  /** Title of select box */
  title: PropTypes.string.isRequired,
  /** Possible options and their values */
  options: PropTypes.arrayOf(PropTypes.object),
  /** Callback to retrieve value of option selected */
  handleValueChange: PropTypes.func,
  /** If true dropdown takes full width of parent */
  full: PropTypes.bool,
  /** Text label */
  label: PropTypes.string,
  /** An item added at the end of the results list - can be used tor "can't find my option" scenarios */
  lastOption: PropTypes.shape({ title: PropTypes.string, value: PropTypes.any })
};

Dropdown.defaultProps = {
  title: "Select an option",
  options: [{ title: "Option 1", value: 1 }, { title: "Option 2", value: 2 }],
  handleValueChange: value => console.log(value),
  full: false,
  label: "",
  lastOption: null
};

export default Dropdown;
