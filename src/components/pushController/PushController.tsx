import React, { useEffect } from 'react';
import { notificationActions, weatherActions } from 'src/store/rootActions';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from 'src/store/login/selectors';
import { View } from 'react-native';
import { notificationSelector } from 'src/store/notification/selectors';
import NotificationCard from './components/notificationCard';
import { styles } from './pushController.styles';

const PushController: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const notification = useSelector(notificationSelector);

  useEffect(() => {
    handleNotifications();
  }, []);

  const handleNotifications = () => {
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message is handed in the background!', remoteMessage);
    });

    messaging().onMessage(async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
      dispatch(notificationActions.addNotification(remoteMessage));
    });

    messaging().onNotificationOpenedApp((remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
      if (user && remoteMessage?.data?.type) {
        dispatch(notificationActions.notification(remoteMessage?.data?.type));
      } else {
        dispatch(weatherActions.lateNavigation(remoteMessage?.data?.type));
      }
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage: FirebaseMessagingTypes.RemoteMessage | null) => {
        dispatch(weatherActions.lateNavigation(remoteMessage?.data?.type));
      });
  };
  return (
    <View style={styles.app}>
      {children}
      <View style={styles.container}>
        {notification && <NotificationCard data={notification} key={notification.messageId} />}
      </View>
    </View>
  );
};

export default PushController;
