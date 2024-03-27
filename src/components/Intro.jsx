const data = {
  
      "Name":"karthik",
      "Bio" : " I am a developer who tries to do stuff as efficiant as possible in least amout of time and come with solution.\n I am not specific to any language I learn and \n do stuff based on recuirement."
  
  
}


export default function Intro() {
  return (
    <>
  
    <div 
    className="flex items-start justify-evenly
              bg-auto 
              bg-lime-400/80
              p-6
              "
    >

    <Profile />
    <ProfileInto data ={data} />
    </div>
    
    </>
  );
}

function Profile() {
  return (
    <div>
      <img src="https://i.imgur.com/tuWbDiR.png" 
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

function ProfileInto( {data}){
  return(
    <>
    <div className="font-mono
                    p-4
                    hover:scale-105 transition-transform duration-300 ease-in-out
                    
                    "

    >
        <h6 className=" font-bold">{data.Name}</h6>
        <p className="max-w-md mx-auto" >
          {data.Bio}
        </p>
        <ul className="flex  ">
          <li>Key Skill 1</li>
          <li>Key Skill 2</li>
          <li>Key Skill 3</li>
        </ul>
    </div>
    </>

  )
}
