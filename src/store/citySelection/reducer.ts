import * as ACTION from './actionTypes';

type Props = {
  city: TCity;
  usedCities: TCity[];
  query: string;
  data: TData[]; // searched cities and their id
  weatherData: TGroupWeather | null;
  isLoading: boolean;
};

export const initialState: Props = {
  city: {
    id: 706483,
    name: 'Kharkiv',
    lat: 49.988358,
    lon: 36.232845,
  },
  usedCities: [
    {
      id: 706483,
      name: 'Kharkiv',
      lon: 36.25,
      lat: 50.0,
    },
  ],
  query: '',
  data: [],
  weatherData: null,
  isLoading: false,
};

export const cityReducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case ACTION.QUERY_CHANGED:
      return {
        ...state,
        query: action.payload.query,
        data: action.payload.data,
      };
    case ACTION.GET_WEATHER_FOR_CITIES_SUCESS:
      return {
        ...state,
        weatherData: action.payload,
      };
    case ACTION.RESET_QUERY:
      return {
        ...state,
        query: '',
      };
    case ACTION.CHANGE_CITY: {
      let usedCitiesNew = state.usedCities;

      if (state.usedCities.filter((e) => e.id === action.payload.id).length === 0) {
        usedCitiesNew.push(action.payload);
      }

      return {
        ...state,
        city: action.payload,
        usedCities: usedCitiesNew,
      };
    }
    case ACTION.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export type TGroupWeather = {
  list: TGroupWeatherItem[];
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

export type TData = {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
};

export type TCity = {
  id: number;
  name: string;
  lat: number;
  lon: number;
};

export type TGroupWeatherItem = {
  coord: {
    lon: number;
    lat: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: {
    description: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  id: number;
  name: string;
};
