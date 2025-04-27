import React from "react";
import "./Team.css";
import Title from "../Title/Title";
import founder from "../../assets/founder.jpg";
import CoFounder from "../../assets/ceo.jpg";
import CreativeDirector from "../../assets/creative_director.jpg";
import webDev from "../../assets/webdev.jpg";
const teamMembers = [
  {
    title: "Founder",
    name: "Aman Kumar Gupta",
    img: founder,
    desc: "Aman is the visionary behind our innovative approach to education.",
  },
  {
    title: "Co-Founder",
    name: "Rohan Kumar",
    img: CoFounder,
    desc: "Rohan is the driving force behind our strategic initiatives.",
  },
  {
    title: "Creative Director",
    name: "Ayankita",
    img: CreativeDirector,
    desc: "Ayankita leads our creative team with a passion for design and innovation.",
  },
  {
    title: "Developer Team Lead",
    name: "Parthik",
    img: webDev,
    desc: "Parthik is the mastermind behind our cutting-edge technology solutions.",
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <Title subtitle={"Team"} title={"Our Team"} />
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} className="team-img" />
            <h2>{member.title}</h2>
            <h4>{member.name}</h4>
            <p>{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
