import React from 'react';
import ProjectsItem from './ProjectsItem';
import './Projects.css';

function ProjectsF() {
  return (
    <div id="projectanchor" className="projects">
      <div className="projects__container">
        <div className="projects__wrapper">
          <ul className="projects__items">
            <ProjectsItem
              src="images/SCE.jpg"
              text="California State Seal of Civic Engagement Project: To counter declining cultural club membership, I worked in a team of 3 to create a cultural seminar. After approval from the school board and many failed proposals, we finally held our event. We had over 200 attendees and all of the cultural club presidents on my school campus were able to successfully advertise their clubs utilizing kahoot games and candy prizes. Our event boosted the culture club membership of every single club on campus."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsF;
