import React from 'react';
import { render } from '@testing-library/react-native';
import Text from './Text';
import constants from 'src/constants';

test('Loading snapshot', () => {
  const textTitle = render(<Text isTitle>Some Text</Text>);
  const textNotTitle = render(<Text>Some Text</Text>);
  const textWithStyle = render(<Text style={{ color: constants.SUB_COLOR }}>Some Text</Text>);

  expect(textTitle.toJSON()).toMatchSnapshot();
  expect(textNotTitle.toJSON()).toMatchSnapshot();
  expect(textWithStyle.toJSON()).toMatchSnapshot();
});
