import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: constants.BG_COLOR,
    borderBottomWidth: 2,
    borderBottomColor: constants.MAIN_COLOR,
    marginBottom: 26,
  },
  input: {
    fontFamily: 'WorkSans-Regular.ttf',
    fontSize: 16,
    lineHeight: 18,
    color: constants.MAIN_COLOR,
  },
});
