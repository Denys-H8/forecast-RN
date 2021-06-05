import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Button from './Button';

const styleMock = {
  backgroundColor: 'green',
};

describe('Button ', () => {
  test('render not disabled button', () => {
    const onPressMock = jest.fn();

    const { toJSON, getByTestId } = render(<Button isDisabled={false} style={styleMock} onPress={onPressMock} />);

    fireEvent.press(getByTestId('Button.TouchableOpacity'));

    expect(toJSON()).toMatchSnapshot();
    expect(onPressMock).toHaveBeenCalled();
  });

  test('render disabled button', () => {
    const onPressMock = jest.fn();

    const { toJSON, getByTestId } = render(<Button isDisabled={true} style={styleMock} onPress={onPressMock} />);

    fireEvent.press(getByTestId('Button.TouchableOpacity'));

    expect(toJSON()).toMatchSnapshot();
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
