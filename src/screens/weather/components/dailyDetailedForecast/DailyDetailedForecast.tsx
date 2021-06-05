import React, { useContext } from 'react';
import { View } from 'react-native';

import HourWeather from '../atomic/hourWeather';
import { styles } from './dailyDetailedForecast.styles';
import { timestampToHour, timestampToDate, getWeatherIconName } from 'src/helpers';
import { useSelector } from 'react-redux';
import { weatherSelector, weatherStatsSelector } from 'src/store/weather/selectors';

type Props = {
  date: string;
};

const DailyForecast: React.FC<Props> = ({ date }) => {
  const weatherStats = useSelector(weatherStatsSelector);
  const weather = useSelector(weatherSelector);

  const hourlyWeather =
    date === 'today'
      ? weatherStats.hourly.slice(0, 5)
      : weather.list
          .filter((el: { dt: number }) => {
            return timestampToDate(el.dt) === date;
          })
          .slice(0, 5);

  const getTemp = (el: { dt: number; temp: number; main: { temp: number }; weather: [{ description: string }] }) => {
    return date === 'today' ? el.temp.toFixed(1) : el.main.temp.toFixed(1);
  };

  return (
    <View style={styles.container}>
      {hourlyWeather.map(
        (el: { dt: number; temp: number; main: { temp: number }; weather: [{ description: string }] }, i: number) => {
          return (
            <HourWeather
              key={el.dt}
              hour={timestampToHour(el.dt)}
              name={getWeatherIconName(el.weather[0].description)}
              temperature={getTemp(el)}
            />
          );
        },
      )}
    </View>
  );
};

export default DailyForecast;
