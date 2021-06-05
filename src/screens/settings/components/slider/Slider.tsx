import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';

import constants from 'src/constants';
import { CustomText } from 'src/components';
import { styles } from './slider.styles';

interface IProps {
  title: string;
  text: string;
  maximumValue: number;
  minimumValue: number;
  value: number;
  onChange(value: number): void;
}

const SliderView: React.FC<IProps> = ({ title, text, maximumValue, minimumValue, value, onChange }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    Icon.getImageSource('circle', 16, 'white').then(setIcon);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <CustomText style={styles.text}>{title}</CustomText>
        <CustomText style={styles.subText}>{text}</CustomText>
      </View>

      <Slider
        testID="Slider.Slider"
        style={styles.slider}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        value={value}
        step={1}
        minimumTrackTintColor={constants.BTN_LOGIN_BG_COLOR}
        maximumTrackTintColor={constants.SUB_COLOR}
        thumbImage={icon}
        onValueChange={(value) => onChange(value)}
      />
    </View>
  );
};

export default SliderView;
