import { FC } from "react";

interface MyProps {
  header: string;
  description: string;
  number: number;
}
const QuaterBox: FC<
MyProps> = (MyProps) => {
  return (
    <div className="border rounded-md flex-1 px-8 relative flex flex-col justify-center py-16">
      <h4 className="font-blod text-lg">{MyProps.header}</h4>
      <p className="mt-2 text-slate-600">{MyProps.description}</p>
      <span className="absolute text-gray-300 -top-10 right-8 text-[170px] font-bold -z-10">
        {MyProps.number}
      </span>
    </div>
  );
};

export default QuaterBox;
