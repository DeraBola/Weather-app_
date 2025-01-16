import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import SearchBar from './SearchBar';  // Adjust the path as necessary
import { setWeatherData } from '../../../redux/features/weatherSlice';
import { toast } from 'react-toastify';

// Mocking axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mocking the toast notifications
jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

// Mock Redux store
const mockStore = configureStore({
  reducer: {
    weather: (state = { data: null }, action) => {
      switch (action.type) {
        case setWeatherData.type:
          return { ...state, data: action.payload };
        default:
          return state;
      }
    },
  },
});

describe('SearchBar Component', () => {
  it('calls handleSearch when search button is clicked', async () => {
    const mockWeatherData = {
      main: {
        temp: 25,
      },
      weather: [
        {
          description: 'Clear sky',
        },
      ],
    };

    // Mock the axios get request to return mockWeatherData
    mockedAxios.get.mockResolvedValue({ data: mockWeatherData });

    // Render the SearchBar component with the mock store
    render(
      <Provider store={mockStore}>
        <SearchBar />
      </Provider>
    );

    // Find the input and the search button
    const input = screen.getByPlaceholderText('Search for your prefered city...');
    const searchButton = screen.getByRole('button');

    // Type a city name into the input
    fireEvent.change(input, { target: { value: 'New York' } });

    // Click the search button
    fireEvent.click(searchButton);

    // Wait for the axios call to resolve and the dispatch to be called
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    // Verify if the dispatch was called with correct data
    expect(mockStore.getState().weather.data).toEqual(mockWeatherData);
  });

  it('shows an error if the city is not found', async () => {
    // Mock axios to reject with an error
    mockedAxios.get.mockRejectedValueOnce(new Error('City not found'));

    // Render the component
    render(
      <Provider store={mockStore}>
        <SearchBar />
      </Provider>
    );

    // Find the input and the search button
    const input = screen.getByPlaceholderText('Search for your prefered city...');
    const searchButton = screen.getByRole('button');

    // Type a city name and trigger search
    fireEvent.change(input, { target: { value: 'Invalid City' } });
    fireEvent.click(searchButton);

    // Wait for the error handling
    await waitFor(() => expect(toast.error).toHaveBeenCalledWith('An error occurred'));
  });
});
