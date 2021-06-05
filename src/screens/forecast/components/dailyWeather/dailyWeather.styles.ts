import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingLeft: 33,
    paddingVertical: 22,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: constants.SUB_COLOR,
  },
  day: {
    color: constants.MAIN_COLOR,
    fontSize: 28,
    lineHeight: 32,
    width: 80,
  },
  degreesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 80,
  },
  number: {
    fontSize: 36,
    lineHeight: 42,
    color: constants.MAIN_COLOR,
  },
  celsius: {
    fontSize: 18,
    lineHeight: 18,
    color: constants.MAIN_COLOR,
  },
  iconScaleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  icon: {
    width: 50,
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 20,
  },
  separator: {
    height: 2,
    backgroundColor: constants.SUB_COLOR,
  },
});
