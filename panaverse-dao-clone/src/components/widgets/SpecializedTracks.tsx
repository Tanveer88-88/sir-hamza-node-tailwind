import Wraper from "@/components/shared/Wraper";

const SpecializedTracks = () => {
  return (
    <section>
      <Wraper>
        {/* Header */}
        <div>
          <h2 className="text-5xl font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-xl text-slate-600 max-w-lg">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>

        <div className="mt-10">
          {/* Content Left */}
          <div className="shadow-xl rounded-xl border border-slate-200 py-8 px-8">
            <h4 className="text-teal-700 text-lg">Specialized Tracks:</h4>
            <h3 className="text-2xl font-bold">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h3>
            <p className="text-lg text-slate-600 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda possimus fugit placeat. Magnam vitae vero ut esse sint
              exercitationem corporis vel itaque quas at necessitatibus nemo
              dignissimos, doloremque consequuntur repudiandae.
            </p>
            <button className="text-teal-700 text-xl mt-4 underline flex gap-x-2 items-end">
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
          </div>
          {/* Content Right */}
        </div>
      </Wraper>
    </section>
  );
};

export default SpecializedTracks;
