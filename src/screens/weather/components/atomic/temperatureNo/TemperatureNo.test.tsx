import React from 'react';
import { render } from '@testing-library/react-native';
import TemperatureNo from './TemperatureNo';

const temp = 19;

describe('TemperatureNo ', () => {
  test('should render TemperatureNo', () => {
    const { toJSON } = render(<TemperatureNo temp={temp} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
