import React from 'react';
import { render } from '@testing-library/react-native';
import DailyWeatherText from './DailyWeatherText';

const text = 'Some text';
const textLong = 'Ivano-Frankivsk';

describe('DailyWeatherText ', () => {
  test('should render DailyWeatherText', () => {
    const { toJSON } = render(<DailyWeatherText text={text} />);

    expect(toJSON()).toMatchSnapshot();
  });

  test('should render DailyWeatherText with long word', () => {
    const { toJSON } = render(<DailyWeatherText text={textLong} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
