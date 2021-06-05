import React from 'react';
import { View } from 'react-native';

import CustomText from 'src/components/text';
import { styles } from './temperatureNo.styles';

interface IProps {
  temp: number;
}

const TemperatureNo: React.FC<IProps> = ({ temp }) => (
  <View style={styles.container}>
    <CustomText style={styles.number}>{temp}</CustomText>
    <CustomText style={styles.celsius}>0</CustomText>
  </View>
);

export default TemperatureNo;
