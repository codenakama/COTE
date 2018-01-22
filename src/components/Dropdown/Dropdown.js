import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors as defaultColors, colors } from "../../styles/defaults";
import Icon from "../atoms/Icon/Icon";
import Paper from "../Paper/Paper";
import OutsideAlerter from "../OutsideAlerter/OutsideAlerter";
import { Caption } from "../atoms/Typography";

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
  width: 232px;
  height: 40px;
  border: ${props => {
    if (props.error && props.theme)
      return `1px solid ${props.theme.colorDanger}`;
    if (props.error) return `1px solid ${defaultColors.danger}`;

    return `1px solid ${defaultColors.black}`;
  }};
  border-radius: 4px;
  padding: 1em;
`;

const OptionsWrapper = styled(Paper)`
  position: absolute;
  top: 48px;
  width: 100%;
  left: 0;
  padding: 0;
  min-height auto;
`;

const OptionWrapper = styled.div`
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary};
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
    this.setState({ selectedOption: option });
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClickOutsideDropdown = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen, selectedOption } = this.state;
    const { options, title, error } = this.props;
    return (
      <OutsideAlerter
        handleClickOutsideElement={this.handleClickOutsideDropdown}
      >
        <Wrapper onClick={this.handleClick} error={error}>
          {selectedOption ? selectedOption.title : title}
          {!isOpen && (
            <ArrowIcon name="keyboard_arrow_down" onClick={this.handleClick} />
          )}
          {isOpen ? (
            <div>
              <OptionsWrapper>
                {options.map((op, i) => {
                  return (
                    <OptionWrapper key={`o-${i}`}>
                      <Option
                        value={op.value}
                        onClick={() => this.handleOptionChange(op)}
                      >
                        {op.title}
                      </Option>
                    </OptionWrapper>
                  );
                })}
              </OptionsWrapper>

              <ArrowIcon name="keyboard_arrow_up" onClick={this.handleClick} />
            </div>
          ) : null}
        </Wrapper>
        {error && <Caption error text={error} />}
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
  handleValueChange: PropTypes.func
};

Dropdown.defaultProps = {
  title: "Select an option",
  options: [{ title: "Option 1", value: 1 }, { title: "Option 2", value: 2 }],
  handleValueChange: value => console.log(value)
};

export default Dropdown;
