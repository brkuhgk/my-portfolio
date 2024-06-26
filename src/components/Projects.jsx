import live from "../assests/live.png";
import githubLogo from "../assests/icons8-github-60.png";

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
      <div className="flex flex-wrap items-start justify-center px-4 py-2 rounded-lg shadow-md m-10 bg-gray-200">
        <Card projects={projects} />
        <Card projects={projects} />
        <Card projects={projects} />
        <Card projects={projects} />

      </div>
    </>
  );
}

function FlipCard({ projects }) {
  return (
    <>
      <div class="bg-grey-900 flex justify-center items-center bg">
        <div class="w-[300px] h-[310px] bg-transparent cursor-pointer group perspective">
          <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div class="absolute backface-hidden border-2 w-full h-auto">
              <div class="flex justify-center ">
                <img
                  src={projects[0].image}
                  alt="Project-IMG"
                  className="rounded-full
            w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 p-1"
                />
              </div>

              <div className="font-mono p-2">
                <div className="font-bold">Tech Stack </div> REACTJS, NODEJS,
                MySQL,REACTJS, NODEJS, MySQL
              </div>
            </div>

            <div className="absolute my-rotate-y-180 backface-hidden w-full h-auto bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-auto text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold m-2">
                  {projects[0].name}
                </h1>
                <p>{projects[0].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ projects }) {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-2 m-2">
        <FlipCard projects={projects}/>

        <div className="flex justify-center space-x-10">

          <a href="https://example.com" target="github">
            <img
                src={githubLogo}
                alt="project logo"
                width="50px"
                height="50px"

            />
          </a>
          <a href="https://example.com" target="github">
            <img src={live} alt="project live" width="50px"
                 height="50px"/>
          </a>
        </div>
      </div>
    </>
  );
}
