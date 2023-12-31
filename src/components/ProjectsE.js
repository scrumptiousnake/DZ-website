import React from 'react';
import ProjectsItem from './ProjectsItem';
import './Projects.css';

function ProjectsE() {
  return (
    <div className="projects">
      <h1>Community Service Projects:</h1>
      <h2>Eagle Project: Retaining wall at SCLS</h2>
      <div className="projects__container">
        <div className="projects__wrapper">
          <ul className="projects__items">
            <ProjectsItem
              src="images/eagleproject.jpg"
              text="I 
              lead a team of 21 volunteers to build a retaining wall 
              made of railroad ties and metal rebars at Southern 
              California Livesteamers (nonprofit). 
              In order to address safety issues and make the 
              site look better, I utilized a chainsaw and 
              powerdrills to remove tree roots and secure the wall into the ground. 
              Over 200 hours of community service was spent 
              on this project."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsE;
