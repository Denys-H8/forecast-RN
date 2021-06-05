import React from 'react';

import { Text, TextProps } from 'react-native';
import { styles } from './text.styles';

type Props = {
  isTitle?: boolean;
} & TextProps;

const CustomText: React.FC<Props> = ({ isTitle, style, children }) => {
  const textStyle = isTitle ? styles.title : styles.p;

  return <Text style={[textStyle, style]}>{children}</Text>;
};

export default CustomText;
