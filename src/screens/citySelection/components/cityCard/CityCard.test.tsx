import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CityCard from './CityCard';
import { TGroupWeatherItem } from 'src/store/citySelection/reducer';

export const itemMock: TGroupWeatherItem = {
  coord: {
    lon: 1525545,
    lat: 1024546,
  },
  sys: {
    sunrise: 1525545,
    sunset: 1024546,
  },
  weather: [
    {
      description: 'Sunny',
    },
  ],
  main: {
    temp: 20.7,
    feels_like: 23,
    temp_min: 15,
    temp_max: 21,
  },
  visibility: 95,
  wind: {
    speed: 10,
    deg: 10,
  },
  clouds: {
    all: 20,
  },
  dt: 1024546,
  id: 1024546,
  name: 'City',
};

test('CityCard', () => {
  const onPressMock = jest.fn();

  const { toJSON, getByTestId } = render(<CityCard item={itemMock} onPress={onPressMock} />);

  fireEvent.press(getByTestId('CityCard.TouchableOpacity'));

  expect(toJSON()).toMatchSnapshot();
  expect(onPressMock).toHaveBeenCalled();
});
