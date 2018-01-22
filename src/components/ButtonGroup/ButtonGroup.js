import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../atoms/Button/Button";
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

  @media (max-width: 720px) {
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

  @media (max-width: 420px) {
    & button:first-child {
      border-top-left-radius: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 0;
    }
  }
`;

class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  render() {
    const { options, handleOptionSelected, onBlur } = this.props;
    const { selectedIndex } = this.state;

    return (
      <ButtonGroupWrapper>
        {options.map((option, i) => (
          <StyledButton
            key={i}
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
    );
  }
}

ButtonGroup.propTypes = {
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
