import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MaskedInput from "react-text-mask";
import { Caption, Label } from "../atoms/Typography";
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

    return `solid 1px ${defaultColors.black}`;
  }};

  border-radius: 4px;
  padding: 9px 16px;
  width: ${props => (props.full ? "100%" : null)};
`;

const InputWrapper = styled.div`
  width: ${props => (props.full ? "100%" : null)};
`;

const TextInput = ({
  labelText,
  placeholder,
  mask,
  guide,
  full,
  error,
  required,
  info,
  className,
  name,
  onChange,
  ...props
}) => {
  return (
    <InputWrapper full={full}>
      {labelText && (
        <Label required={required} text={labelText} htmlFor={name} />
      )}
      <Input
        className={className}
        placeholder={placeholder}
        {...props}
        required={required}
        mask={mask ? mask : false}
        guide={guide}
        full={full}
        onChange={onChange}
      />
      {error && <Caption required={required} text={error} />}
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
  /** Regex pattern mask array to be applied to the input. E.g. Phone format, address, post code, sort code.*/
  mask: PropTypes.any,
  /** If text input should stretch to fill its parent container */
  full: PropTypes.bool,
  /** Show guides for user to know how many characters left */
  guide: PropTypes.bool,
  /** Label for input */
  labelText: PropTypes.string
};

TextInput.defaultProps = {
  placeholder: "Type something",
  error: "",
  info: "",
  full: false,
  guide: false,
  labelText: "",
  full: false,
  mask: false
};

TextInput.displayName = "TextInput";

export default TextInput;
