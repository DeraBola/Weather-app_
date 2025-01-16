import ForecastCard from "./ForecastCard";
import LocationCard from "./LocationCard";

interface IFlexCard {
  isDarkMode: boolean;
}
export default function FlexCard({isDarkMode}: IFlexCard) {
  return (
    <>
      <div className={` w-full h-80 my-12 flex justify-between items-center`}>
        <div className={`w-[35%] h-full rounded-lg`}>
          <LocationCard isDarkMode={isDarkMode} />
        </div>{" "}
        <div className={`w-[60%] h-full  rounded-2xl`}>
          <ForecastCard isDarkMode={isDarkMode} />
        </div>
      </div>

      {/* <div className={` w-full h-80 my-12 flex justify-between items-center`}>
        <div className={`w-[30%] h-full rounded-2xl shadow-md`}>
          <DailyForecast isDarkMode={isDarkMode} />
        </div>{" "}
        <div className={`w-[65%] h-full`}>
          <HourlyForecast isDarkMode={isDarkMode} />
        </div>
      </div> */}


    </>
  );
}
