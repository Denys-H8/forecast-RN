import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  container: {
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 22,
    lineHeight: 36,
    color: constants.MAIN_COLOR,
    fontFamily: 'WorkSans-SemiBold',
  },
  subText: {
    fontSize: 22,
    lineHeight: 36,
    color: constants.MAIN_COLOR,
  },
  slider: {
    height: 40,
  },
});
