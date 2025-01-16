
interface IWidgets {
  value: string;
  condition: string;
}
export default function Widget({ condition, value }: IWidgets) {
  return (
    <div className="w-[48%] flex justify-between items-center flex-row lg:flex-col gap-2 lg:gap-0 p-5 h-[120px]">
      <p className="my-2">{value}</p>
      <p>{condition}</p>
    </div>
  );
}
