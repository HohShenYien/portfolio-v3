import { IExperienceProps } from "../../ExperienceTimeline";
import { NiceLink } from "../../Links";
import { Highlighter } from "../../Texts";

const experienceContent: { experiences: IExperienceProps[] } = {
  experiences: [
    {
      title: "Part-time Web Developer",
      company: {
        name: "Mindworks Interactive",
        url: "https://www.mindworks.xyz/",
        image: {
          id: "zggjjDe",
        },
      },
      dates: {
        start: "August 2022",
        end: "Present",
      },
      achievements: [
        <>
          Integrated Stripe payment into a growing food-ordering{" "}
          <NiceLink href="https://loopfoods.app/">web application</NiceLink> via
          API and webhooks
        </>,
        <>
          Started the migration of existing code base from Nest.js to TRPC and
          from React to Next.js
        </>,
      ],
      techs: [
        "Nestjs",
        "Next.js",
        "TRPC",
        "React",
        "Prisma",
        "Django",
        "Stripe",
      ],
      logo: "aCaRVRv",
      angle: -20,
    },
    {
      title: "Intern Web Developer",
      company: {
        name: "Supplycart Technology",
        url: "https://adam-procure.com/",
        image: {
          id: "FsDXdQX",
          format: "jpg",
        },
      },
      dates: {
        start: "July 2022",
        end: "November 2022",
      },
      achievements: [
        <>
          Developed a customizable{" "}
          <Highlighter text="Vendor Self Registration Form" /> to aid business
          users collecting info from their procurement vendors.
        </>,
        <>Reduced the loading time of the system by over 1 second.</>,
        <>
          Overcame immediate customer-blocking bugs and deploying fixes within
          30 minutes.
        </>,
        <>
          Improved the deployment process to optimize developer&apos;s
          experience.
        </>,
        <>
          Integrated <Highlighter text="QuickBooks & XERO" /> API and webhook
          into the system which receives over thousand of usages each month.
        </>,
      ],
      techs: ["Tailwind", "Laravel", "Vue.js", "PHP"],
      logo: "sums4gx",
      angle: 10,
    },
    {
      title: "Part-time Web Developer",
      company: {
        name: "Quintagen Tech",
        url: "https://www.quintagen.com/",
        image: {
          id: "neg4N96",
          format: "jpg",
        },
      },
      dates: {
        start: "August 2021",
        end: "June 2022",
      },
      achievements: [
        <>
          Built an event{" "}
          <NiceLink href="https://coffeeathome.quintagen.com" blank>
            web application
          </NiceLink>{" "}
          for Starbucks&rsquo; <Highlighter text="Coffee at Home" /> Event that
          receives more than 14k usages.
        </>,
        <>
          Built and maintained E-Commerce Websites with thousands of
          transactions monthly.
        </>,
        <>
          Involved in building an NFT-based{" "}
          <NiceLink href="https://ghosto.xyz">website</NiceLink>.
        </>,
      ],
      techs: ["Laravel", "Vue.js", "Wordpress"],
      logo: "xWB4yFR",
      angle: -5,
    },
  ],
};

export default experienceContent;
