import { FC } from "react";

interface IProps {
  header: string;
  description: string;
  number: number;
  haveBorder?: boolean;
}
const QuaterBox: FC<IProps> = ({
  header,
  description,
  number,
  haveBorder = true,
}) => {
  return (
    <div
      className={`rounded-md flex-1 px-8 relative flex flex-col justify-center py-16 ${
        haveBorder && "border"
      }`}
    >
      <h4 className="font-blod text-lg">{header}</h4>
      <p className="mt-2 text-slate-600">{description}</p>
      <span className="absolute text-gray-300 -top-10 right-8 text-[170px] font-bold -z-10">
        {number}
      </span>
    </div>
  );
};

export default QuaterBox;
