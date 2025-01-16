import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherData } from '../../types/data.types';

interface WeatherState {
  data: WeatherData | null;
  error: string | null;
}

const initialState: WeatherState = {
  data: null,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<WeatherData>) => {
      state.data = action.payload;
      state.error = null;
    },
    setWeatherError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const { setWeatherData, setWeatherError } = weatherSlice.actions;

export default weatherSlice.reducer;
