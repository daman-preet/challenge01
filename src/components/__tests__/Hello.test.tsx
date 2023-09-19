import React from 'react';
import * as renderer from 'react-test-renderer';

import Hello from '../Hello';

it('renders correctly with defaults', () => {
  const hello = renderer
    .create(<Hello name="World" enthusiasmLevel={1} />)
    .toJSON();
  expect(hello).toMatchSnapshot();
});
