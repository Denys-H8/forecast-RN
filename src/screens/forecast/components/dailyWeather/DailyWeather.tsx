import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import constants from 'src/constants';
import CustomText from 'src/components/text';
import Icon from 'react-native-vector-icons/Fontisto';
import TemperatureScale from '../atomic/temperatureScale';
import { getCurrentDate, getWeatherIconName, timestampToDate } from 'src/helpers';
import { useSelector } from 'react-redux';
import { dayPeriod } from 'src/store/settings/selectors';
import { styles } from './dailyWeather.styles';
import { rootNavigation } from 'src/services';
import { weatherStatsSelector } from 'src/store/weather/selectors';
import { TDaily } from 'src/store/weather/reducer';

export const handleDayPress = (dateIn: string) => {
  const currentDate = getCurrentDate()[0];
  const dateOut = dateIn === currentDate ? 'today' : dateIn;

  rootNavigation.navigate('Weather', { date: dateOut });
};

export const getDay = (dateLine: string) => {
  const date = new Date(dateLine);
  const day = date.getDay();
  const currentDate = Date.now();
  const currentDay = new Date(currentDate).getDay();

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return days[currentDay] === days[day] ? 'Today' : days[day];
};

const DailyWeather: React.FC = () => {
  const dayPeriodValue = useSelector(dayPeriod);
  const weatherStats = useSelector(weatherStatsSelector);

  const weather = weatherStats.daily.slice(0, dayPeriodValue);
  const weatherResult: { [key: string]: string[]; weatherDescription: string[] }[] = [];

  weather.forEach((el: TDaily) => {
    weatherResult.push({
      [timestampToDate(el.dt)]: [el.temp.min.toFixed(0), el.temp.max.toFixed(0)],
      weatherDescription: [el.weather[0].description],
    });
  });

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
        onPress={() => handleDayPress(Object.keys(item)[0])}
        style={styles.itemContainer}
        testID={`DailyWeather.TouchableOpacity.Day.${Object.keys(item)[0]}`}
      >
        <CustomText style={styles.day}>{getDay(Object.keys(item)[0])}</CustomText>
        <View style={styles.iconScaleContainer}>
          <Icon
            name={getWeatherIconName(item.weatherDescription[0])}
            size={35}
            color={constants.SUB_COLOR}
            style={styles.icon}
          />
          <TemperatureScale
            minTemperature={Math.min(...item[Object.keys(item)[0]])}
            maxTemperature={Math.max(...item[Object.keys(item)[0]])}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const keyExtractor = (item: {}) => Object.keys(item)[0];

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        data={weatherResult}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
};

export default DailyWeather;
