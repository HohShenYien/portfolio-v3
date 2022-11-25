import { SectionContent, SectionLayout } from "../Layouts";
import { SkillGrid } from "../Skills";

const SkillSection = () => {
  return (
    <SectionLayout title="WHAT I KNOW">
      <SectionContent>
        <SkillGrid />
      </SectionContent>
    </SectionLayout>
  );
};

export default SkillSection;
