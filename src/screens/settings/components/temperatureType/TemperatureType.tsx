import React from 'react';
import { View } from 'react-native';

import constants from 'src/constants';
import { CustomText } from 'src/components';
import { styles } from './temperatureType.styles';

interface IProps {
  type: string;
  isActive: string;
}

const TemperatureType: React.FC<IProps> = ({ type, isActive }) => {
  const value = type === 'metric' ? 'C' : 'F';
  return (
    <View style={styles.degreesContainer}>
      {isActive === type ? (
        <View style={styles.degreesContainer}>
          <CustomText style={[styles.celsius, { color: constants.MAIN_COLOR }]}>0</CustomText>
          <CustomText style={[styles.number, { color: constants.MAIN_COLOR }]}>{value}</CustomText>
        </View>
      ) : (
        <View style={styles.degreesContainer}>
          <CustomText style={styles.celsius}>0</CustomText>
          <CustomText style={styles.number}>{value}</CustomText>
        </View>
      )}
    </View>
  );
};

export default TemperatureType;
