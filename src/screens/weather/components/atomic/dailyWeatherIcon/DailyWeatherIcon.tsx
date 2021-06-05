import React from 'react';

import Icon from 'react-native-vector-icons/Fontisto';
import constants from 'src/constants';

type TWeatherIcon = {
  weatherName: string;
};

const DailyWeatherIcon: React.FC<TWeatherIcon> = ({ weatherName }) => (
  <Icon name={weatherName} size={45} color={constants.SUB_COLOR} />
);

export default DailyWeatherIcon;
