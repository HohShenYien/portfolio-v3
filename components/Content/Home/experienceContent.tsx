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
        end: "March 2023",
      },
      achievements: [
        <>
          Developed a growing food-order{" "}
          <NiceLink href="https://loopfoods.app/">web application</NiceLink>
          {"'"}s payment gateway using Stripe, facilitating over 70% of the{" "}
          <NiceLink href="https://loopfoods.app/ https://www.linkedin.com/company/eatloop">
            startup
          </NiceLink>
          {"'"}s sales and generating more than RM 40k in just six months.
        </>,
        <>
          Contributed to the successful <Highlighter>migration</Highlighter> of
          Loop Foods{"'"} platform to Next.js and trpc, managing thousands of
          files and overseeing all aspects of storefront, backend API services,
          API webhooks, deployment management, and database structure
          management.
        </>,
        <>
          Collaborated effectively with cross-functional team members to drive
          Loop Foods{"'"} development, showcasing strong project management,
          problem-solving, and technical skills.
        </>,
        <>
          Leveraged strong <Highlighter>design skills</Highlighter> and
          collaborated closely with designers to user-friendly,
          mobile-responsive and highly functional UIs for Loop Foods
        </>,
      ],
      techs: [
        "Nestjs",
        "Next.js",
        "tRPC",
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
          id: "PzTC4q4",
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
          <Highlighter>Vendor Self Registration Form</Highlighter> to aid
          business users collecting info from their procurement vendors.
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
          Integrated <Highlighter>QuickBooks & XERO</Highlighter> API and
          webhook into the system which receives over thousand of usages each
          month.
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
          <NiceLink href="https://coffeeathome.quintagen.com">
            web application
          </NiceLink>{" "}
          for Starbucks&rsquo; <Highlighter>Coffee at Home</Highlighter> Event
          that receives more than 14k usages.
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
