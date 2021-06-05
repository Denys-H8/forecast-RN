import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import constants from 'src/constants';
import { styles } from './input.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

type IProps = {
  error: boolean;
  iconName: string;
} & TextInputProps;

const Input: React.FC<IProps> = ({ error, iconName, ...TIProps }) => {
  const errorStyle = error ? { color: '#F00' } : {};

  return (
    <View>
      <View style={styles.inputContainer}>
        <Icon name={iconName} size={40} color={constants.BG_COLOR} />
        <TextInput style={[styles.input, errorStyle]} {...TIProps} testID="Input.TextInput" />
        {error && <Icon name="error-outline" size={30} color="#F00" testID="Input.Icon" />}
      </View>
    </View>
  );
};

export default Input;
