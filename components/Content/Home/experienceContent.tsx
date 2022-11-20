import { IExperienceProps } from "../../ExperienceTimeline";

const experienceContent: { experiences: IExperienceProps[] } = {
  experiences: [
    {
      title: "Part-time Web Developer",
      company: {
        name: "Mindworks Interactive",
        url: "https://www.mindworks.xyz/",
      },
      dates: {
        start: "August 2022",
        end: "Present",
      },
      achievements: [
        <>
          Developed a customizable Vendor Self Registration Form to aid business
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
          Integrated QuickBooks & XERO API and webhook into the system which
          receives over thousand of usages each month.
        </>,
      ],
      techs: ["Nestjs", "Next.js", "React", "Django", "Stripe"],
      logo: "https://i.imgur.com/aCaRVRvb.png",
      angle: -20,
    },
    {
      title: "Intern Web Developer",
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
          Developed a customizable Vendor Self Registration Form to aid business
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
          Integrated QuickBooks & XERO API and webhook into the system which
          receives over thousand of usages each month.
        </>,
      ],
      techs: ["Tailwind", "Laravel", "Vue.js", "PHP"],
      logo: "https://i.imgur.com/sums4gxb.png",
      angle: 10,
    },
  ],
};

export default experienceContent;
