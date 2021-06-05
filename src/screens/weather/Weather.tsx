import React, { useEffect } from 'react';
import { View, ImageBackground } from 'react-native';

import MetaInfo from './components/metaInfo';
import DailyForecast from './components/dailyForecast';
import DailyDetailedForecast from './components/dailyDetailedForecast';
import DayStats from './components/dayStats';
import { styles } from './weather.styles';
import { useDispatch, useSelector } from 'react-redux';
import * as WEATHER_SELECTORS from '../../store/weather/selectors';
import Loading from 'src/components/loading';
import { weatherActions } from 'src/store/rootActions';
import { rootNavigation } from 'src/services';

interface IProps {
  route: { params: { date: string } };
}

const WeatherScreen: React.FC<IProps> = ({ route }: IProps) => {
  const loading = useSelector(WEATHER_SELECTORS.loading);
  const dispatch = useDispatch();
  const lateNavigation = useSelector(WEATHER_SELECTORS.lateNavigationSelector);

  useEffect(() => {
    if (lateNavigation) {
      rootNavigation.navigate(lateNavigation, {});
      dispatch(weatherActions.resetLateNavigation());
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <ImageBackground source={require('src/assets/images/cloud.png')} style={styles.image}>
            <MetaInfo date={route.params.date} />
            <DailyForecast date={route.params.date} />
          </ImageBackground>
        </View>
        <DailyDetailedForecast date={route.params.date} />
        <DayStats date={route.params.date} />
      </View>
    </View>
  );
};

export default WeatherScreen;
