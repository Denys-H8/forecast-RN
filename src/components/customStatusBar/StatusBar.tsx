import React from 'react';
import { View, StatusBar } from 'react-native';

import constants from 'src/constants';
import { styles } from './statusBar.styles';

const CustomStatusBar: React.FC = () => (
  <View style={styles.statusBar}>
    <StatusBar barStyle="light-content" translucent backgroundColor={constants.BAR_BG_COLOR} />
  </View>
);

export default CustomStatusBar;
