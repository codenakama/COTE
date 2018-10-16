import React from 'react';
import renderer from 'react-test-renderer';
import Paper from './Paper';

test('It renders', () => {
  const component = renderer.create(<Paper />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
