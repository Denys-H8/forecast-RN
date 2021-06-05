import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingLeft: 32,
    marginTop: 15,
  },
  city: {
    color: constants.MAIN_COLOR,
  },
  date: {
    fontSize: 20,
    lineHeight: 23.5,
    color: constants.SUB_COLOR,
  },
});
