import React from "react";
import "./Team.css";
import Title from "../Title/Title";

const teamMembers = [
  {
    title: "CEO",
    name: "Aman Kumar Gupta",
    img: "https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small_2x/cartoon-cute-school-boy-photo.jpg",
    desc: "Rahul leads the company with a strong vision for growth and innovation.",
  },
  {
    title: "Director",
    name: "Anjali Verma",
    img: "https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small_2x/cartoon-cute-school-boy-photo.jpg",
    desc: "Anjali oversees strategy and ensures all departments work in synergy.",
  },
  {
    title: "Manager",
    name: "Vikram Patel",
    img: "https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small_2x/cartoon-cute-school-boy-photo.jpg",
    desc: "Vikram manages daily operations and maintains team productivity.",
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
