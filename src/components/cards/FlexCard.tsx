import ForecastCard from "./ForecastCard";
import LocationCard from "./LocationCard";

interface IFlexCard {
  isDarkMode: boolean;
}
export default function FlexCard({isDarkMode}: IFlexCard) {
  return (
    <>
      <div className={` w-full h-80 my-5 lg:my-12 flex lg:flex-row flex-col gap-8 lg:gap-0 justify-between items-center`}>
        <div className={`lg:w-[35%] w-full h-full rounded-lg`}>
          <LocationCard isDarkMode={isDarkMode} />
        </div>
        <div className={`lg:w-[60%] w-full h-full  rounded-2xl`}>
          <ForecastCard isDarkMode={isDarkMode} />
        </div>
      </div>
    </>
  );
}
