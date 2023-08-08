import { IProjectArchives } from "components/Projects";
import { Highlighter } from "components/Texts";
import Link from "next/link";

const projectArchives: IProjectArchives = {
  "2023": [
    {
      name: "BizFlow",
      type: "Hackathon",
      descriptions: [
        <>
          BizFlow is an AI-Powered (using ChatGPT API){" "}
          <Highlighter>data intelligence system</Highlighter>
          submitted for{" "}
          <Link href="https://jomhack.com/impacthack/" target="_blank">
            ImpactHack 2023
          </Link>{" "}
          Hackathon that we won as <Highlighter>champion</Highlighter>.
        </>,
        <>
          Its goal was to empower SMEs by allowing them to integrate their data
          sources from various platforms for the AI to learn from. Using the
          knowledge, FlowAI will be able to provide advice and recommendations
          to the business owners, acting as a{" "}
          <Highlighter>personal assistant</Highlighter>.
        </>,
        <>
          We even integrated <Highlighter>Stable Diffusion</Highlighter> and
          Video Generation into the system
        </>,
        <>
          It was even featured on the{" "}
          <Link
            href="https://www.thestar.com.my/news/education/2023/07/30/winning-solution-for-smes"
            target="_blank"
          >
            local news
          </Link>
          .
        </>,
      ],
      tags: ["Next.js", "Flask", "AI", "ChatGPT"],
      img: "Kmau3Y1",
      imgFormat: "jpg",
      github: "https://github.com/DoBetter-Malaysia/bizflow-impacthack",
      location: "Asia Pacific University",
      slug: "bizflow",
    },
    {
      name: "Caringly",
      type: "Web Application",
      descriptions: [
        <>
          Caringly conveys the message to{" "}
          <Highlighter>{'"Care for those whom you love"'}</Highlighter>.
        </>,
        <>
          It is a web application that enables users to{" "}
          <Highlighter>monitor</Highlighter> posts of their closed {"one's"}{" "}
          social media accounts. If any depression or suicidal signs are found
          in their posts, the users will be notified via an email.
        </>,
        <>
          Beyond a mere web project, it also includes{" "}
          <Highlighter>data science</Highlighter> portion where I built a deep
          learning model using bi-LSTM with{" "}
          <Link
            href="https://www.kaggle.com/datasets/hohshenyien/fyp-dataset"
            target="_blank"
          >
            dataset
          </Link>{" "}
          collected from Reddit.
        </>,
        <>
          It was submitted as part of my Final Year Project to my Computer
          Science Degree.
        </>,
      ],
      tags: ["Next.js", "Flask", "AI", "Deep Learning"],
      img: "VdTdB7h",
      imgFormat: "jpg",
      github: "https://github.com/HohShenYien/caringly",
      location: "Asia Pacific University",
      slug: "caringly",
    },
    {
      name: "Velocap",
      type: "Hackathon",
      descriptions: [
        <>
          Velocap is an AI-driven{" "}
          <Highlighter>venture capital management software</Highlighter>{" "}
          designed to automate and optimize investments through data-driven
          decision-making.
        </>,
        <>
          We combined our web development skill with data science knowledge to
          integrate 3 models into the system. This is a prototype system that we
          developed during the 3 days 2 nights UM Hackathon, which we won.
        </>,
        <>
          It was featured in the local{" "}
          <Link href="https://www.thestar.com.my/news/education/2023/06/25/double-win-for-apu">
            news
          </Link>
        </>,
      ],
      tags: ["Next.js", "Flask", "AI", "SQL", "BingAI"],
      img: "RhvTpbU",
      imgFormat: "jpg",
      github: "https://github.com/DoBetter-Malaysia/velocap-web-umhack",
      location: "Asia Pacific University",
      slug: "velocap",
    },
    {
      name: "Next Power Starter",
      type: "Web Project",
      descriptions: [
        <>
          Next Power Starter is an optionated Next.js starter template with
          <Highlighter>flexibility</Highlighter> &{" "}
          <Highlighter>ease of use</Highlighter> in mind.
        </>,
        <>
          I always find myself needing to setup the project in the same way, and
          often times, reusing the same structures and types. Hence, {"I've "}
          put together the common configurations into this starter template
          using my favorite libraries.
        </>,
      ],
      tags: ["React", "Next.js", "Mantine", "Tailwind"],
      img: "OODaChW",
      github: "https://github.com/HohShenYien/next-power-starter",
      location: "Asia Pacific University",
      slug: "next-power-starter",
    },
    {
      name: "InstaNext",
      type: "Web Application",
      descriptions: [
        <>
          This is a project for my blog series{" "}
          <Link
            target="_blank"
            href="https://blogs.shenyien.cyou/series/insta-next"
          >
            Fullstack Instagram Clone with Next.js
          </Link>
        </>,
        <>
          While Next.js is a popular framework for frontend, the number of
          fullstack Next.js projects are still relatively few, so I created this
          series to introduce Next.js to more people.
        </>,
        <>
          Unlike other tutorials that only cover a few concepts, this series
          features complete <Highlighter>step-by-step tutorials</Highlighter>{" "}
          covering concepts like Database, REST APIs, Authentication and
          frontend.
        </>,
      ],
      tags: ["React", "Next.js", "Prisma", "Mantine", "Tailwind"],
      img: "huqnhVb",
      imgFormat: "jpg",
      github: "https://github.com/HohShenYien/insta-next",
      link: "https://insta-next-alpha.vercel.app/",
      location: "Asia Pacific University",
      slug: "instanext",
    },
    {
      name: "Loopfoods",
      type: "Web Application",
      descriptions: [
        <>
          This is an e-commerce website built from scratch for a{" "}
          <Link target="_blank" href="https://www.linkedin.com/company/eatloop">
            delivery service startup
          </Link>
          .
        </>,
        <>
          It is a very comprehensive application, consisting of modules related
          to delivery, food information, admin panel, payment and nutritions.
        </>,
        <>
          Due to the startup nature, I had to participate in basically{" "}
          <Highlighter>every part of it</Highlighter>, from backend, frontend to
          deployment. There were times when I as a part-timer had to take lead
          for the project itself. Thus, this was quite a great experience for
          me.
        </>,
        <>
          Nevertheless, as the startup ran out of budget, the operation is
          closed down.
        </>,
        <>By the way, tRPC as backend is a really interesting idea.</>,
      ],
      tags: ["React", "Next.js", "tRPC", "Mantine", "Docker"],
      img: "rJvO6wj",
      imgFormat: "jpg",
      location: "Mindworks",
      slug: "loopfoods",
    },
  ],
  "2022": [
    {
      name: "Kommunity",
      type: "Hackathon Projects",
      descriptions: [
        <>
          This is our project from{" "}
          <Link target="_blank" href="https://odysseyhackfest.com/">
            Odyssey Hackfest
          </Link>
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
      img: "jxxysqw",
      imgFormat: "jpg",
      github: "https://github.com/HohShenYien/OdysseyHackFest_Kommunity",
      location: "Asia Pacific University",
      slug: "kommunity",
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
      slug: "vendor-registration-form",
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
      slug: "quickbooks-integration",
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
      slug: "pomodo-app",
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
      slug: "apac-website",
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
      github: "https://github.com/HohShenYien/portfolio-v2",
      link: "https://v2.shenyien.cyou",
      location: "Personal Project",
      slug: "v2-website",
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
      slug: "apac-mailer",
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
      slug: "starbucks-coffee-at-home",
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
      slug: "website-editor",
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
      slug: "nutribot",
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
      slug: "pomodoro-timer",
    },
  ],
  2020: [
    {
      name: "Pomodoro Focus",
      type: "Mobile Application",
      descriptions: [
        <>
          A Pomodoro Timer application. It was the final assignment for{" "}
          <Link target="_blank" href="https://cs50.harvard.edu/x/2020/">
            CS50 2020
          </Link>
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
      slug: "pomodoro-focus",
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
          <Link target="_blank" href="https://cs50.harvard.edu/x/2020/">
            CS50 2020
          </Link>
          .
        </>,
      ],
      tags: ["Java", "Android"],
      img: "x4DuDJk",
      github: "https://github.com/HohShenYien/Pokedex",
      location: "CS50",
      slug: "pokedex",
    },
  ],
};

export default projectArchives;
