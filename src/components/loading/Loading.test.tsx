import React from 'react';
import { render } from '@testing-library/react-native';
import Loading from './Loading';

test('Loading snapshot', () => {
  const { toJSON } = render(<Loading />);
  expect(toJSON()).toMatchSnapshot();
});
