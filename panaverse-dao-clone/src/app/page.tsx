import CoreTracks from "@/components/widgets/CoreTracks";
import Hero from "@/components/widgets/Hero";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";
import ProgramOutcome from "@/components/widgets/ProgramOutcome";

export default function Home() {
  return (
    <>
    {/* Hero section */}
    <Hero />
    {/* Core Tracks Section */}
    <CoreTracks />
    {/* Specialized Tracks */}
    <SpecializedTracks />
    {/* OutCome Section */}
    <ProgramOutcome />
    </>
  )
}
