import React from 'react';
import { render } from '@testing-library/react-native';
import Humidity from './Stat';

const categoryWind = 'wind';
const categorySunrise = 'sunrise';
const categorySunset = 'sunset';
const wrongCategory = 'wrong';
const text = 'Some text';

describe('Stat ', () => {
  test('should render Stat with properly category name', () => {
    const { toJSON, getByTestId } = render(<Humidity category={categoryWind} text={text} />);

    expect(toJSON()).toMatchSnapshot();
    expect(getByTestId('Stat.Icon')).not.toBeNull();
  });

  test('should render Stat with properly category name', () => {
    const { toJSON, getByTestId } = render(<Humidity category={categorySunrise} text={text} />);

    expect(toJSON()).toMatchSnapshot();
    expect(getByTestId('Stat.Icon')).not.toBeNull();
  });

  test('should render Stat with properly category name', () => {
    const { toJSON, getByTestId } = render(<Humidity category={categorySunset} text={text} />);

    expect(toJSON()).toMatchSnapshot();
    expect(getByTestId('Stat.Icon')).not.toBeNull();
  });

  test('should render Stat with not properly category name', () => {
    const { toJSON, getByTestId } = render(<Humidity category={wrongCategory} text={text} />);

    expect(toJSON()).toMatchSnapshot();
    expect(getByTestId('Stat.Icon')).not.toBeNull();
  });
});
