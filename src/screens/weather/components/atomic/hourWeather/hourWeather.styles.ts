import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerDegree: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  hour: {
    color: constants.SUB_COLOR,
    fontSize: 12,
  },
  temperature: {
    color: constants.MAIN_COLOR,
    fontSize: 20,
  },
  celsius: {
    fontSize: 12,
    lineHeight: 12,
    color: constants.MAIN_COLOR,
  },
});
