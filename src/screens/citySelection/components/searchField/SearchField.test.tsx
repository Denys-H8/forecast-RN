import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import SearchField from './SearchField';

const textValue = 'Some text';
const newTextValue = 'New text value';

test('Loading snapshot', () => {
  const onChangeTextMock = jest.fn();

  const { toJSON, getByTestId } = render(<SearchField onChangeText={onChangeTextMock} value={textValue} />);

  fireEvent.changeText(getByTestId('SearchField.TextInput'), newTextValue);

  expect(toJSON()).toMatchSnapshot();
  expect(onChangeTextMock).toHaveBeenCalled();
  expect(onChangeTextMock).toHaveBeenCalledWith(newTextValue);
  expect(onChangeTextMock).not.toHaveBeenCalledWith('Some other value');
});
