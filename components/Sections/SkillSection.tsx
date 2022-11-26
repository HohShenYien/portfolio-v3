import { SectionContent, SectionLayout } from "../Layouts";
import { SkillGrid } from "../Skills";

const SkillSection = () => {
  return (
    <SectionLayout title="WHAT I USE">
      <SectionContent>
        <SkillGrid />
      </SectionContent>
    </SectionLayout>
  );
};

export default SkillSection;
