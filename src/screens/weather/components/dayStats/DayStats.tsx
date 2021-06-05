import React from 'react';
import { View } from 'react-native';

import Humidity from '../atomic/stat';
import { styles } from './dayStats.styles';
import { getDayIndex, timestampToHour } from 'src/helpers';
import { useSelector } from 'react-redux';
import { weatherStatsSelector } from 'src/store/weather/selectors';

type Props = {
  date: string;
};

const DayStats: React.FC<Props> = ({ date }) => {
  const weatherStats = useSelector(weatherStatsSelector);

  const drops = date === 'today' ? weatherStats.current.humidity : weatherStats.daily[getDayIndex(date)].humidity;

  const wind =
    date === 'today' ? weatherStats.current.wind_speed : weatherStats.daily[getDayIndex(date)].wind_speed.toFixed(0);

  const sunrise =
    date === 'today'
      ? timestampToHour(weatherStats.current.sunrise)
      : timestampToHour(weatherStats.daily[getDayIndex(date)].sunrise);

  const sunset =
    date === 'today'
      ? timestampToHour(weatherStats.current.sunset)
      : timestampToHour(weatherStats.daily[getDayIndex(date)].sunset);

  return (
    <View style={styles.container}>
      <Humidity category="drops" text={`${drops}%`} />
      <Humidity category="wind" text={`${wind}m/c`} />
      <Humidity category="sunrise" text={sunrise} />
      <Humidity category="sunset" text={sunset} />
    </View>
  );
};

export default DayStats;
