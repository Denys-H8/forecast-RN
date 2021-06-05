import React from 'react';
import { render } from '@testing-library/react-native';
import StatusBar from './StatusBar';

test('StatusBar snapshot', () => {
  const { toJSON } = render(<StatusBar />);
  expect(toJSON()).toMatchSnapshot();
});
