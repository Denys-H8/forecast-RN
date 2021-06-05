import React, { useContext } from 'react';
import { View } from 'react-native';

import TemperatureNo from '../atomic/temperatureNo';
import DailyWeatherIcon from '../atomic/dailyWeatherIcon';
import DailyWeatherText from '../atomic/dailyWeatherText';
import DailyWeatherDegrees from '../atomic/dailyWeatherDegrees';
import { styles } from './dailyForecast.styles';
import { getDayIndex, getWeatherIconName } from 'src/helpers';
import { useSelector } from 'react-redux';
import { weatherStatsSelector } from 'src/store/weather/selectors';
import { weather } from '../dailyDetailedForecast/testData';

type Props = {
  date: string;
};

const DailyForecast: React.FC<Props> = ({ date }) => {
  const weatherStats = useSelector(weatherStatsSelector);

  const temp =
    date === 'today' ? weatherStats.current.temp.toFixed(0) : weatherStats.daily[getDayIndex(date)].temp.eve.toFixed(0);

  const text =
    date === 'today'
      ? weatherStats.current.weather[0].description.toUpperCase()
      : weatherStats.daily[getDayIndex(date)].weather[0].description.toUpperCase();

  const min =
    date === 'today'
      ? weatherStats.daily[0].temp.min.toFixed(0)
      : weatherStats.daily[getDayIndex(date)].temp.min.toFixed(0);

  const max =
    date === 'today'
      ? weatherStats.daily[0].temp.max.toFixed(0)
      : weatherStats.daily[getDayIndex(date)].temp.max.toFixed(0);

  const weatherDescription =
    date === 'today'
      ? weatherStats.daily[0].weather[0].description
      : weatherStats.daily[getDayIndex(date)].weather[0].description;

  return (
    <View style={styles.container}>
      <TemperatureNo temp={temp} />
      <DailyWeatherIcon weatherName={getWeatherIconName(weatherDescription)} />
      <DailyWeatherText text={text} />
      <DailyWeatherDegrees min={min} max={max} />
    </View>
  );
};

export default DailyForecast;
