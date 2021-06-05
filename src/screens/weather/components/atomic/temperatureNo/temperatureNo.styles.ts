import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  number: {
    fontSize: 60,
    lineHeight: 70,
    color: constants.MAIN_COLOR,
  },
  celsius: {
    fontSize: 25,
    lineHeight: 30,
    color: constants.MAIN_COLOR,
  },
});
