import Wraper from "@/components/shared/Wraper";
import Button from "@/components/shared/Button";
import QuaterBox from "@/components/shared/QuaterBox";

const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="mt-16 lg:mt-28">
      <Wraper>
        {/* Content */}
        <div className="max-w-screen-md">
          <h4 className="text-teal-700 font-semibold text-lg mt-4">
            Program of Studies
          </h4>
          <h2 className="text-5xl font-bold whitespace-pre-line">{header}</h2>
          <p className="mt-3 text-xl text-slate-600 max-w-lg">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="mt-4">
            <Button text="Learn More" />
          </div>
        </div>
        {/*Boxes  */}
        <div className="my-20 flex flex-col sm:flex-row gap-x-4">
          <QuaterBox
            heading="Quarter I"
            description="CS-101: Object-Oriented Programming using TypeScript"
            number={1}
          />
          <QuaterBox
            heading="Quarter II"
            description="CS-101: Object-Oriented Programming using TypeScript"
            number={2}
          />
          <QuaterBox
            heading="Quarter III"
            description="CS-101: Object-Oriented Programming using TypeScript"
            number={3}
          />
        </div>
      </Wraper>
    </section>
  );
};

export default CoreTracks;
