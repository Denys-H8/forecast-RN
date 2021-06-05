import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: constants.SUB_COLOR,
  },
});
