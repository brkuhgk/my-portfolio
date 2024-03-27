const data = {
  
      "Name":"karthik",
      "Bio" : " I am a developer who tries to do stuff as efficiant as possible in least amout of time and come with solution.\n I am not specific to any language I learn and \n do stuff based on recuirement."
  
  
}


export default function Intro() {
  return (
    <>
    <div 
    className="flex items-start justify-between 
              bg-auto 
              bg-lime-400/80
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
            w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48"
      />
    </div>
  );
}

function ProfileInto( {data}){
  return(
    <>
    <div className="font-mono">
        <h6 className="font-mono ">{data.Name}</h6>
        <p >
          {data.Bio}
        </p>
        <ul >
          <li>Key Skill 1</li>
          <li>Key Skill 2</li>
          <li>Key Skill 3</li>
        </ul>
    </div>
    </>

  )
}
