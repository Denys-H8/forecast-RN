import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import CustomText from 'src/components/text';
import { styles } from './temperatureScale.styles';
import { temperatureScale } from 'src/store/settings/selectors';

type TProps = {
  maxTemperature: number;
  minTemperature: number;
};

const TemperatureScale: React.FC<TProps> = ({ maxTemperature, minTemperature }) => {
  const dif = maxTemperature - minTemperature;
  const arr = new Array(dif);
  const temperatureType = useSelector(temperatureScale);
  const rowWidth = temperatureType === 'metric' ? 6 : 3;

  return (
    <View style={styles.container}>
      <View style={styles.degreesContainer}>
        <CustomText style={styles.number}>{minTemperature}</CustomText>
        <CustomText style={styles.celsius}>0</CustomText>
      </View>
      {maxTemperature === minTemperature || dif <= 3 ? (
        <View style={[styles.scale, { width: 25 }]} />
      ) : (
        <View style={[styles.scale, { width: rowWidth * arr.length }]} />
      )}
      <View style={styles.degreesContainer}>
        <CustomText style={styles.number}>{maxTemperature}</CustomText>
        <CustomText style={styles.celsius}>0</CustomText>
      </View>
    </View>
  );
};

export default TemperatureScale;
