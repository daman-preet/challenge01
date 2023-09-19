import React from 'react';
import * as renderer from 'react-test-renderer';

import Button from '../Button';

it('renders correctly with defaults', () => {
  const button = renderer.create(<Button label={'Sign In'} />).toJSON();
  expect(button).toMatchSnapshot();
});
