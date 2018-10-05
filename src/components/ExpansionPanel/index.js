import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../styles/defaults';
import Icon from '../atoms/Icon/Icon';
import { Title } from '../atoms/Typography';
import Paper from '../Paper/Paper';

const rotate = css`
  transform: rotate(180deg);
`;
const closed = css`
  max-height: 0;
`;

const Wrapper = styled(Paper)`
  padding: 0;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.lightGrey};
  ::after {
    border-bottom: 1px solid ${colors.lightGrey};
  }
  padding: 1rem;
`;

const ToggleIcon = styled(Icon)`
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  ${props => props.isOpen && rotate};
  cursor: pointer;
`;

const Content = styled.div`
  border-bottom: 1px solid ${colors.lightGrey};
  ::after {
    border-bottom: 1px solid ${colors.lightGrey};
  }

  height: auto;
  max-height: 600px;
  overflow: hidden;
  transition: max-height 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  ${props => !props.isOpen && closed};
`;

class ExpansionPanel extends PureComponent {
  state = {
    isOpen: false
  };

  toggleOpen = () =>
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { title, icon, children } = this.props;
    const { isOpen } = this.state;

    return (
      <Wrapper>
        <Header>
          <Title>{title}</Title>
          {icon && (
            <ToggleIcon isOpen={isOpen} name={icon} onClick={this.toggleOpen} />
          )}
        </Header>
        <Content isOpen={isOpen}>{children}</Content>
      </Wrapper>
    );
  }
}

ExpansionPanel.propTypes = {
  title: PropTypes.string,
  /** Icon name per material design icons */
  icon: PropTypes.string
};

ExpansionPanel.defaultProps = {
  title: 'Expansion Panel 1',
  icon: 'keyboard_arrow_down'
  //   iconOpen: 'keyboard_arrow_up'
};

export default ExpansionPanel;
