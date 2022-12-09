import { SectionContent, SectionLayout } from "../Layouts";
import { ExperienceTimeline } from "../ExperienceTimeline";
import headers from "../NavBars/MainNav/headers";

const ExperienceSection = () => {
  return (
    <SectionLayout title="WHERE I WORKED" id={headers[1].id}>
      <SectionContent>
        <ExperienceTimeline />
      </SectionContent>
    </SectionLayout>
  );
};

export default ExperienceSection;
