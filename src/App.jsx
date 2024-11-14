import React from "react";
import Avatar from "./assets/images/avatar-jessica.jpeg";

function Skill({ skillName }) {
  console.log("Adding list");
  return (
    <li className="rounded-md text-custom-white bg-custom-grey-700 p-3 w-full text-xs text-center">
      {skillName}
    </li>
  );
}

function App() {
  const skills = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  return (
    <main className="font-inter flex flex-col items-center justify-center">
      <section className="flex flex-col items-center bg-custom-grey-800 rounded-md p-6">
        <img className="rounded-full h-16 mt-1 mb-4" src={Avatar} />
        <h2 className="font-bold text-custom-white text-xl">
          Oluwadamisi Ayinde
        </h2>
        <h4 className="font-bold text-custom-green text-xs mb-2">
          Warri, Nigeria
        </h4>
        <p className="text-custom-white text-xs my-2 mx-6 mb-3">
          "Full Stact developer and avid reader."
        </p>
        <ul className="list-none flex flex-col gap-2 items-center w-full">
          {skills.length > 0
            ? skills.map((skill) => <Skill skillName={skill} />)
            : null}
        </ul>
      </section>
    </main>
  );
}

export default App;
