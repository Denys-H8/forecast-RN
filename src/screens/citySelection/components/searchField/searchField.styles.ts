import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    backgroundColor: constants.BG_COLOR,
    paddingBottom: 30,
    paddingTop: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: constants.MAIN_COLOR,
  },
  input: {
    fontFamily: 'WorkSans-Regular.ttf',
    fontSize: 16,
    color: constants.MAIN_COLOR,
    flex: 1,
    marginRight: 10,
  },
});
