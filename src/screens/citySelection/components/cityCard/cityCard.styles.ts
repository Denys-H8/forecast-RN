import { StyleSheet } from 'react-native';

import constants from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstItemContainer: {
    flexDirection: 'row',
    paddingLeft: 33,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingLeft: 33,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cityWeatherContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  iconContainer: {
    width: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 28,
  },
  cityContainer: {
    alignItems: 'flex-start',
  },
  cityName: {
    fontSize: 24,
    lineHeight: 28,
    color: constants.MAIN_COLOR,
    fontFamily: 'WorkSans-SemiBold',
  },
  weatherName: {
    fontSize: 12,
    lineHeight: 14,
    color: constants.SUB_COLOR,
  },
});
