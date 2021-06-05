import React from 'react';
import { View } from 'react-native';

import CustomText from 'src/components/text';
import Icon from 'react-native-vector-icons/Fontisto';
import { styles } from './hourWeather.styles';

type IProps = {
  hour: string;
  name: string;
  temperature: string;
};

const HourWeather: React.FC<IProps> = ({ hour, name, temperature }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.hour}>{hour}</CustomText>
      <Icon name={name} size={28} color="#fff" />
      <View style={styles.containerDegree}>
        <CustomText style={styles.temperature}>{temperature}</CustomText>
        <CustomText style={styles.celsius}>0</CustomText>
      </View>
    </View>
  );
};

export default HourWeather;
