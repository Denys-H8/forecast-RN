import React from 'react';
import { View } from 'react-native';
import { CustomText } from 'src/components';
import { styles } from './notificationCard.styles';
import IconNotif from 'src/assets/icons/notif.svg';
import IconClose from 'src/assets/icons/close.svg';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeNotification } from 'src/store/notification/actions';
import { notificationActions, weatherActions } from 'src/store/rootActions';
import { userSelector } from 'src/store/login/selectors';

type Props = {
  data: { data: { type: string }; notification: { title: string; body: string } };
};

const NotificationCard: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const handleNotifPress = (data: { data: { type: string } }) => {
    if (user) {
      dispatch(notificationActions.notification(data.data.type));
    } else {
      dispatch(weatherActions.lateNavigation(data.data.type));
    }
    dispatch(removeNotification(data));
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNotifPress(data)}
      testID="NotificationCard.TouchableOpacity"
    >
      <View style={styles.topLine} />
      <View style={styles.bottomContainer}>
        <IconNotif width={28} height={28} />
        <View>
          <CustomText isTitle style={styles.title}>
            {data.notification.title}
          </CustomText>
          <CustomText isTitle style={styles.body}>
            {data.notification.body}
          </CustomText>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(removeNotification(data));
          }}
          style={styles.close}
          testID="NotificationCard.TouchableOpacity.Remove"
        >
          <IconClose width={24} height={24} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;
