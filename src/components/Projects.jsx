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
      <div className="flex flex-wrap items-start justify-center px-4 py-2 bg-black rounded-lg shadow-md">
        <FlipCard projects={projects} />
        <FlipCard projects={projects} />
        <FlipCard projects={projects} />
        <FlipCard projects={projects} />
        <FlipCard projects={projects} />



      </div>
    </>
  );
}

/* <div className="py-2 bg-white rounded-lg shadow-md">
        Project 1
        <img src={projects[0].image} alt="project logo" className="w-40 h-"/>


      </div>
      <div></div>
      <div></div> */

function ProjectCard({ projects }) {
  return (
    <>
      <div className="cursor-pointer group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden w-full h-full">
            {/* back content */}
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden bg-black">
            {/* front content */}
            <img src={projects[0].image} alt="project logo" className="" />
            hi
          </div>
        </div>
      </div>
    </>
  );
}

function FlipCard({projects}) {
  return (
    <>
    <section class="bg-grey-900 flex justify-center items-center text-white p-4">
        <div class="w-[300px] h-[400px] bg-transparent cursor-pointer group perspective">
          <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div class="absolute backface-hidden border-2 w-full h-full">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <img src= {projects[0].image} class="w-full h-full" />

              </div>
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold"> {projects[0].name}</h1>
                <p className="my-2">9.0 Rating</p>
                <p>
                  {projects[0].desc}
                </p>
                <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
