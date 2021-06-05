import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import CustomText from 'src/components/text';
import constants from 'src/constants';
import { getWeatherIconName } from 'src/helpers';
import { TCity, TGroupWeatherItem } from 'src/store/citySelection/reducer';
import { styles } from './cityCard.styles';

type Props = {
  item: TGroupWeatherItem;
  onPress: (city: TCity) => void;
};

const CityCard: React.FC<Props> = ({ item, onPress }) => {
  const city = { id: item.id, name: item.name, lat: item.coord.lat, lon: item.coord.lon };

  return (
    <TouchableOpacity style={styles.itemContainer} testID="CityCard.TouchableOpacity" onPress={() => onPress(city)}>
      <View style={styles.degreesContainer}>
        <CustomText style={styles.number}>{item.main.temp.toFixed(1)}</CustomText>
        <CustomText style={styles.celsius}>0</CustomText>
      </View>
      <View style={styles.cityWeatherContainer}>
        <View style={styles.iconContainer}>
          <Icon
            name={getWeatherIconName(item.weather[0].description)}
            size={35}
            color={constants.SUB_COLOR}
            style={styles.icon}
          />
        </View>
        <View style={styles.cityContainer}>
          <CustomText style={styles.cityName}>{item.name}</CustomText>
          <CustomText style={styles.weatherName}>{item.weather[0].description.toUpperCase()}</CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CityCard;
