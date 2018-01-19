import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MaskedInput from "react-text-mask";
import Label from "../atoms/Label/Label";
import Caption from "../atoms/Caption/Caption";
import { colors as defaultColors } from "../../styles/defaults";

const Input = styled(MaskedInput)`
  &::placeholder {
    color: lightgrey;
  }
  margin-bottom: ${props => (props.required ? "8px" : null)};
  color: ${defaultColors.colorDarkBlue};
  border: ${props => {
    if (props.required && props.theme.colorDanger)
      return `1px solid ${props.theme.colorDanger}`;

    if (props.required) return "solid 1px red";

    return `solid 1px ${defaultColors.colorDarkBlue}`;
  }};

  border-radius: 4px;
  padding: 9px 16px;
  width: ${props => (props.full ? "100%" : null)};
`;

const InputWrapper = styled.div`
  width: ${props => (props.full ? "10%%" : null)};
`;

const TextInput = ({ labelText, mask, guide, full, error, info, ...props }) => {
  return (
    <InputWrapper full={full}>
      {labelText && <Label required={error} text={labelText} />}
      <Input
        type="text"
        {...props}
        required={error}
        mask={mask}
        guide={guide}
      />
      {error && <Caption error={error} />}
      {info && <Caption style={{ marginTop: "8px" }} text={info} />}
    </InputWrapper>
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  /** Error message to show if input is not valid */
  error: PropTypes.string,
  /** Information related to this input field */
  info: PropTypes.string,
  /** Mask to be applied to the input. E.g. Phone format, address, post code, sort code */
  mask: PropTypes.array,
  /** If text input should stretch to fill its parent container */
  full: PropTypes.bool,
  /** Show guides for user to know how many characters left */
  guide: PropTypes.bool
};

TextInput.defaultProps = {
  placeholder: "Type something",
  error: "",
  info: "",
  mask: [],
  full: false,
  guide: false
};

TextInput.displayName = "TextInput";

export default TextInput;
