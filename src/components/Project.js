import React from 'react';
import './styles/Project.css';

const Project = ({ data }) => (
  <div className="project">
    <h4>{data.date}</h4>
    <h1>{data.name}</h1>
    <p>{data.description}</p>
    {data.links && 
      <ul>
        {data.links.map((link, index) => (
          <li key={index}>
            <a target="_blank" href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    }
  </div>
);

export default Project;
