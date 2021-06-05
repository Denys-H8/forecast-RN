import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  degreesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  number: {
    fontSize: 32,
    lineHeight: 36,
    color: constants.MAIN_COLOR,
  },
  celsius: {
    fontSize: 18,
    lineHeight: 18,
    color: constants.MAIN_COLOR,
  },
  scale: {
    height: 12,
    backgroundColor: constants.SUB_COLOR,
    borderRadius: 15,
    marginHorizontal: 5,
    maxWidth: 85,
  },
});
