import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Label from "../atoms/Label/Label";
import Caption from "../atoms/Caption/Caption";

const Input = styled.input`
  &::placeholder {
    color: lightgrey;
  }

  color: black;
`;

const TextInput = ({ labelText, error, ...props }) => {
  const a = 1;

  return (
    <div>
      <Label required={error} text={labelText} />
      <Input type="text" {...props} />
      <Caption required={error} />
    </div>
  );
};

TextInput.propTypes = {};

export default TextInput;
