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
  z-index: 0;
  right: 8px;
  top: 25%;
  color: ${defaultColors.black};
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
  min-width: 66px;
  width: ${props => (props.full ? "100%" : "232px")};
  height: 40px;
  border: ${props => {
    if (props.error && props.theme)
      return `1px solid ${props.theme.colorDanger}`;
    if (props.error) return `1px solid ${defaultColors.danger}`;

    return `1px solid ${defaultColors.black}`;
  }};
  border-radius: 4px;
  padding: 9px 16px;
`;

const OptionsWrapper = styled(Paper)`
  position: absolute;
  top: 48px;
  width: 100%;
  left: 0;
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
    const { options, title, error, full, label } = this.props;
    return (
      <OutsideAlerter
        handleClickOutsideElement={this.handleClickOutsideDropdown}
      >
        {label && <Label required={error} text={label} />}

        <Wrapper
          onClick={this.handleClick}
          error={error}
          full={full}
          suppressContentEditableWarning={true}
          contentEditable
          {...this.props}
        >
          {selectedOption ? selectedOption.title : title}
          {!isOpen && (
            <ArrowIcon name="keyboard_arrow_down" onClick={this.handleClick} />
          )}
          {isOpen ? (
            <div>
              <ResultsList
                handleResultSelected={this.handleOptionChange}
                results={options}
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
  label: PropTypes.string
};

Dropdown.defaultProps = {
  title: "Select an option",
  options: [{ title: "Option 1", value: 1 }, { title: "Option 2", value: 2 }],
  handleValueChange: value => console.log(value),
  full: false,
  label: ""
};

export default Dropdown;
