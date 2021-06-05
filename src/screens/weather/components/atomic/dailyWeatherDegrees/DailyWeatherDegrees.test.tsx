import React from 'react';
import { render } from '@testing-library/react-native';
import DailyWeatherDegrees from './DailyWeatherDegrees';

const min = 15;
const max = 27;

describe('DailyWeatherDegrees ', () => {
  test('should render DailyWeatherDegrees', () => {
    const { toJSON } = render(<DailyWeatherDegrees min={min} max={max} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
