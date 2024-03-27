const data = {
  Name: "karthik",
  Img :"https://i.imgur.com/tuWbDiR.png",
  Bio: "I am a developer who tries to do stuff as efficiant as possible in least amout of time and come with solution.\n I am not specific to any language I learn and \n do stuff based on recuirement.",
  Skills: [
    "JAVA",
    "JAVASCRIPT",
    "Python",
    "SQL",
    "React JS",
    "Node JS",
    "Spring Boot",
    "Hibernte",
    "PostgreSQL",
    "MangoDB",
    "Amazon AWS",
    "Docker",
  ],
};

export default function Intro() {
  return (
    <>
      <div
        className="flex items-start justify-center
              px-4 py-2 bg-white rounded-lg shadow-md
              "
      >
        <Profile data={data}/>
        <ProfileInto data={data} />
      </div>
    </>
  );
}

function Profile({data}) {
  return (
    <div>
      <img
        src= {data.Img}
        alt="Profile pic"
        className="rounded-full
            p-4
            w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48
            hover:scale-105 transition-transform duration-300 ease-in-out
            "
      />
    </div>
  );
}

function ProfileInto({ data }) {
  return (

    <>
      <div
        className="
                    font-mono
                    p-4
                    hover:scale-105 transition-transform duration-300 ease-in-out
                    w-1/3
                    "
      >
        <h1 className="p-2 text-4xl font-bold">{data.Name}</h1>
        <p className="p-2 max-w-md mx-auto">{data.Bio}</p>
        <div className="flex flex-wrap ">
          {data.Skills.map((skill) => (
            <div className="m-1 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
