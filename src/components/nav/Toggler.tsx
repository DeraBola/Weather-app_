
interface IToggler {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Toggler({ isDarkMode, setIsDarkMode }: IToggler) {
  return (
    <div className="w-24 h-[61px] ">
      <div className="w-full bg-white rounded-2xl shadow-md border h-[33px] relative">
        <div
          className={`${
            isDarkMode ? "left-[70%]" : "left-1"
          } w-6 h-6 top-[.2em] cursor-pointer rounded-full bg-black absolute transition-all`}
          onClick={() => setIsDarkMode(!isDarkMode)}
        ></div>
      </div>
      <p className="pl-2 text-md font-medium text-nowrap">Dark mode</p>
    </div>
  );
}
