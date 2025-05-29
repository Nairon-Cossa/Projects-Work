import React from 'react';
import './Team.css';
import member1 from '../assets/team1.png';
import member2 from '../assets/team2.png';
import member3 from '../assets/team3.png';
import member4 from '../assets/team4.png';

const teamMembers = [
  {
    name: 'Alfredo Matola',
    role: 'Director Geral',
    img: member1,
  },
  {
    name: 'Carlos Silva',
    role: 'Engenheira Civil',
    img: member2,
  },
  {
    name: 'Jorge Mucavele',
    role: 'Especialista em Energia Solar',
    img: member3,
  },
  {
    name: 'Dercio Mabjaia',
    role: 'Gestora de Projectos',
    img: member4,
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <h2 className="team-title">A Nossa Equipa</h2>
      <p className="team-subtitle">Conheça os profissionais que tornam a Home Pro Help possível.</p>
      
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.img} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
