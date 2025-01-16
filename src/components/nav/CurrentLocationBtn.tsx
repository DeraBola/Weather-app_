
interface ISearchWeatherBtn{
  onClick: () => void;
}

export default function SearchWeatherBtn({onClick}: ISearchWeatherBtn) {
  return (
    <button onClick={onClick} className='rounded-3xl w-72 h-16 bg-green-500 text-white'>Search Weather</button>
  )
}
