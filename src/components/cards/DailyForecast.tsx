import { IoMdSunny } from "react-icons/io";
import { IoPartlySunny, IoPartlySunnySharp } from "react-icons/io5";

interface IForecastCard {
  isDarkMode: boolean;
}

export default function DailyForecast({ isDarkMode }: IForecastCard) {
  const dailyForecastArr = [
    {
      icon: <IoPartlySunny size={30} color="gold" />,
      value: "20°C",
      day: "Friday, 1 Sep",
    },
    {
      icon: <IoPartlySunnySharp size={30} color="gold" />,
      value: "22°C",
      day: "Friday, 1 Sep",
    },
    {
      icon: <IoMdSunny size={30} color="gold" />,
      value: "27°C",
      day: "Friday, 1 Sep",
    },
    {
      icon: <IoPartlySunny size={30} color="gold" />,
      value: "20°C",
      day: "Friday, 1 Sep",
    },
  ];
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#333] text-white" : "bg-white text-black"
      } px-12 pt-5 rounded-2xl h-full transition-all`}
    >
      <p className="text-center text-lg font-bold mb-5">5 Days Forecast:</p>
      {dailyForecastArr.map((forecast) => (
        <div className="flex justify-between items-center p-4">
          <div>{forecast.icon}</div>
          <p className="">{forecast.value}</p>
          <p>{forecast.day}</p>
        </div>
      ))}
    </div>
  );
}
