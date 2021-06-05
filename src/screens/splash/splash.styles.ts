import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.BG_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 64,
    fontFamily: 'WorkSans-SemiBold',
    lineHeight: 75,
    color: constants.MAIN_COLOR,
    textAlign: 'center',
  },
});
