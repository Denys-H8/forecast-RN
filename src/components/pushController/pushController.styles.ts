import { StyleSheet } from 'react-native';
import constants from 'src/constants';

export const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  container: {
    backgroundColor: constants.BG_COLOR,
    ...StyleSheet.absoluteFillObject,
    top: constants.STATUSBAR_HEIGHT,
    bottom: undefined,
  },
});
