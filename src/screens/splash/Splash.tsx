import React from 'react';
import { View } from 'react-native';

import { styles } from './splash.styles';
import { CustomText } from 'src/components';

const Splash: React.FC = () => (
  <View style={styles.container}>
    <CustomText style={styles.text}>WEATHER APP</CustomText>
  </View>
);

export default Splash;
