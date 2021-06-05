import React from 'react';
import { render } from '@testing-library/react-native';
import HourWeather from './HourWeather';

const hour = '12:00';
const name = 'night-alt-cloudy';
const temperature = '18';

describe('HourWeather ', () => {
  test('should render HourWeather', () => {
    const { toJSON } = render(<HourWeather hour={hour} name={name} temperature={temperature} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
