import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import CustomText from 'src/components/text';
import { styles } from './metaInfo.styles';
import { weatherSelector } from 'src/store/weather/selectors';

type Props = {
  date: string;
};

const MetaInfo: React.FC<Props> = ({ date }) => {
  const weather = useSelector(weatherSelector);

  const getCurrentDay = (str: string) => {
    const date = str === 'today' ? new Date(Date.now()) : new Date(str);

    const day = date.getDay();
    const month = date.getMonth();
    const dayNo = date.getDate();

    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const months = [
      'JANUARY',
      'FEBRUARY',
      'MARCH',
      'APRIL',
      'MAY',
      'JUNE',
      'JULY',
      'AUGUST',
      'SEPTEMBER',
      'OCTOBER',
      'NOVEMBER',
      'DECEMBER',
    ];

    return `${days[day]}, ${months[month]} ${dayNo}`;
  };

  const words = weather.city.name.length > 11 ? weather.city.name.split(/-| /) : [weather.city.name];

  return (
    <View style={styles.container}>
      {words.map((word: string) => {
        return (
          <CustomText isTitle style={styles.city} key={word}>
            {word}
          </CustomText>
        );
      })}
      <CustomText style={styles.date}>{getCurrentDay(date)}</CustomText>
    </View>
  );
};

export default MetaInfo;
