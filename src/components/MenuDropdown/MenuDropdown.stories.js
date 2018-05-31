import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuDropdown from './MenuDropdown';

storiesOf('MenuDropdown', module).add('Normal', () => (
  <MenuDropdown
    firstName="Jamie"
    lastName="Howard"
    legalName="Potatoe Farm"
    locatorId="F415T98"
  />
));

storiesOf('MenuDropdown', module).add('Small', () => (
  <MenuDropdown
    firstName="Jamie"
    lastName="Howard"
    legalName="Potatoe Farm"
    locatorId="F415T98"
    small="true"
  />
));
