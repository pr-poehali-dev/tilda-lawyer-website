import LawyerHero from "@/components/LawyerHero";
import LawyerServices from "@/components/LawyerServices";
import LawyerAbout from "@/components/LawyerAbout";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LawyerHero />
      <LawyerServices />
      <LawyerAbout />
    </div>
  );
};

export default Index;
