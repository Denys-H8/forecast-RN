import React from 'react';
import { View, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './searchField.styles';

import constants from 'src/constants';

type Props = {
  onChangeText: (val: string) => void;
  value: string;
};

const SearchField: React.FC<Props> = ({ onChangeText, value }) => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput
        testID="SearchField.TextInput"
        placeholder="Enter the name of city"
        placeholderTextColor={constants.SUB_COLOR}
        style={styles.input}
        onChangeText={(value) => onChangeText(value)}
        value={value}
      />
      <Icon name="search" size={40} color={constants.MAIN_COLOR} />
    </View>
  </View>
);

export default SearchField;
