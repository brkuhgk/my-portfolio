import live from "../assests/live.png";
import githubLogo from "../assests/github_logo.png";

const projects = [
  {
    name: "Group Notes",
    desc: "Group Note is a collaborative note-taking application that allows teams and groups to work together in real-time on shared notes. With Group Note, capturing ideas and collaborating seamlessly becomes a breeze.",
    stack: ["React", "Nodejs", "MangoDB", "Jest"],
    github: "https://github.com/brkuhgk/GroupNotes.git",
    image: "https://i.imgur.com/5wcGYr1.jpeg",
    live: "https://www.youtube.com/watch?v=IKYB2NRoTNc",
  },
  {
    name: "Group Notes",
    desc: "Group Note is a collaborative note-taking application that allows teams and groups to work together in real-time on shared notes. With Group Note, capturing ideas and collaborating seamlessly becomes a breeze.",
    stack: ["React", "Nodejs", "MangoDB", "Jest"],
    image: "https://icons8.com/icon/61647/life-cycle",
    github: "https://github.com/brkuhgk/GroupNotes.git",
    live: "https://www.youtube.com/watch?v=IKYB2NRoTNc",
  },
];

export default function Projects() {
  return (
    <>
      <div className="flex flex-wrap items-start justify-center px-4 py-2 bg-gray-100 rounded-lg shadow-md m-20">
        <FlipCard projects={projects} />
        <FlipCard projects={projects} />
        <FlipCard projects={projects} />
        <FlipCard projects={projects} />
        <FlipCard projects={projects} />
        <FlipCard projects={projects} />
      </div>
    </>
  );
}



function FlipCard({ projects }) {
  return (
    <>
      <section class="bg-grey-900 flex justify-center items-center text-white p-4">
        <div class="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div class="absolute backface-hidden border-2 w-full h-full">
              <img src={projects[0].image} alt="img" className="w-full h-full" />
            </div>

            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold"> {projects[0].name}</h1>
                <p>{projects[0].desc}</p>

                <div className="rounded-lg shadow-md font-mono m-2">
                  <div className="font-bold">Tech Stack</div> REACTJS, NODEJS,
                  MySQL,REACTJS, NODEJS, MySQL
                </div>

                <div className="flex space-x-14">
                  <img
                    src={live}
                    alt="project logo"
                    className="w-[50px] h-[50px]"
                  />
                  <img
                    src={githubLogo}
                    alt="project logo"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
