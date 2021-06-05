import React from 'react';
import { View } from 'react-native';

import CustomText from 'src/components/text';
import IconDrops from 'src/assets/icons/drops.svg';
import IconWind from 'src/assets/icons/wind.svg';
import IconSunrise from 'src/assets/icons/sunrise.svg';
import IconSunset from 'src/assets/icons/sunset.svg';
import { styles } from './stat.styles';

type IProps = {
  category: string;
  text: string;
};

const Humidity: React.FC<IProps> = ({ category, text }) => {
  let Icon = IconDrops;
  let iconWidth = 32;

  switch (category) {
    case 'wind':
      Icon = IconWind;
      iconWidth = 26;
      break;
    case 'sunrise':
      Icon = IconSunrise;
      iconWidth = 28;
      break;
    case 'sunset':
      Icon = IconSunset;
      iconWidth = 28;
      break;
    default:
      break;
  }

  return (
    <View style={styles.container}>
      <Icon width={iconWidth} height={iconWidth} fill="#fff" testID="Stat.Icon" />
      <CustomText style={styles.text}>{text}</CustomText>
    </View>
  );
};

export default Humidity;
