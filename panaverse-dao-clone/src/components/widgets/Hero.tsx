import Wraper from "@/components/shared/Wraper";
import Image from "next/image";
import HeroPoster from "@/assets/images/hero-poster.png";

const Hero = () => {
  return (
    <section>
      <Wraper>
        <div className="flex items-center">
          {/* Left Side */}
          <div className="flex-1">
            <h4 className="text-teal-800 font-semibold text-lg">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-6xl font-bold">Certified Web 3.0 and Metaverse Developer</h1>
            <p className="mt-6 text-lg text-slate-600">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <button className="text-white bg-[#00616C] rounded-full mt-9 font-semibold text-lg px-4 py-2">Learn More</button>
          </div>
          {/* Right Side */}
          <div className="flex-1">
            <Image src={HeroPoster} alt="Hero Poster" />
          </div>
        </div>
      </Wraper>
    </section>
  );
};

export default Hero;
