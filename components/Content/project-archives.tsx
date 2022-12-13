import { NiceLink } from "components/Links";
import { IProjectArchives } from "components/Projects";
import { Highlighter } from "components/Texts";

const projectArchives: IProjectArchives = {
  "2022": [
    {
      name: "Kommunity",
      type: "Hackathon Projects",
      descriptions: [
        <>
          This is our project from{" "}
          <NiceLink href="https://odysseyhackfest.com/">
            Odyssey Hackfest
          </NiceLink>
          . It is a one-stop community management mobile application with a
          focus on residents&apos; personal safety.
        </>,
        <>
          The app has features like <Highlighter>Event Management</Highlighter>,{" "}
          <Highlighter>Resident Management</Highlighter>,{" "}
          <Highlighter>Help Button</Highlighter>,{" "}
          <Highlighter>Shake to SOS</Highlighter> and more.
        </>,
        <>
          The project itself consists of{" "}
          <Highlighter>Prototype Design</Highlighter>,{" "}
          <Highlighter>Business Proposal</Highlighter>, and a{" "}
          <Highlighter>Working Prototype</Highlighter>. In the end, we managed
          to come out as champion of the hackathon🏆.
        </>,
      ],
      tags: ["Django", "React Native"],
      img: "hhAAMKM",
      github: "https://github.com/HohShenYien/OdysseyHackFest_Kommunity",
      location: "Asia Pacific University",
    },
    {
      name: "Vendor Registration Form",
      type: "Web Application Module",
      descriptions: [
        <>
          A <Highlighter>digital solution</Highlighter> in replacing traditional
          pen & paper forms for large companies in collecting & registering
          their vendors information.
        </>,
        <>
          This module features a <Highlighter>fully customizable</Highlighter>{" "}
          form like Google Form, but more! There are in total 13 available
          components, including form and displays with sortable sections.
        </>,
        <>
          It will then <Highlighter>create new entities</Highlighter> from the
          data collected while remaining fully fluid and dynamic.
        </>,
        <>
          I was responsible in developing the{" "}
          <Highlighter>form-related functionalities</Highlighter> of this
          module.
        </>,
      ],
      tags: ["Vue", "Laravel", "Tailwind"],
      img: "5p5XBWz",
      location: "SupplyCart Technology",
    },
    {
      name: "QuickBooks Integration",
      type: "Web Application Module",
      descriptions: [
        <>
          Refactored and built the codebase for better integration with
          different <Highlighter>accounting systems</Highlighter>.
        </>,
        <>
          This module allows customers to connect seamlessly and sync with data
          from QuickBooks platforms.
        </>,
        <>
          It includes the usage of both <Highlighter>WebHook</Highlighter> and
          <Highlighter>API</Highlighter> calls to allow two-way synchronization
          between ADAM and QuickBooks.
        </>,
      ],
      tags: ["Vue", "Laravel", "Tailwind"],
      img: "TkYgWGF",
      location: "SupplyCart Technology",
    },
    {
      name: "Pomodo App",
      type: "Desktop Application",
      descriptions: [
        <>
          An attempt to practise <Highlighter>Rust</Highlighter> and{" "}
          <Highlighter>Angular</Highlighter> by building a simple Pomodoro
          desktop app.
        </>,
        <>
          It contained basic timer and audio functions, and a persistent storage
          implemented with SQLite3.
        </>,
      ],
      tags: ["Angular", "Tauri", "Rust"],
      img: "R6tOWEc",
      github: "https://github.com/HohShenYien/pomodo",
      location: "Personal Project",
    },
  ],
  2021: [
    {
      name: "APAC Website",
      type: "Website",
      descriptions: [
        <>
          A SPA website built for my university club to display various
          information.
        </>,
      ],
      tags: ["React", "Next.js", "Chakra-ui"],
      img: "CFDBiPs",
      github: "apu-apac.netlify.app/",
      link: "https://apu-apac.netlify.app/",
      location: "Asia Pacific Analytics Club",
    },
    {
      name: "v2 Website",
      type: "Website",
      descriptions: [
        <>
          My second iteration in rebuilding my website after learning about Vue.
          Tried to design uniquely but ended up rather{" "}
          <Highlighter>superflous</Highlighter>.
        </>,
        <>
          It was a relatively large project to setup all the designs, and
          structure of the website. Sadly, I have migrated again before I fully
          utilize all functions.
        </>,
        <>
          However, it was an{" "}
          <Highlighter>amazing learning experience</Highlighter> that boosted up
          my skills.
        </>,
      ],
      tags: ["Vue", "Nuxt", "Vuetify"],
      img: "0wuU2uX",
      github: "https://github.com/HohShenYien/personal-blog",
      link: "https://v2.shenyien.cyou",
      location: "Personal Project",
    },
    {
      name: "APAC Mailer",
      type: "Desktop Application",
      descriptions: [
        <>
          A utility app that helps my club in{" "}
          <Highlighter>bulk sending emails</Highlighter> and certificates to
          event participants.
        </>,
        <>
          It started off with a pain point on sending emails with{" "}
          <Highlighter>customized attachment</Highlighter> in bulk. Most of the
          available online services require payment, and our club operates
          without any budget.
        </>,
        <>
          Meanwhile, Microsoft Words&apos; mailing is hard to operate, and
          requires <Highlighter>a lot of effort</Highlighter>.
        </>,
        <>Hence, this gave rise to the application.</>,
      ],
      tags: ["Vue", "Electron", "Vuetify", "Flask"],
      img: "bPSwnPS",
      github: "https://github.com/HohShenYien/pomodo",
      location: "Asia Pacific Analytics Club",
    },
    {
      name: "Starbucks - Coffee At Home",
      type: "Web Application",
      descriptions: [
        <>
          Coffee At Home is an experimental journey in Malaysia held by none
          other than <Highlighter>Starbucks</Highlighter>. As of 2023, more than
          14k Malaysians have participated in the event using this application.
        </>,
        <>
          It features a user-friendly event interface in guiding the users from
          all age range to complete their{" "}
          <Highlighter>coffee journeys</Highlighter>.
        </>,
        <>
          Beyond users, this application includes a real-time analysis{" "}
          <Highlighter>dashboard</Highlighter>
          and <Highlighter>management system</Highlighter> for the admins, as
          well as a station master system.
        </>,
      ],
      tags: ["Vue", "Vuetify", "Laravel"],
      img: "B5yPtCS",
      link: "https://coffeeathome.quintagen.com/",
      location: "Quintagen",
    },
    {
      name: "Website Editor",
      type: "Web Application",
      descriptions: [
        <>
          Started off as an E-Album builder, developed into a{" "}
          <Highlighter>wix-like</Highlighter> template based website editor.
        </>,
        <>
          It features a dynamic, online{" "}
          <Highlighter>personal webpage editor</Highlighter> with a straight
          forward user interface to allow users customizing their own event
          website easily.
        </>,
        <>
          I was responsible for the entire module, and it was also my very{" "}
          <Highlighter>first</Highlighter> Laravel Vue project, while the codes
          were relatively messy, all the functionalities work perfectly.
        </>,
      ],
      tags: ["Vue", "Laravel", "Vuetify"],
      img: "NBYYp7q",
      link: "https://oye.events/",
      location: "Own Your Events",
    },
    {
      name: "Nutribot",
      type: "Desktop Application",
      descriptions: [
        <>
          A chatbot that recommends on{" "}
          <Highlighter>users&apos; diet</Highlighter> based on disease names and
          symptoms.
        </>,
        <>
          It stemmed from my dislike towards online chatbot tools, so I decided
          to implement it through coding. As a group, we built our own dataset,
          and implemented our chatbot system from scratch.
        </>,
        <>Made for my universiy assignment with own chatbot implementation.</>,
      ],
      tags: ["Python", "PyQT", "Tensorflow", "NLTK"],
      img: "Act0oub",
      github:
        "https://github.com/HohShenYien/university_assignments/tree/main/year%201/sem%202/IAI",
      location: "Asia Pacific University",
    },
    {
      name: "Pomodoro Timer",
      type: "Desktop Application",
      descriptions: [
        <>
          I was looking for a good Pomodoro tool for my laptop back then, and I
          could not find a simple one.
        </>,
        <>
          Long story short, I decided to build one myself. It&apos;s not the
          best Pomodoro app out there, but it does the perfect job for me.
        </>,
      ],
      tags: ["C++", "Qt5"],
      img: "fL6TyI3",
      github: "https://github.com/HohShenYien/Pomodoro-Timer",
      location: "Personal Project",
    },
  ],
  2020: [
    {
      name: "Pomodoro Focus",
      type: "Mobile Application",
      descriptions: [
        <>
          A Pomodoro Timer application. It was the final assignment for{" "}
          <NiceLink href="https://cs50.harvard.edu/x/2020/">CS50 2020</NiceLink>
        </>,
        <>
          Decided to pick this topic due to my fondness towards Pomodoro system
          back in the days.
        </>,
      ],
      tags: ["Java", "Android"],
      img: "kUUpawE",
      github: "https://github.com/HohShenYien/Pomodoro_Focus",
      location: "CS50",
    },
    {
      name: "Pokedex",
      type: "Mobile Application",
      descriptions: [
        <>
          A simple Pokedex Android application which was my first attempt in
          building Android app.
        </>,
        <>
          It was based on the Android track conducted from{" "}
          <NiceLink href="https://cs50.harvard.edu/x/2020/">CS50 2020</NiceLink>
          .
        </>,
      ],
      tags: ["Java", "Android"],
      img: "x4DuDJk",
      github: "https://github.com/HohShenYien/Pokedex",
      location: "CS50",
    },
  ],
};

export default projectArchives;
