import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import InputField from './InputField';

const textValue = 'Some text value';
const newTextValue = 'New text value';
const placeholderValue = 'Placeholder value';

describe('InputField ', () => {
  test('should render InputField', () => {
    const onChangeTextMock = jest.fn();

    const { toJSON, getByTestId } = render(
      <InputField onChangeText={onChangeTextMock} placeholder={placeholderValue} value={textValue} />,
    );

    fireEvent.changeText(getByTestId('InputField.TextInput'), newTextValue);

    expect(toJSON()).toMatchSnapshot();
    expect(onChangeTextMock).toHaveBeenCalled();
    expect(onChangeTextMock).toHaveBeenCalledWith(newTextValue);
    expect(onChangeTextMock).not.toHaveBeenCalledWith('Some other value');
  });
});
