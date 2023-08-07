import { SectionContent, SectionLayout } from "../Layouts";
import headers from "../NavBars/MainNav/headers";
import { Experiences } from "components/Experiences";

const ExperienceSection = () => {
  return (
    <SectionLayout title="WHERE I WORKED" id={headers[1].id} minH={"90vh"}>
      <SectionContent>
        <Experiences />
      </SectionContent>
    </SectionLayout>
  );
};

export default ExperienceSection;
