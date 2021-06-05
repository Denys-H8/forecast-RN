import React from 'react';
import { View } from 'react-native';

import CustomText from 'src/components/text';
import { styles } from './dailyWeatherText.styles';

interface IProps {
  text: string;
}

const DailyWeatherText: React.FC<IProps> = ({ text }) => {
  const words = text.split(' ');
  return (
    <View>
      {words.length > 1 ? (
        words.map((word) => (
          <CustomText key={word} style={styles.text}>
            {word}
          </CustomText>
        ))
      ) : (
        <CustomText style={styles.text}>{text}</CustomText>
      )}
    </View>
  );
};

export default DailyWeatherText;
