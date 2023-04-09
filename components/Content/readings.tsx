import { NiceLink } from "components/Links";
import { IReading } from "components/Readings";

const readings: {
  current: Record<"new" | "reading" | "completed", IReading[]>;
  past: IReading[];
} = {
  current: {
    new: [
      {
        title: "Spring Microservices in Action",
        author: "John & Illary",
        link: "https://www.manning.com/books/spring-microservices-in-action-second-edition",
        image: {
          id: "uhgl69v",
          format: "png",
        },
        description: [
          <>
            After reading about Spring, I felt an urge to explore it further. At
            the same time, I have yet to learn about Microservices, so this book
            came into my eyes.
          </>,
        ],
        category: "Programming",
      },
    ],
    reading: [
      {
        title: "Effective TypeScript",
        author: "Dan Vanderkam",
        link: "https://effectivetypescript.com/",
        image: {
          id: "IJpmyeK",
          format: "jpg",
        },
        description: [
          <>
            Being a big fan for TypeScript, I always feel troubled for not being
            able to exercise TypeScript to its full potential.
          </>,
          <>
            I came across this book when googling, and since Animal Books is
            usually good, I just keep it on the list.
          </>,
        ],
        category: "Programming",
      },
      {
        title: "C# Programming Yellow Book",
        author: "Rob Miles",
        link: "http://www.csharpcourse.com/",
        image: {
          id: "aMhooRG",
          format: "png",
        },
        description: [
          <>
            Seeing how people said C# is like improved Java makes me curious
            about exploring it. I also wanted to prepare in learning .Net soon.
          </>,
        ],
        category: "Programming",
      },
      {
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        link: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321",
        image: {
          id: "zaWlStc",
        },
        description: [
          <>
            I started reading this book from Coding Horror&apos;s{" "}
            <NiceLink href="https://blog.codinghorror.com/recommended-reading-for-developers/">
              recommendation
            </NiceLink>
            . Partly also due to my lack of knowledge in terms of larger scale
            data management.
          </>,
          <>
            However, I can&apos;t deny that this book is very in-depth,
            difficult and some parts cryptic to me, so, my progress on this book
            is rather slow.
          </>,
        ],
        category: "Programming",
      },
    ],
    completed: [
      {
        title: "Practical Object-Oriented Design",
        author: "Sandi Metz",
        link: "https://www.poodr.com/",
        image: {
          id: "t0tKSQn",
          format: "jpg",
        },
        description: [
          <>
            While I did learn OOP in the university, but I always felt that it
            is not enough. There are still many concepts and best practices that
            I am not familiar with. I saw this being recommended on Reddit, so I
            thought why not?
          </>,
          <>
            My understanding towards OOP did improve a lot after reading it.
            Things that I didn{"'"}t really think or know before like
            dependencies, message passing and stubs became so much clearer after
            reading it.
          </>,
          <>
            The only drawback I could say is the usage of Ruby which didn{"' "}
            support all OOP features like interfaces, making some parts of this
            book a bit out.
          </>,
        ],
        category: "Programming",
      },
      {
        title: "Test Driven Development: By Example",
        author: "Kent Beck",
        link: "https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530",
        image: {
          id: "QPQcDFy",
          format: "jpg",
        },
        description: [
          <>
            I&apos;ve been very interested in TDD, and I wanted to dive deep
            into how it&apos;s supposed to work from the perspective of the
            founder himself
          </>,
          <>
            An intriguing book despite its age. The content is still highly
            relevant and helped me to understand the way TDD works and the
            philosophies behind it.
          </>,
        ],
        category: "Agile",
      },
      {
        title: "Refactoring",
        author: "Martin Fowler",
        link: "https://martinfowler.com/books/refactoring.html",
        image: {
          id: "jyr0Pwp",
          format: "jpg",
        },
        description: [
          <>
            The primary reason I picked up this book was because of the nasty
            codes I came across while developing{" "}
            <NiceLink href="/projects">Loopfoods</NiceLink>. I could not bear
            with them, and so I thought why not I make them better?
          </>,
          <>
            All the techniques were presented like a catalogue, in an easy to
            digest manner. Felt like my coding skill have levelled up after
            reading this book.
          </>,
          <>Totally recommending all programmers to read it</>,
        ],
        category: "Programming",
      },
      {
        title: "Spring in Action",
        author: "Craig Walls",
        link: "https://www.amazon.com/Spring-Action-Craig-Walls/dp/1617294942",
        image: {
          id: "yYPE18T",
          format: "jpg",
        },
        description: [
          <>
            Looking at how popular Spring & Java are especially in Enterprise
            settings, I decided to add them into my toolbox from this book.
          </>,
          <>I chose this book as I always had good experience with Mannings</>,
          <>
            And I was right, this book was absolutely amazing, it will help
            build a strong foundation for anyone who wishes to learn Spring
            Boot. Unfortunately, there was a bit lack of description in terms of
            relationships between models.
          </>,
        ],
        category: "Programming",
      },
    ],
  },
  past: [
    {
      title: "Clean Agile: Back to Basics",
      author: "Rober C. Martin",
      link: "https://www.amazon.com/Clean-Agile-Basics-Robert-Martin/dp/0135781868",
      image: {
        id: "0V3JA3Z",
        format: "jpg",
      },
      description: [
        <>
          I&apos;m a big fan of Uncle Bob, and as I started working, I realized
          that my Agile knowledge is still insufficient, and this book just came
          in very handy. I mean what is better than the understsanding of the
          founder himself?
        </>,
        <>
          I learned a lot from this book, Agile was much larger than what I
          knew, and it totally revolutionized the Developers&apos; world.
        </>,
        <>
          I used to have an aversion to Agile thinking that it&apos;s overhyped,
          but this book definitely changed my opinion.
        </>,
      ],
      category: "Agile",
    },
    {
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      link: "https://www.amazon.com/Diary-Young-Girl-Anne-Frank/dp/0307594009",
      image: {
        id: "klPBBFI",
      },
      description: [
        <>
          I was looking for some books aside from programming ones, and I
          suddenly remembered about this book from my high school friend.
        </>,
        <>
          Honestly, this is an amazing book! There may be places where it&apos;s
          kinda monotonous, but it is a diary.
        </>,
        <>
          Really opened my eyes on lives during wartime, especially the Jews
          during World War 2. Very much grateful for being able to live during a
          peace era.
        </>,
      ],
      category: "Non-Fiction",
    },
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      link: "https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654",
      image: {
        id: "uDeVxGD",
      },
      description: [
        <>
          They called it the bible of UX world everywhere, so I decided to give
          it a try.
        </>,
        <>
          Though it seemed rather distant from web development, but many parts
          gave me insights about usability and design.
        </>,
      ],
      category: "UI/UX",
    },
    {
      title: "Educated: A Memoir",
      author: "Tara Westover",
      link: "https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501",
      image: {
        id: "et5OiU0",
      },
      description: [
        <>
          Was looking to read some motivational book back then, and somehow this
          book popped up in recommendation. The title caught my eyes, so I
          thought why not?
        </>,
        <>
          I guess I have a rather mixed feelings to this book... There are many
          parts in the book where I disagreed and even enraged at what the
          family did.
        </>,
        <>Nonetheless, this book did show me a world that I never knew.</>,
      ],
      category: "Non-Fiction",
    },
    {
      title: "Head First Design Patterns",
      author: "O'Reilly",
      link: "https://www.amazon.com/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124",
      image: {
        id: "1IakHml",
      },
      description: [
        <>
          I learned about Design Pattern from Fireship&apos;s{" "}
          <NiceLink href="https://www.youtube.com/watch?v=tv-_1er1mWI">
            Design Patterns video
          </NiceLink>
          . Later on, I began to come across some special patterns during my
          internship like DDD, State, and Facade, I thought I should really
          start to learn more about it.
        </>,
        <>
          This book did work as a wonderful introduction, and I feel like diving
          more deeply into other GOF patterns from their{" "}
          <NiceLink href="https://circle.visual-paradigm.com/catalog/">
            Catalog
          </NiceLink>
        </>,
      ],
      category: "Programming",
    },
    {
      title: "Refactoring UI",
      author: "Tailwind Lab",
      link: "https://www.refactoringui.com/",
      image: {
        id: "YU7uI8M",
      },
      description: [
        <>
          I came across this book on{" "}
          <NiceLink href="https://tailwindcss.com/">Tailwinds</NiceLink>, and
          since I like to use Tailwinds, it must be good.
        </>,
        <>
          And in fact, it&apos;s good. Many more good UI concepts from the book,
          and yeah, I enjoyed this book a lot.
        </>,
      ],
      category: "Programming",
    },
    {
      title: "Learn Ruby the Hard Way",
      author: "O'Reilly",
      link: "https://www.amazon.com/Learn-Ruby-Hard-Way-Computational/dp/032188499X",
      image: {
        id: "NWIAHYe",
      },
      description: [
        <>Loved O&apos;Reilly books and wanted to learn Ruby, so yeah.</>,
      ],
      category: "Programming",
    },
    {
      title: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      link: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034",
      image: {
        id: "1mMorRL",
      },
      description: [
        <>
          During that time, somehow I kept on coming across Carnegie, so I was
          like what made him so famous, and went to pick his book.
        </>,
        <>
          This book did show many ways to interact and communicate with other
          people, and I guess I might have applied some by now.
        </>,
      ],
      category: "Self Help",
    },
    {
      title: "A Random Walk Down Wall Street",
      author: "Burton Malkiel",
      link: "https://www.amazon.com/Random-Walk-Down-Wall-Street/dp/0393330338",
      image: {
        id: "oLhexDA",
      },
      description: [
        <>
          After my previous book of the life manual, I decided to look into
          personal finance again. (Yes, I have looked and read quite a bit on
          this topic before) This is also another popular book out there.
        </>,
        <>
          I did learn some from this book, but frankly speaking, I did not
          understand most of the content from this book.
        </>,
      ],
      category: "Finance",
    },
    {
      title: "Soft Skills: The software developer's life manual",
      author: "John Sonmez",
      link: "https://www.amazon.com/Soft-Skills-software-developers-manual/dp/1617292397",
      image: {
        id: "Owcxe4L",
      },
      description: [
        <>
          I don&apos;t exactly remember how did this book come up, but it caught
          my eyes quickly due to the uniqueness.
        </>,
        <>
          It&apos;s an amazing book from the author&apos;s experiences, and
          really different from the usual self help books in the sense that it
          is programmer oriented.
        </>,
      ],
      category: "Self Help",
    },
    {
      title: "The Rust Programming Language",
      author: "No Starch Press",
      link: "https://www.amazon.com/Rust-Programming-Language-Steve-Klabnik/dp/1593278284",
      image: {
        id: "uH0oY8R",
      },
      description: [
        <>Absolutely loved this book. I built my Rust foundation from it.</>,
        <>
          I practised Rust on{" "}
          <NiceLink href="https://github.com/rust-lang/rustlings">
            Rustlings
          </NiceLink>{" "}
          alongside this book
        </>,
      ],
      category: "Programming",
    },
    {
      title: "How to Decide",
      author: "Annie Duke",
      link: "https://www.amazon.com/How-Decide-Simple-Making-Choices-ebook/dp/B07TRJB3S3",
      image: {
        id: "YNzgdLS",
      },
      description: [
        <>
          Always had dilemma and hesitations when it comes to making decision,
          and by chance a{" "}
          <NiceLink href="https://www.youtube.com/watch?v=wUB8l1Fz0mA">
            video
          </NiceLink>{" "}
          showed this book to me, and it sounded interesting, so I took it.
        </>,
        <>
          The tools and tips from the book was awesome, did help me to an
          extent, but I totally enjoyed reading it.
        </>,
      ],
      category: "Self Help",
    },
    {
      title: "Designing User Interfaces",
      author: "Hype4 Academy",
      link: "https://hype4academy.gumroad.com/l/uibook",
      image: {
        id: "gefaHbW",
      },
      description: [
        <>One of my first books on UI, I believe.</>,
        <>
          It has presented some basic understandings to UI Design, and
          introduced some basic terms on the subject.
        </>,
      ],
      category: "UI/UX",
    },
    {
      title: "An Introduction to Statistical Learning",
      author: "Springer",
      link: "https://www.amazon.com/Introduction-Statistical-Learning-Applications-Statistics/dp/1461471370",
      image: {
        id: "KnbBwx9",
      },
      description: [
        <>Not really data science, but statistical learning.</>,
        <>
          I like the way this book presents its knowledge, and I managed to
          learn a lot from the book, much more than what I learned for several
          semesters in university.
        </>,
        <>
          I guess the only downside for most is that this book is written in R
          (I like R, though)
        </>,
      ],
      category: "Data Science",
    },
    {
      title: "The Richest Man in Babylon",
      author: "George Clason",
      link: "https://www.amazon.com/Richest-Man-Babylon-George-Clason/dp/1505339111",
      image: {
        id: "bFK296d",
      },
      description: [
        <>Yet another popular book on personal finance. </>,
        <>
          I like how this book presented so much of the little tips through
          stories from Babylon.
        </>,
        <>
          Of course, it&apos;s not as in-depth compared to many other books out
          there, but got its work done.
        </>,
      ],
      category: "Finance",
    },
    {
      title: " Don't Make Me Think",
      author: "Steve Krug",
      link: "https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515",
      image: {
        id: "Wbgjt4p",
      },
      description: [
        <>This gotta be my first book in the world of UX.</>,
        <>
          I used to think that nice interfaces is all that matters, but this
          book brought up the topic of usability. Really built up my
          understanding in the field.
        </>,
        <>
          This book is just so nice to read with graphics and humors from the
          author.
        </>,
      ],
      category: "UI/UX",
    },
  ],
};

export default readings;
