import {projects} from "./data";

export default function Projects2() {
    return (
        <>
            <div className="flex flex-wrap items-start justify-center px-2 py-2 rounded-lg shadow-md m-10 bg-gray-200">

                {projects.map(
                    (project)=> (
                        <Card project={project}/>
                    )
                )}
            </div>
        </>
    );
}

function Card({project}) {
    return(
        <>
            <div className="bg-white rounded-lg shadow-md p-2 m-2 w-60 h-1/2 text-gray-700">
                <a href={project.github} target={"_blank"}>

                <img
                    src={project.image}
                    alt="Project-IMG"
                    className="w-100 h-1/2 object-scale-down"
                />
                <div>
                    <p  className="border-b-2 text-center bold text-gray-800">{project.name} </p>
                    <span className="text-gray-800 bold">Tech Stack : </span>
                    {
                        project.stack.map(
                            (skill)=><span>{skill+" "}</span>
                        )
                    }
                </div>
                <span>{project.desc}</span>
                </a>
            </div>
        </>

    );
}
