import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getLocalTimeFromTimezone } from "../../helper/formatTime";
import { getDateFromWeatherData } from "../../helper/formatDate";

interface ILocationCard {
  isDarkMode: boolean;
}
export default function LocationCard({ isDarkMode }: ILocationCard) {

  const weatherData = useSelector((state: RootState) => state.weather.data);

  const localTime = weatherData ? getLocalTimeFromTimezone(weatherData.timezone) : "Invalid timezone";
  const weatherDate = weatherData ? getDateFromWeatherData(weatherData.dt) : "Invalid date";


  return (
    <div
      className={`${isDarkMode ? "bg-[#333] text-white" : "bg-white text-black transition-all"
        } w-full h-full flex justify-center items-center flex-col shadow-md rounded-2xl`}
    >
      <p className="text-4xl text-center font-bold">{weatherData?.name}</p>

      <div className="flex justify-center items-center flex-col">
        <p className="text-3xl font-extrabold">{localTime}</p>
        <p className="text-md font-medium">{weatherDate}</p>
      </div>
    </div>
  );
}
