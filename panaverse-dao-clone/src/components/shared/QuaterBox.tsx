import { FC } from "react";

const QuaterBox: FC<{
  heading: string;
  description: string;
  number: number;
}> = ({ heading, description, number }) => {
  return (
    <div className="border rounded-md w-4/12 px-8 py-12 relative">
      <h4 className="font-blod text-lg">{heading}</h4>
      <p className="mt-2 text-slate-600">{description}</p>
      <span className="absolute text-gray-300 top-0 right-10 text-9xl font-bold -z-10">
        {number}
      </span>
    </div>
  );
};

export default QuaterBox;
