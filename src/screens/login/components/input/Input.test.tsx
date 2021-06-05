import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Input from './Input';

const styleMock = {
  backgroundColor: 'green',
};

const newTextValue = 'Some text value';

describe('Input ', () => {
  test('render input without error', () => {
    const onChangeTextMock = jest.fn();

    const { toJSON, queryByTestId, getByTestId } = render(
      <Input error={false} iconName="lock" onChangeText={onChangeTextMock} style={styleMock} />,
    );

    fireEvent.changeText(getByTestId('Input.TextInput'), newTextValue);

    expect(toJSON()).toMatchSnapshot();
    expect(onChangeTextMock).toHaveBeenCalled();
    expect(onChangeTextMock).toHaveBeenCalledWith(newTextValue);
    expect(onChangeTextMock).not.toHaveBeenCalledWith('Some other value');
    expect(queryByTestId('Input.Icon')).toBeNull();
  });

  test('render input with error', () => {
    const onChangeTextMock = jest.fn();

    const { toJSON, getByTestId } = render(
      <Input error={true} iconName="lock" onChangeText={onChangeTextMock} style={styleMock} />,
    );

    fireEvent.changeText(getByTestId('Input.TextInput'), newTextValue);

    expect(toJSON()).toMatchSnapshot();
    expect(onChangeTextMock).toHaveBeenCalled();
    expect(onChangeTextMock).toHaveBeenCalledWith(newTextValue);
    expect(onChangeTextMock).not.toHaveBeenCalledWith('Some other value');
    expect(getByTestId('Input.Icon')).not.toBeNull();
  });
});
