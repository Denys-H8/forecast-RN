import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import constants from 'src/constants';
import { styles } from './inputField.styles';

type IProps = {} & TextInputProps;

const InputField: React.FC<IProps> = ({ ...props }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholderTextColor={constants.SUB_COLOR}
        style={styles.input}
        {...props}
        testID={'InputField.TextInput'}
      />
    </View>
  );
};

export default InputField;
