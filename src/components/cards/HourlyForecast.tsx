import { IoMdSunny } from "react-icons/io";

interface IHourlyForecast {
  isDarkMode: boolean;
}
export default function HourlyForecast({ isDarkMode }: IHourlyForecast) {
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-[#333] text-white"
          : " bg-white text-black transition-all"
      }w-full rounded-xl shadow-md px-3 pt-6 h-full`}
    >
      <p className="text-center text-lg font-bold mb-5">Hourly Forecast:</p>

      <div className="w-full h-full flex justify-between px-3">
        <div
          className={`${
            isDarkMode
              ? "bg-[#2b2b2b] text-white border-0"
              : "bg-transparent text-black border"
          } w-[16%] py-6 shadow-md h-[75%] rounded-2xl transition-all `}
        >
          <p className="text-md  font-bold text-center">12:00</p>
          <div className="w-full py-3 flex justify-center items-center">
            <IoMdSunny size={100} color="gold" />
          </div>
          <p className="text-md py-3 font-bold text-center"> 22°C</p>
        </div>
        <div
          className={`${
            isDarkMode
              ? "bg-[#2b2b2b] text-white border-0"
              : "bg-transparent text-black border"
          } w-[16%] py-6 shadow-md h-[75%] rounded-2xl transition-all border`}
        >
          <p className="text-md  font-bold text-center">12:00</p>
          <div className="w-full py-3 flex justify-center items-center">
            <IoMdSunny size={100} color="gold" />
          </div>
          <p className="text-md py-3 font-bold text-center"> 22°C</p>
        </div>
        <div
          className={`${
            isDarkMode
              ? "bg-[#2b2b2b] text-white border-0"
              : "bg-transparent text-black border"
          } w-[16%] py-6 shadow-md h-[75%] rounded-2xl transition-all `}
        >
          <p className="text-md  font-bold text-center">12:00</p>
          <div className="w-full py-3 flex justify-center items-center">
            <IoMdSunny size={100} color="gold" />
          </div>
          <p className="text-md py-3 font-bold text-center"> 22°C</p>
        </div>
        <div
          className={`${
            isDarkMode
              ? "bg-[#2b2b2b] text-white border-0"
              : "bg-transparent text-black border"
          } w-[16%] py-6 shadow-md h-[75%] rounded-2xl transition-all`}
        >
          <p className="text-md  font-bold text-center">12:00</p>
          <div className="w-full py-3 flex justify-center items-center">
            <IoMdSunny size={100} color="gold" />
          </div>
          <p className="text-md py-3 font-bold text-center"> 22°C</p>
        </div>
        <div
          className={`${
            isDarkMode
              ? "bg-[#2b2b2b] text-white border-0"
              : "bg-transparent border text-black"
          } w-[16%] py-6 shadow-md h-[75%] rounded-2xl transition-all `}
        >
          <p className="text-md  font-bold text-center">12:00</p>
          <div className="w-full py-3 flex justify-center items-center">
            <IoMdSunny size={100} color="gold" />
          </div>
          <p className="text-md py-3 font-bold text-center"> 22°C</p>
        </div>{" "}
      </div>
    </div>
  );
}
