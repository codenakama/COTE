import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { hexToRgbA } from '../../utils';

const background = props => {
  if (props.danger) {
    return hexToRgbA(props.theme.colorDanger, 0.1);
  }

  return hexToRgbA(props.theme.colorPrimary, 0.1);
};

const Wrapper = styled.div`
  padding: 16px;
  background: ${background};
`;

const HighlightStrip = ({ children, danger, ...props }) => {
  return <Wrapper danger={danger}>{children}</Wrapper>;
};

HighlightStrip.propTypes = {
  children: PropTypes.number.isRequired,
  /** Sets color to whatever has been defined as danger/error color in the theme */
  danger: PropTypes.bool
};

HighlightStrip.defaultProps = {
  danger: false
};

export default HighlightStrip;
