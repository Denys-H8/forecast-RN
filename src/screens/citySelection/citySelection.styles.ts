import { StyleSheet } from 'react-native';
import constants from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.BG_COLOR,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: constants.BG_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 2,
    backgroundColor: constants.SUB_COLOR,
  },
});
