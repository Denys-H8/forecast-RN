import React from 'react';
import { render } from '@testing-library/react-native';
import TemperatureType from './TemperatureType';

describe('TemperatureType ', () => {
  test('should render active metric TemperatureType', () => {
    const { toJSON, queryByText } = render(<TemperatureType type="metric" isActive="metric" />);

    expect(toJSON()).toMatchSnapshot();
    expect(queryByText('C')).not.toBeNull();
    expect(queryByText('F')).toBeNull();
  });
  test('should render not active imperial TemperatureType', () => {
    const { toJSON, queryByText } = render(<TemperatureType type="imperial" isActive="metric" />);

    expect(toJSON()).toMatchSnapshot();
    expect(queryByText('C')).toBeNull();
    expect(queryByText('F')).not.toBeNull();
  });
});
