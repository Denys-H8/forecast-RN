import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { CustomText } from 'src/components';
import { styles } from './settings.styles';
import InputField from './components/inputField';
import TemperatureType from './components/temperatureType';
import Slider from './components/slider';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, settingsActions } from 'src/store/rootActions';
import * as SETTINGS_SELECTORS from '../../store/settings/selectors';

const Settings: React.FC = () => {
  const dispatch = useDispatch();

  const dayPeriod = useSelector(SETTINGS_SELECTORS.dayPeriod);
  const name = useSelector(SETTINGS_SELECTORS.name);
  const age = useSelector(SETTINGS_SELECTORS.age);
  const updateTime = useSelector(SETTINGS_SELECTORS.updateTime);
  const temperatureScale = useSelector(SETTINGS_SELECTORS.temperatureScale);

  const handleChangeTempScale = (temperatureScale: string) => {
    dispatch(settingsActions.changedTemperatureScale(temperatureScale));
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.section}>
          <InputField
            placeholder="Name"
            value={name}
            onChangeText={(value) => dispatch(settingsActions.changedName(value))}
          />
          <InputField
            placeholder="Age"
            value={age.toString()}
            onChangeText={(value) => dispatch(settingsActions.changedAge(value))}
          />
        </View>
        <View style={styles.section}>
          <Slider
            title="Show weather for"
            text={`${dayPeriod} days`}
            minimumValue={1}
            maximumValue={5}
            value={dayPeriod}
            onChange={(value) => {
              dispatch(settingsActions.changedDayPeriod(value));
            }}
          />
        </View>
        <View style={styles.section}>
          <Slider
            title="Update weather every"
            text={`${updateTime} min`}
            minimumValue={5}
            maximumValue={60}
            value={updateTime}
            onChange={(value) => {
              dispatch(settingsActions.changedUpdateTime(value));
            }}
          />
        </View>
        <View style={[styles.section, styles.tempSection]}>
          <TouchableOpacity onPress={() => handleChangeTempScale('metric')} testID="Settings.Scale.Metric">
            <TemperatureType type="metric" isActive={temperatureScale} />
          </TouchableOpacity>
          <View style={styles.delimiter} />
          <TouchableOpacity onPress={() => handleChangeTempScale('imperial')} testID="Settings.Scale.Imperial">
            <TemperatureType type="imperial" isActive={temperatureScale} />
          </TouchableOpacity>
        </View>
        <View style={[styles.section, { borderBottomWidth: 0 }]}>
          <TouchableOpacity
            onPress={() => {
              dispatch(loginActions.logout());
            }}
            testID="Settings.Logout"
          >
            <CustomText isTitle style={styles.logoutBtn}>
              Logout
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settings;
