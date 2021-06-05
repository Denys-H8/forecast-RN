import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  number: {
    fontSize: 18,
    lineHeight: 20,
    color: constants.MAIN_COLOR,
  },
  celsius: {
    fontSize: 12,
    lineHeight: 12,
    color: constants.MAIN_COLOR,
  },
});
