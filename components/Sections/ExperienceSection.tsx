import { SectionContent, SectionLayout } from "../Layouts";
import { ExperienceTimeline } from "../ExperienceTimeline";

const ExperienceSection = () => {
  return (
    <SectionLayout title="WORK EXPERIENCE">
      <SectionContent>
        <ExperienceTimeline />
      </SectionContent>
    </SectionLayout>
  );
};

export default ExperienceSection;
