import { useState } from "react";
import { FiSunrise, FiSunset } from "react-icons/fi";
import Widget from "./Widget";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { getLocalTimeFromTimezone } from "../../helper/formatTime";

interface IForecastCard {
  isDarkMode: boolean;
}

export default function ForecastCard({ isDarkMode }: IForecastCard) {
  const weatherData = useSelector((state: RootState) => state.weather.data);

  // Step 1: State for temperature unit (Celsius or Fahrenheit)
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

  // Step 2: Function to convert Celsius to Fahrenheit
  const convertToFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32;

  // Step 3: Convert temperatures based on the selected unit
  const temperature = unit === 'metric' ? weatherData?.main?.temp ?? 0 : convertToFahrenheit(weatherData?.main?.temp ?? 0);
  const feelsLike = unit === 'metric' ? weatherData?.main?.feels_like ?? 0 : convertToFahrenheit(weatherData?.main?.feels_like ?? 0);
  

  const localSunriseTime = weatherData ? getLocalTimeFromTimezone(weatherData?.sys?.sunrise) : "Invalid timezone";
  const localSunsetTime = weatherData ? getLocalTimeFromTimezone(weatherData?.sys?.sunset) : "Invalid timezone";

  const WeatherIcon = ({ iconCode }: { iconCode: string }) => {
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    return <img src={iconUrl} alt="Weather Icon" className="w-full h-full" />;
  };

  const widgetsArr = [
    {
      value: `${weatherData?.main?.humidity}`,
      condition: "Humidity",
    },
    {
      value: `${weatherData?.wind?.speed}`,
      condition: "Speed",
    },
  ];

  const iconCode = weatherData?.weather[0]?.icon ?? '01d';

  // Step 4: Toggle function to switch between Celsius and Fahrenheit
  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#333] text-white" : "bg-white text-black"
      } transition-all w-full  shadow-md rounded-2xl flex lg:flex-row flex-col justify-between items-center p-3`}
    >
      <div className="w-[33%] flex justify-center gap-8 items-center flex-col">
        <div>
          <p className="lg:text-4xl text-2xl font-extrabold" onClick={toggleUnit}>
            {temperature}°{unit === 'metric' ? 'C' : 'F'}
          </p>
          <p className="lg:text-md text-sm font-extrabold">Feels like: {feelsLike}°{unit === 'metric' ? 'C' : 'F'}</p>
        </div>

        <div className="flex justify-center items-center gap-5">
          <div>
            <FiSunrise size={35} />
          </div>

          <div>
            <p className="text-sm">Sunrise</p>
            <p className="text-xs">{localSunriseTime}</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5">
          <div>
            <FiSunset size={35} />
          </div>

          <div>
            <p className="text-sm">SunSet</p>
            <p className="text-xs">{localSunsetTime}</p>
          </div>
        </div>
      </div>

      <div className="lg:w-[33%] w-full flex-col flex justify-center items-center">
        <div className="flex items-center justify-center w-24 h-24">
          <WeatherIcon iconCode={iconCode} />
        </div>
        <p className="text-2xl text-center font-bold lg:mt-6 mt-0 text-nowrap">{weatherData?.weather[0]?.description}</p>
      </div>

      <div className="lg:w-[33%] w-full flex justify-between p-2 flex-wrap">
        {widgetsArr.map((widget) => (
          <Widget value={widget.value} condition={widget.condition} />
        ))}
      </div>
    </div>
  );
}
