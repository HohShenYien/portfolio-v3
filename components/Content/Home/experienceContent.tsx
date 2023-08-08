import { IExperienceProps } from "components/Experiences";
import { Highlighter } from "../../Texts";
import Link from "next/link";

const experienceContent: { experiences: IExperienceProps[] } = {
  experiences: [
    {
      title: "Web Developer",
      company: {
        name: "Mindworks Interactive",
        url: "https://www.mindworks.xyz/",
      },
      dates: {
        start: "August 2022",
        end: "March 2023",
      },
      achievements: [
        <>
          Developed a growing food-order{" "}
          <Link href="/projects?project=loopfoods">web application</Link>
          {"'"}s payment gateway using Stripe, facilitating over 70% of the{" "}
          <Link target="_blank" href="https://www.linkedin.com/company/eatloop">
            startup
          </Link>
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
          collaborated closely with designers to create user-friendly,
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
      type: "Part-Time",
    },
    {
      title: "Web Developer",
      company: {
        name: "Supplycart Technology",
        url: "https://adam-procure.com/",
      },
      dates: {
        start: "July 2022",
        end: "November 2022",
      },
      achievements: [
        <>
          Developed a customizable{" "}
          <Link href="/projects?project=vendor-registration-form">
            Vendor Self Registration Form
          </Link>{" "}
          to aid business users collecting info from their procurement vendors.
        </>,
        <>
          Reduced the loading time of the system by over{" "}
          <Highlighter>1 second</Highlighter>.
        </>,
        <>
          Overcame immediate customer-blocking bugs and deploying fixes within
          30 minutes.
        </>,
        <>
          Improved the deployment process to optimize developer&apos;s
          experience.
        </>,
        <>
          Integrated{" "}
          <Link href="/projects?project=quickbooks-integration">
            QuickBooks & XERO
          </Link>{" "}
          API and webhook into the system which receives over{" "}
          <Highlighter>thousands</Highlighter> of usages each month.
        </>,
      ],
      techs: ["Tailwind", "Laravel", "Vue.js", "PHP"],
      logo: "sums4gx",
      type: "Internship",
    },
    {
      title: "Web Developer",
      company: {
        name: "Quintagen Tech",
        url: "https://www.quintagen.com/",
      },
      dates: {
        start: "August 2021",
        end: "June 2022",
      },
      achievements: [
        <>
          Built an event{" "}
          <Link href="/projects?project=starbucks-coffee-at-home">
            web application
          </Link>{" "}
          for Starbucks&rsquo; <Highlighter>Coffee at Home</Highlighter> Event
          that receives more than 14k usages.
        </>,
        <>
          Built and maintained E-Commerce Websites with thousands of
          transactions monthly.
        </>,
        <>
          Involved in building an NFT-based{" "}
          <Link target="_blank" href="https://ghosto.xyz">
            website
          </Link>
          .
        </>,
      ],
      techs: ["Laravel", "Vue.js", "Wordpress"],
      logo: "xWB4yFR",
      type: "Part-Time",
    },
  ],
};

export default experienceContent;
