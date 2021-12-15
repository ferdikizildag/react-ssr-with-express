import React, { useEffect, useState } from "react";

const teams = [
  { name: "Beşiktaş" },
  { name: "Trabzon" },
  { name: "Galatasaray" },
  { name: "Fenerbahçe" },
];

const Test = () => {
  const [title, setTitle] = useState("Takımlar");
  useEffect(()=>{
    setTimeout(()=>{
        setTitle('Dört Büyükler');
    },5000)
  },[])
  return (
    <>
      <h1>{title}</h1>
      {teams.map((team, key) => (
        <h3 key={key} onClick={() => alert(team.name)}>
          {team.name}
        </h3>
      ))}
    </>
  );
};
export default Test;
