import Image from "next/image";

export default function Home() {
  return (
    <main className="m-10 lg:m-24">
      <div className="flex flex-col">
        <h1 className="font-semibold text-3xl">Jonah Bard</h1>
        <p className="pt-5">I&apos;m a developer and designer who loves creating impactful technology. </p>
        <p className="pt-5">Most recently, I built a few educational resources: <a className="text-purple-700  underline" href="https://layup.pro">layup.pro</a>, <a className=" text-blue-700 underline" href="https://apps.apple.com/us/app/quizzard-master-test-timing/id6446804987"> quizzard</a>, and <a className="text-green-700  underline" href="https://theprogressbar.co">the progress bar</a>.</p>
        <p className="pt-5">Right now I&apos;m building a tool for teaching and encouraging kids worldwide to read.</p>
        <p className="pt-5 font-bold">Projects</p>
        <ul className="list-disc pl-5">
          <li>Designed + built a new <a href="https://layup.pro" className=" underline">site</a> for thousands of students to find the best courses</li>
          <li>Launched a campus-wide matching initiative {" "}
            <a href="https://www.notion.so/ac1d9d487de4447480c50903d6ab0465?pvs=21" className=" underline"> 
            connecting
            </a>{" "}
            over 2400 students at Dartmouth (54% of the college)
          </li>
          <li>
            Developing a web platform delivering educational tools for low-connectivity areas with{" "}
            <a href="https://dali.dartmouth.edu" className=" underline">
            DALI
          </a>
          </li>
          <li>
          I built and scaled a{" "}
          <a href="https://edrisetutoring.org" className=" underline">
            nonprofit
          </a>{" "}
          educating and supporting hundreds of inner-city students during the pandemic
        </li>
        </ul>
        <p className="font-bold mt-5">Other cool things I&apos;ve done:</p>
        <ul className="list-disc pl-5">
          <li>
            Going to an all-expenses-paid{" "}
            <a href="http://fabric.camp" className=" underline">
              applied rationality seminar
            </a>{" "}
            @ Oxford
          </li>
          <li>
            Attended an awesome all-expenses-paid{" "}
            <a href="https://www.uaustin.org/forbidden-courses" className=" underline">
              academic seminar
            </a>{" "}
            @ UATX
          </li>
          <li>
            Traveled solo to 10 countries around Europe and Asia (photos coming soon!)
          </li>
          <li>
            Ventured across Europe, Asia, and Africa{" "}
            <a href="https://kivunim.org" className=" underline">
              studying
            </a>{" "}
            religious history, foreign politics, and intercultural relations
          </li>
        </ul>

        <p className="mt-5">Connect and check out more of my projects on <a href="https://linkedin.com/in/jonahbard" className=" underline">LinkedIn</a> and <a className=" underline" href="https://github.com/jonahbard">GitHub</a>.</p>
        
        <p className="mt-5"> You can also email me: hi at jonahbard dot com.</p>

        <a className="mt-5 underline" href="https://jonahbard.notion.site/886512a83a704bfa97f1502846acb175?v=e26556a172c6456bad4f773af2010764"> writing↗︎</a>
      </div>

    </main>
  );
}
