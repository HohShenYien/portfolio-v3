import { HStack, Image, Link } from "@chakra-ui/react";
import { footerContent } from "../Content";

const FooterSocialLinks = () => {
  return (
    <HStack spacing={{ lg: 3, base: 5 }}>
      {footerContent.socials.map((social) => {
        return (
          <Link key={social.icon} href={social.url} target="_blank">
            <Image
              src={`/images/social-icons/${social.icon}.svg`}
              alt={social.icon}
              h={{ lg: 8, base: 10 }}
              w={{ lg: 8, base: 10 }}
              transition="all ease-in 150ms"
              _hover={{
                filter: "brightness(1.4)",
              }}
            />
          </Link>
        );
      })}
    </HStack>
  );
};

export default FooterSocialLinks;
