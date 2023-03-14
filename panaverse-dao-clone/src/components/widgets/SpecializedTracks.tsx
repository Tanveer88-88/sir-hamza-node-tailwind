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

        {/* Content Left */}
        <div className="bg-white shadow-xl rounded-xl border border-slate-200 py-8 px-8">
            <h4>Tagline</h4>
            <h3>Headers</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda possimus fugit placeat. Magnam vitae vero ut esse sint exercitationem corporis vel itaque quas at necessitatibus nemo dignissimos, doloremque consequuntur repudiandae.</p>
            <button>learn more</button>
        </div>
        {/* Content Right */}
      </Wraper>
    </section>
  );
};

export default SpecializedTracks;
