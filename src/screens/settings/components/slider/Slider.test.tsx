import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Slider from './Slider';

const text = 'Some text value';
const title = 'New title value';
const maximumValue = 10;
const minimumValue = 0;
const value = 5;
const newValue = 7;

describe('InputField ', () => {
  test('should render InputField', () => {
    const onChangeMock = jest.fn();

    const { toJSON, getByTestId } = render(
      <Slider
        onChange={onChangeMock}
        text={text}
        title={title}
        maximumValue={maximumValue}
        minimumValue={minimumValue}
        value={value}
      />,
    );

    fireEvent(getByTestId('Slider.Slider'), 'onValueChange', newValue);

    expect(toJSON()).toMatchSnapshot();
    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toHaveBeenCalledWith(newValue);
    expect(onChangeMock).not.toHaveBeenCalledWith(9);
  });
});
