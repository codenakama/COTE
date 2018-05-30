import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './Badge';

storiesOf('Badge', module)
  .add('Large with two letters', () => <Badge content="JS" />)
  .add('Medium with two letters', () => <Badge content="JS" size="40" />)
  .add('Small with two letters', () => <Badge content="JS" size="32" />)
  .add('Large reversed color with two letters', () => (
    <Badge content="JS" color="#27b161" background="#eeeeee" />
  ))
  .add('Small reversed color with two letters', () => (
    <Badge content="JS" size="32" color="#27b161" background="#eeeeee" />
  ))
  .add('Large with numbers', () => <Badge content="422" />)
  .add('Medium with numbers', () => <Badge content="422" size="40" />)
  .add('Small with numbers', () => <Badge content="422" size="32" />);
