import { getCurrentDate, getDayIndex, timestampToHour, timestampToDate } from './helpers';

const CONSTANT_TIME = 1618934615 * 1000;
const MOCK_DAYS = ['2021-04-20', '2021-04-21', '2021-04-22', '2021-04-23', '2021-04-24'];

describe('Helpers', () => {
  Date.now = jest.fn(() => CONSTANT_TIME);

  test('getCurrentDate', () => {
    expect(getCurrentDate()).toEqual(MOCK_DAYS);
  });

  test('Should getDayIndex return -1', () => {
    expect(getDayIndex('')).toEqual(-1);
  });

  test('Should getDayIndex return index', () => {
    expect(getDayIndex('2021-04-22')).toEqual(2);
  });

  test('Should timestampToHour return time', () => {
    expect(timestampToHour(CONSTANT_TIME / 1000)).toEqual('19:03');
  });

  test('Should timestampToDate return date', () => {
    expect(timestampToDate(CONSTANT_TIME / 1000)).toEqual('2021-04-20');
  });
});
