import { SectionContent, SectionLayout } from "../Layouts";
import { ExperienceTimeline } from "../ExperienceTimeline";

const ExperienceSection = () => {
  return (
    <SectionLayout title="WHERE I WORKED">
      <SectionContent>
        <ExperienceTimeline />
      </SectionContent>
    </SectionLayout>
  );
};

export default ExperienceSection;
