import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { styles } from './loading.styles';
import constants from 'src/constants';

const Loading: React.FC = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={constants.MAIN_COLOR} />
  </View>
);

export default Loading;
