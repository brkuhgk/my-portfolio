const data = {
  Name: "karthik",
  Bio: "I am a developer who tries to do stuff as efficiant as possible in least amout of time and come with solution.\n I am not specific to any language I learn and \n do stuff based on recuirement.",
  Skills: [
    "JAVA",
    "JAVASCRIPT",
    "skill3",
    "skill4",
    "skill5",
    "skill6",
    "skill7",
    "skill8",
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
        <Profile />
        <ProfileInto data={data} />
      </div>
    </>
  );
}

function Profile() {
  return (
    <div>
      <img
        src="https://i.imgur.com/tuWbDiR.png"
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
                    w-full max-w-96
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
