import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WeatherScreen from 'src/screens/weather';
import Forecast from 'src/screens/forecast';
import constants from 'src/constants';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: constants.ACTIVE_TEXT_COLOR,
        inactiveTintColor: constants.MAIN_COLOR,
        activeBackgroundColor: constants.BTN_BG_COLOR,
        inactiveBackgroundColor: constants.BTN_BG_COLOR,
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          height: 70,
        },
        labelStyle: {
          fontSize: 19,
          fontFamily: 'WorkSans-Regular',
          lineHeight: 22,
          textTransform: 'uppercase',
        },
        tabStyle: {
          justifyContent: 'center',
        },
      }}
    >
      <Tab.Screen name="Weather" component={WeatherScreen} initialParams={{ date: 'today' }} />
      <Tab.Screen name="Forecast" component={Forecast} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
