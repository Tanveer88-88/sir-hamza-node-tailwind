import Wraper from "@/components/shared/Wraper";
import QuaterBox from "@/components/shared/QuaterBox";
import Image from "next/image";

//Images
import AiImg from "@/assets/images/ai.png";
import Web3Img from "@/assets/images/web3_meta.png";


export const programsData = [
  {
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet.",
    image: Web3Img,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "MV-361:Developing Planet-Scale Open Virtual and Augmented Metaverse Experience",
        number: 5,
      },
    ],
  },
  {
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuces on building and deploying intelligent APIs using OpenAI and building custom Derep Learning Tenserflow models.",
    image: AiImg,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AI-351: Developing Planet-scale Intelligent APIs and Pythone Programming.",
        number: 4,
      },
      {
        header: "Quarter IV",
        description: "AI-361: Deep Learning and MLOPS",
        number: 5,
      },
    ],
  },
];

const SpecializedTracks = () => {
  return (
    <section>
      <Wraper>
        {/* Header */}
        <div>
          <h2 className="text-5xl font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-xl text-slate-600 max-w-screen-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>

        <div className="mt-10 flex gap-x-6 gap-y-8">
          {/* Content Left */}
          <div className="shadow-xl rounded-xl border border-slate-200 py-8 px-8 basis-8/12">
            <h4 className="text-primary text-lg font-medium">
              Specialized Program:
            </h4>
            <h3 className="text-2xl font-bold">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h3>
            <p className="text-lg text-slate-600 mt-2">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <button className="text-primary text-xl mt-4 underline flex gap-x-2 items-end">
              learn more
              <svg
                className="mb-1.5"
                width="10"
                height="13"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div className="flex gap-4 mt-8">
              <QuaterBox
                description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                header="Quarter IV"
                number={4}
                haveBorder={false}
              />
              <QuaterBox
                description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                header="Quarter V"
                number={5}
                haveBorder={false}
              />
            </div>
          </div>
          {/* Content Right */}
          <div className="px-4 py-6 bg-slate-100 basis-4/12 space-y-4">
            {programsData.map((item, i) => (
              <div key={i} className="flex gap-x-4 items-center cursor-pointer">
                <div className="flex-shrink-0 w-36">
                  {/* <div className="w-20 h-16 rounded bg-red-300"></div> */}
                  <Image src={item.image} alt={item.header} className={"object-cover rounded-md h-24"}/>
                </div>
                <div>
                  <h4 className="text-primary font-medium">
                    Specialized Program
                  </h4>
                  <h3 className="text-xl font-semibold">
                   {item.header}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wraper>
    </section>
  );
};

export default SpecializedTracks;
