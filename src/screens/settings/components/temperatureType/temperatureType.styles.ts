import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  degreesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  number: {
    fontSize: 28,
    lineHeight: 30,
    color: constants.SUB_COLOR,
    fontFamily: 'WorkSans-SemiBold',
  },
  celsius: {
    fontSize: 16,
    lineHeight: 18,
    color: constants.SUB_COLOR,
    fontFamily: 'WorkSans-SemiBold',
  },
});
