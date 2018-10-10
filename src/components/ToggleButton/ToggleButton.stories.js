import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import ToggleButton from '.';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

storiesOf('ToggleButton', module)
  .add('Normal', () => (
    <Container>
      <ToggleButton />
    </Container>
  ))
  .add('Controlled', () => (
    <Container>
      <ToggleButton isActive={true} />
    </Container>
  ))
  .add('Is Disabled', () => (
    <Container>
      <ToggleButton isEnabled={false} disabled />
    </Container>
  ));
