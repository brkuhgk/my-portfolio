const projects = [
  {
    name: "Group Notes",
    desc: "Group Note is a collaborative note-taking application that allows teams and groups to work together in real-time on shared notes. With Group Note, capturing ideas and collaborating seamlessly becomes a breeze.",
    stack: ["React", "Nodejs", "MangoDB", "Jest"],
    github: "https://github.com/brkuhgk/GroupNotes.git",
    image: "https://img.icons8.com/ios/50/lifecycle--v1.png",
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
      <div className="flex items-start justify-center px-4 py-2 bg-white rounded-lg shadow-md bg-lime-500">
        <ProjectCard projects={projects}/>
       
      </div>
    </>
  );
}

function ProjectCard({ projects }) {
  return (
    <>
      <div className="py-2 bg-white rounded-lg shadow-md">
        Project 1
        <img src={projects[0].image} alt="project logo" />
      </div>
      <div></div>
      <div></div>
    </>
  );
}
