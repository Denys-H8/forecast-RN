import React from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from './button.styles';
import { CustomText } from 'src/components';

interface IProps {
  onPress(): void;
  style?: object;
  isDisabled: boolean;
}

const Input: React.FC<IProps> = ({ onPress, style, isDisabled }) => {
  const disableStyle = isDisabled ? { opacity: 0.4 } : {};

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[styles.button, style, disableStyle]}
      testID="Button.TouchableOpacity"
    >
      <CustomText style={styles.text}>LOGIN</CustomText>
    </TouchableOpacity>
  );
};

export default Input;
