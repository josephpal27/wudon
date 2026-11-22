import WudonBanner from "@/components/WudonBanner";
import WudonHighlights from "@/components/WudonHighlights";
import WudonProductFeatures from "@/components/WudonProductFeatures";
import WudonProductApplications from "@/components/WudonProductApplications";
import { mdfFeaturesData } from "@/data/mdfFeaturesData";
import { hdhmrFeaturesData } from "@/data/hdhmrFeaturesData";
import { mdfApplicationsData } from "@/data/mdfApplicationsData";
import { hdhmrApplicationsData } from "@/data/hdhmrApplicationsData";

export default function Home() {
  return (
    <>
      <WudonBanner />
      <WudonHighlights />
      <WudonProductFeatures data={mdfFeaturesData} />
      <WudonProductApplications data={mdfApplicationsData} />
      <WudonProductFeatures data={hdhmrFeaturesData} reverse={true} />
      <WudonProductApplications data={hdhmrApplicationsData} />
    </>
  );
}
