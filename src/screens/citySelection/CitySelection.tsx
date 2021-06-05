import React, { useCallback, useEffect } from 'react';
import { FlatList, View, RefreshControl } from 'react-native';
import CityCard from './components/cityCard';
import SearchField from './components/searchField';
import { cities } from './cityData';
import { styles } from './citySelection.styles';
import { useDispatch, useSelector } from 'react-redux';
import { cityActions } from 'src/store/rootActions';
import { debounce } from 'lodash';
import * as CITY_SELECTORS from '../../store/citySelection/selectors';
import { TData, TGroupWeatherItem, TGroupWeather, TCity } from 'src/store/citySelection/reducer';

const CitySelection: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cityActions.resetQuery());
    dispatch(cityActions.getWeatherForCities());
  }, [dispatch]);

  const query = useSelector(CITY_SELECTORS.query);
  const isLoading = useSelector(CITY_SELECTORS.isLoadingSelector);

  const handleSearch = (query: string) => {
    const data: TData[] = cities.filter((item: TCityBig) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    dispatch(cityActions.queryChanged(query, data));
    handleSearchSaga();
  };

  const handleSearchSaga = useCallback(
    debounce(() => {
      dispatch(cityActions.setLoading(true));
      dispatch(cityActions.getWeatherForCities());
    }, 700),
    [],
  );

  const handleCityPress = (city: TCity) => {
    dispatch(cityActions.pressedCity(city));
  };

  const keyExtractor = (item: TGroupWeatherItem) => item.id.toString();
  const listHeaderComponent = <SearchField onChangeText={handleSearch} value={query} />;
  const itemSeparatorComponent = () => <View style={styles.separator} />;
  const renderItem = ({ item }: any) => <CityCard item={item} onPress={handleCityPress} />;
  const weatherData: TGroupWeather = useSelector(CITY_SELECTORS.weatherData);

  return (
    <FlatList
      style={styles.container}
      keyExtractor={keyExtractor}
      data={weatherData.list}
      ListHeaderComponent={listHeaderComponent}
      stickyHeaderIndices={[0]}
      ItemSeparatorComponent={itemSeparatorComponent}
      renderItem={renderItem}
      refreshControl={<RefreshControl refreshing={isLoading} />}
    />
  );
};

type TCityBig = {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
};

export default CitySelection;
