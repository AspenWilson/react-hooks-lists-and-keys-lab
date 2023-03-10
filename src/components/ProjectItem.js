import React from "react";


function ProjectItem({ name, about, technologies }) {
  console.log({technologies})
  const techCards = technologies.map((technology) => {
    console.log(technology)
    return <span key={technology}>{technology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies"> 
        {techCards}
        </div>
    </div>
  );
}

export default ProjectItem;
