import CoreTracks from "@/components/widgets/CoreTracks";
import Hero from "@/components/widgets/Hero";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";

export default function Home() {
  return (
    <>
    {/* Hero section */}
    <Hero />
    {/* Core Tracks Section */}
    <CoreTracks />
    {/* Specialized Tracks */}
    <SpecializedTracks />
    </>
  )
}
