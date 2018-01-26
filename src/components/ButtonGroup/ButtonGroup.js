import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../atoms/Button/Button";
import { Label } from "../atoms/Typography";

import { colors as defaultColors } from "../../styles/defaults";

const StyledButton = styled(Button)`
  width: ${props => `${props.buttonWidth}%`};
  background-color: ${props => {
    if (props.solid && props.theme && props.primary)
      return props.theme.colorPrimary;

    if (props.solid) return defaultColors.black;

    return "transparent";
  }};
  &:hover {
    background-color: ${props => {
      if (props.solid && props.theme && props.primary)
        return props.theme.colorPrimary;

      if (props.solid) return defaultColors.black;

      return "transparent";
    }};
  }

  @media (max-width: 640px) {
    width: 50%;
  }
`;

const ButtonGroupWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  & button:nth-child(2) {
    border-right: none;
    border-left: none;
  }
  & button:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 4px;
  }
  button {
    border-radius: 0px;
  }
  & button:last-child {
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 0;
  }

  @media (max-width: 640px) {
    & button:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }

    & button:nth-child(2) {
      border-top-left-radius: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }

    & button:nth-child(3) {
      border-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 4px;
    }

    & button:nth-child(4) {
      border-top: 0;
      border-left: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 0;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  render() {
    const {
      options,
      handleOptionSelected,
      onBlur,
      label,
      error,
      primary
    } = this.props;
    const { selectedIndex } = this.state;

    return (
      <Wrapper>
        {label && <Label required={error} text={label} />}
        <ButtonGroupWrapper>
          {options.map((option, i) => (
            <StyledButton
              key={i}
              primary={primary}
              buttonWidth={100 / options.length}
              solid={selectedIndex === i}
              onClick={e => {
                e.preventDefault();
                this.setState({ selectedIndex: i });
                handleOptionSelected(options[i].value);
              }}
            >
              {option.title}
            </StyledButton>
          ))}
        </ButtonGroupWrapper>
      </Wrapper>
    );
  }
}

ButtonGroup.propTypes = {
  /** Use primary theme color */
  primary: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.oneOf([PropTypes.string, PropTypes.number])
    })
  ),
  handleOptionSelected: PropTypes.func,
  selectedIndex: PropTypes.number
};

ButtonGroup.defaultProps = {
  label: "",
  options: [
    { title: "LLP", value: "LLP" },
    { title: "Limited", value: "Limited" },
    { title: "Partnership", value: "partnership" },
    { title: "Sole Trader", value: "Sole Trader" }
  ],
  handleOptionSelected: i => console.log(i),
  selectedIndex: 0
};

export default ButtonGroup;
