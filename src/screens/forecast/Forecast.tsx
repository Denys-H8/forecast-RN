import React from 'react';
import { View } from 'react-native';

import DailyWeather from './components/dailyWeather';
import { styles } from './forecast.styles';

const Forecast: React.FC = () => {
  return (
    <View style={styles.container}>
      <DailyWeather />
    </View>
  );
};

export default Forecast;
