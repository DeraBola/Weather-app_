import React from 'react'
import Toggler from './Toggler'
import SearchBar from './SearchBar/SearchBar'

interface INav {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Nav({isDarkMode,setIsDarkMode}:INav) {
  return (
    <div className="w-full py-8 flex justify-between items-center gap-9">
      <Toggler isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <SearchBar />
    </div>
  );
}
