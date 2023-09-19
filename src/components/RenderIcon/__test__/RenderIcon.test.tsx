import React from 'react';
import * as renderer from 'react-test-renderer';

import RenderIcon from '../RenderIcon';

it('renders correctly with defaults', () => {
  const icon = renderer.create(<RenderIcon name="MdError" />).toJSON();
  expect(icon).toMatchSnapshot();
});
