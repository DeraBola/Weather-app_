/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { setWeatherData } from '../../../redux/features/weatherSlice';
import SearchWeatherBtn from '../CurrentLocationBtn';
import { toast } from 'react-toastify';


export default function SearchBar() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("Lagos");
  // const [weatherData, setWeatherData] = useState(null);
  const [, setError] = useState<string | null>(null);

  const apiKey = "8cd1919d376db1b62b3b0a79266b0730"

  const handleSearch = async () => {
    if (!city.trim()) return; // Skip if the city is empty
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      // setWeatherData(response.data);
      dispatch(setWeatherData(response?.data));
      setError(null);
    } catch (err) {
      console.log(err);
      const axiosError = err as AxiosError<any>; 
      toast.error(axiosError?.response?.data?.message || "An error occurred");
      setError("City not found. Please try again.");
    }
  };

  // Debounce Effect for City Input
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      handleSearch();
    }, 500); // Delay of 500ms

    return () => clearTimeout(debounceTimeout);
  }, [city]);

  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-[70%] bg-white rounded-3xl relative border shadow-md h-16">
        <FaSearch color="black" size={30} className='absolute top-3 left-3' />
        <input
          type="search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='w-full h-full bg-transparent rounded-3xl focus:outline-none pl-16'
          placeholder="Search for your prefered city..."
          id=""
        />
      </div>
      <SearchWeatherBtn onClick={() => handleSearch()} />
    </div>
  );
}
