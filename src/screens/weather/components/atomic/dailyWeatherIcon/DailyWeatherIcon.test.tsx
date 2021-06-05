import React from 'react';
import { render } from '@testing-library/react-native';
import DailyWeatherIcon from './DailyWeatherIcon';

const min = 15;
const max = 27;

describe('DailyWeatherIcon ', () => {
  test('should render DailyWeatherIcon', () => {
    const { toJSON } = render(<DailyWeatherIcon />);

    expect(toJSON()).toMatchSnapshot();
  });
});
