import { FC } from "react";

interface MyProps {
  header: string;
  description: string;
  number: number;
}
const QuaterBox: FC<
MyProps> = (MyProps) => {
  return (
    <div className="border rounded-md w-4/12 px-8 py-12 relative flex flex-col items-center">
      <h4 className="font-blod text-lg">{MyProps.header}</h4>
      <p className="mt-2 text-slate-600">{MyProps.description}</p>
      <span className="absolute text-gray-300 top-0 right-10 text-9xl font-bold -z-10">
        {MyProps.number}
      </span>
    </div>
  );
};

export default QuaterBox;
