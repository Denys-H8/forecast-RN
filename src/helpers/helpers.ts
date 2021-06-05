import moment from 'moment';

export const getCurrentDate = () => {
  const result = [];

  for (let i = 0; i < 5; i++) {
    result.push(moment().add(i, 'day').format('YYYY-MM-DD'));
  }

  return result;
};

export const getDayIndex = (date: string) => {
  const days = getCurrentDate();

  return days.indexOf(date);
};

export const timestampToHour = (timestamp: number) => {
  return moment(timestamp * 1000).format('HH:mm');
};

export const timestampToDate = (timestamp: number) => {
  return moment(timestamp * 1000).format('YYYY-MM-DD');
};

export const getWeatherIconName = (weatherName: string) => {
  switch (true) {
    case weatherName.includes('clear sky'):
      return 'day-sunny';
    case weatherName.includes('few clouds'):
      return 'day-cloudy';
    case weatherName.includes('clouds'):
      return 'cloudy';
    case weatherName.includes('rain'):
      return 'rain';
    case weatherName.includes('thunderstorm'):
      return 'lightning';
    case weatherName.includes('fog'):
      return 'lightning';
    case weatherName.includes('snow'):
      return 'snowflake';
    default:
      return 'cloudy';
  }
};
