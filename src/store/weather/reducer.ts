import { GET_WEATHER_SUCCESS, LATE_NAVIGATION, LOADING, RESET_LATE_NAVIGATION } from './actionTypes';

type Props = {
  weather: TWeather | null;
  weatherStats: TWeatherStats | null;
  loading: boolean;
  lateNavigation: string | undefined;
};

export const initialState: Props = {
  weather: null,
  weatherStats: null,
  loading: false,
  lateNavigation: undefined,
};

export const weatherReducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload.weather,
        weatherStats: action.payload.weatherStats,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case LATE_NAVIGATION:
      return {
        ...state,
        lateNavigation: action.payload,
      };
    case RESET_LATE_NAVIGATION:
      return {
        ...state,
        lateNavigation: null,
      };
    default:
      return state;
  }
};

export type TWeather = {
  list: {
    dt: number;
    main: {
      temp: number;
    };
    weather: {
      description: string;
      icon: string;
      main: string;
    };
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
    visibility: number;
    dx_txt: string;
  }[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: string;
      lon: string;
    };
    sunrise: number;
    sunset: number;
  };
};

export type TWeatherStats = {
  lat: number;
  lon: number;
  current: TCurrent[];
  hourly: {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
  }[];
  daily: TDaily[];
};

export type TCurrent = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
};

export type TDaily = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
  };
  feels_like: {
    day: number;
  };
  pressure: number;
  humidity: number;
  wind_speed: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  clouds: number;
};
