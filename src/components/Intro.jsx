import githubLogo from "../assests/icons8-github-60.png";
import linkedINLogo from "../assests/icons8-linkedin-96.png";
import gmailLogo from "../assests/icons8-gmail-96.png";
import blogLogo from "../assests/icons8-wifi-100.png";
import xLogo from "../assests/icons8-x-logo-100.png";
import resumeLogo from "../assests/icons8-resume-100.png";

const data = {
    Name: "Karthik Boddu",
    Img: "https://media.licdn.com/dms/image/D4E03AQGXMmYY7HbA8A/profile-displayphoto-shrink_800_800/0/1713394552552?e=1723680000&v=beta&t=bAkaqJAxc_kVIDSzBW3YB1c_5NCweoguzH_LTv_xNCs",
    Bio: "I like to develop large scale applications/LLMs 🧠🤖💥",
};

export default function Intro() {
    return (
        <>
            <div className="flex items-start justify-center px-4 py-2 bg-white rounded-lg shadow-md">
                <Profile data={data} />
                <ProfileInto data={data} />
            </div>
        </>
    );
}

function Profile({ data }) {
    return (
        <div className="font-mono p-4 hover:scale-105 transition-transform duration-300 ease-in-out w-1/6">
            <img
                src={data.Img}
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
                    w-1/3
                    "
            >
                <h1 className="p-2 text-4xl font-bold">{data.Name}</h1>
                <p className="p-2 max-w-md mx-auto">{data.Bio}</p>
                <span className="flex flex-wrap">
          <a href="https://github.com/brkuhgk" target={"_blank"}>
            <img width="50" height="50" src={githubLogo} alt="github"/>
          </a>
          <a
              href="https://www.linkedin.com/in/karthik-boddu/"
              target={"_blank"}
          >
            <img width="50" height="50" src={linkedINLogo} alt="Linkedin"/>
          </a>
          <a href="mailto:krk02411@gmail.com" target={"_blank"}>
            <img width="50" height="50" src={gmailLogo} alt="gmail"/>
          </a>
          <a href="https://x.com/MRX_SDE" target={"_blank"}>
            <img width="50" height="50" src={xLogo} alt="Twitter -x"/>
          </a>
          <a href="https://medium.com/@karthikboddu1602" target={"_blank"}>
            <img width="50" height="50" src={blogLogo} alt="medium Blog"/>
          </a>
                    <a href="https://docs.google.com/document/d/1bsHYZvTjzoafXcPe5nVS2pQdvN7278r7HcySZly-cBo/edit?usp=sharing" target={"_blank"}>
            <img width="50" height="30" src={resumeLogo} alt="medium Blog"/>
          </a>
        </span>
            </div>
        </>
    );
}
