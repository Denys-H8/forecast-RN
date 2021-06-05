import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.BG_COLOR,
  },
  section: {
    paddingHorizontal: 32,
    paddingTop: 12,
    paddingBottom: 6,
    borderBottomColor: constants.SUB_COLOR,
    borderBottomWidth: 2,
  },
  tempSection: {
    flexDirection: 'row',
    paddingTop: 18,
    paddingBottom: 18,
  },
  degreeContainer: {
    flexDirection: 'row',
    paddingVertical: 18,
  },
  delimiter: {
    width: 2,
    backgroundColor: constants.SUB_COLOR,
    marginHorizontal: 10,
  },
  logoutBtn: {
    fontSize: 28,
    lineHeight: 30,
    color: constants.MAIN_COLOR,
    marginTop: 18,
  },
});
