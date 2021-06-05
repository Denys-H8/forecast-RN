import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    backgroundColor: constants.BTN_LOGIN_BG_COLOR,
    borderRadius: 100,
  },
  text: {
    color: constants.MAIN_COLOR,
    fontSize: 16,
    lineHeight: 18,
  }
});
