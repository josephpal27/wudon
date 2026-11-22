import WudonBanner from "@/components/home/WudonBanner";
import WudonHighlights from "@/components/home/WudonHighlights";
import WudonProductFeatures from "@/components/home/WudonProductFeatures";
import WudonProductApplications from "@/components/home/WudonProductApplications";
import Compliances from "@/components/home/Compliances";
import { mdfFeaturesData } from "@/data/mdfFeaturesData";
import { hdhmrFeaturesData } from "@/data/hdhmrFeaturesData";
import { mdfApplicationsData } from "@/data/mdfApplicationsData";
import { hdhmrApplicationsData } from "@/data/hdhmrApplicationsData";

export default function Home() {
  return (
    <>
      <WudonBanner />
      <WudonHighlights />
      <WudonProductFeatures data={mdfFeaturesData} id="mdf" />
      <WudonProductApplications data={mdfApplicationsData} />
      <WudonProductFeatures data={hdhmrFeaturesData} id="hdhmr" reverse={true} />
      <WudonProductApplications data={hdhmrApplicationsData} />
      <Compliances />
    </>
  );
}
