import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.BG_COLOR,
  },
  content: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 32,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 12,
  },
  bottomContainer: {
    flex: 1,
    paddingTop: 12,
  },
  text: {
    color: constants.ACTIVE_TEXT_COLOR,
    fontSize: 22,
  }
});
