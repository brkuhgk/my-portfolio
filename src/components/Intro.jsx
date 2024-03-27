const data = {
  
      "Name":"karthik",
      "Bio" : " I am a developer who tries to do stuff as efficiant as possible in least amout of time and come with solution.\n I am not specific to any language I learn and \n do stuff based on recuirement."
  
  
}


export default function Intro() {
  return (
    <>
      <Profile />
      <ProfileInto Bio ={data.Bio} />
    </>
  );
}

function Profile() {
  return (
    <div>
      <img src="https://i.imgur.com/tuWbDiR.png" 
            alt="Profile pic" 
      />
    </div>
  );
}

function ProfileInto( {Bio}){
  return(
    <>
    <div >
        <h1 >App Name</h1>
        <p >
          {Bio}
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
