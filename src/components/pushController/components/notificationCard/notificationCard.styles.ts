import { StyleSheet } from 'react-native';
import constants from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#464960',
    opacity: 0.8,
  },
  topLine: {
    height: 5,
    backgroundColor: constants.BTN_LOGIN_BG_COLOR,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  title: {
    color: constants.MAIN_COLOR,
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 8,
  },
  body: {
    color: constants.MAIN_COLOR,
    fontSize: 16,
    lineHeight: 16,
  },
  close: {
    padding: 5,
  },
});
