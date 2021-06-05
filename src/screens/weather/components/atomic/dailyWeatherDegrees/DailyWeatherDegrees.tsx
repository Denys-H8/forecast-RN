import React from 'react';
import { View } from 'react-native';

import CustomText from 'src/components/text';
import { styles } from './dailyWeatherDegrees.styles';

interface IProps {
  min: number;
  max: number;
}

const DailyWeatherDegrees: React.FC<IProps> = ({ min, max }) => (
  <View>
    <CustomText style={styles.number}>{`${min} /`}</CustomText>
    <View style={styles.container}>
      <CustomText style={styles.number}>{max}</CustomText>
      <CustomText style={styles.celsius}>0</CustomText>
      <CustomText style={styles.number}>C</CustomText>
    </View>
  </View>
);

export default DailyWeatherDegrees;
