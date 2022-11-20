import { SectionContent, SectionLayout } from "../Layouts";
import { Project } from "../Projects";

const ProjectSection = () => {
  return (
    <SectionLayout title="MY PROJECTS">
      <SectionContent>
        <Project />
      </SectionContent>
    </SectionLayout>
  );
};

export default ProjectSection;
