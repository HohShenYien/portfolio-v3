import { SectionContent, SectionLayout } from "../Layouts";
import headers from "../NavBars/MainNav/headers";
import { SkillGrid } from "../Skills";

const SkillSection = () => {
  return (
    <SectionLayout title="WHAT I USE" id={headers[3].id}>
      <SectionContent>
        <SkillGrid />
      </SectionContent>
    </SectionLayout>
  );
};

export default SkillSection;
