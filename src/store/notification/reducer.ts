import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import * as ACTION from './actionTypes';

type Props = {
  routeName: string;
  notification: FirebaseMessagingTypes.RemoteMessage | null;
};

export const initialState: Props = {
  routeName: '',
  notification: null,
};

export const notificationReducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case ACTION.ADD_NOTIFICATION: {
      return {
        ...state,
        notification: action.payload,
      };
    }
    case ACTION.REMOVE_NOTIFICATION: {
      return {
        ...state,
        notification: null,
      };
    }

    default:
      return state;
  }
};
