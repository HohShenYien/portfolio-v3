import { IconButton, Link } from "@chakra-ui/react";
import { ExternalLink, Github } from "lucide-react";

interface IProjectLinksProps {
  github?: string;
  link?: string;
}

const ProjectLinks = ({ github, link }: IProjectLinksProps) => {
  return (
    <>
      {github && (
        <Link href={github} target="_blank">
          <IconButton
            icon={<Github />}
            aria-label="GitHub"
            variant="unstyled"
            color="brand.400"
            _hover={{ color: "brand.200" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          />
        </Link>
      )}
      {link && (
        <Link href={link} target="_blank">
          <IconButton
            icon={<ExternalLink />}
            aria-label="External Link"
            variant="unstyled"
            color="brand.400"
            _hover={{ color: "brand.200" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          />
        </Link>
      )}
    </>
  );
};

export default ProjectLinks;
