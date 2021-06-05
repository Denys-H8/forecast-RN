import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: constants.SUB_COLOR,
    borderRadius: 100,
  },
  input: {
    fontFamily: 'WorkSans-Regular.ttf',
    fontSize: 16,
    lineHeight: 18,
    color: constants.MAIN_COLOR,
    flex: 1,
    marginLeft: 8,
  },
});
