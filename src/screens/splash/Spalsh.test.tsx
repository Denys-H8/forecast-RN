import React from 'react';
import { render } from '@testing-library/react-native';
import Splash from './Splash';

describe('Splash ', () => {
  test('should render Splash', () => {
    const { toJSON } = render(<Splash />);

    expect(toJSON()).toMatchSnapshot();
  });
});
