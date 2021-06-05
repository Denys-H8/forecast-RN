import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../../services/rootNavigation';

import TabNavigator from '../tab-navigator';
import Login from 'src/screens/login';
import CitySelection from 'src/screens/citySelection';
import Settings from 'src/screens/settings';
import Splash from 'src/screens/splash';
import constants from 'src/constants';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'src/store/rootActions';
import { loadingSelector, userSelector } from 'src/store/login/selectors';
import { styles } from './mainNavigation.styles';

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const user = useSelector(userSelector);

  useEffect(() => {
    dispatch(loginActions.startLoading());
  }, [dispatch]);

  if (loading) return <Splash />;

  return (
    <NavigationContainer ref={navigationRef}>
      {user ? (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: constants.BG_COLOR,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
          initialRouteName={'WeatherTab'}
        >
          <Stack.Screen
            name="WeatherTab"
            component={TabNavigator}
            options={({ navigation, route }) =>
              getFocusedRouteNameFromRoute(route) === 'Forecast'
                ? { headerTitle: '' }
                : {
                    headerTitle: '',
                    headerLeft: () => (
                      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <Icon name="settings" size={30} color={constants.SUB_COLOR} style={styles.iconBigLeft} />
                      </TouchableOpacity>
                    ),
                    headerRight: () => (
                      <TouchableOpacity onPress={() => navigation.navigate('CitySelection')}>
                        <Icon name="location-city" size={30} color={constants.SUB_COLOR} style={styles.iconBigRight} />
                      </TouchableOpacity>
                    ),
                  }
            }
          />
          <Stack.Screen
            name="CitySelection"
            component={CitySelection}
            options={({ navigation }) => ({
              headerTitle: '',
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name="keyboard-arrow-left" size={50} color={constants.SUB_COLOR} style={styles.iconSmall} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={({ navigation }) => ({
              headerTitle: '',
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name="keyboard-arrow-left" size={50} color={constants.SUB_COLOR} style={styles.iconSmall} />
                </TouchableOpacity>
              ),
            })}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainNavigator;
