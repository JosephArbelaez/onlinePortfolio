import React from 'react';
import About from './about';
import Projects from './projects/projects'
import Education from './education/education';
import Interests from './interests';
import Experience from './experience/experience';
import { projects } from './projects/projectList';
import { experiences } from './experience/experienceList';
import { education } from './education/educationList';


class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: projects,
            experiences: experiences,
        }
    }



    render() {
        return (
                <div className = "content">
                    {
                        this.props.page === 'about' ? 
                        (
                            <About profileImageDisplay2={this.props.profileImageDisplay2}/>
                        ) :
                        this.props.page === 'projects' ? 
                        (
                            <Projects projects={projects}/>
                        ) :
                        this.props.page === 'experience' ? 
                        (
                            <Experience experiences={experiences}/>
                        ) :
                        this.props.page === 'education' ? 
                        (
                            <Education education={education}/>
                        ) :
                        this.props.page === 'interests' ? 
                        (
                            <Interests />
                        ) : <div> </div>
                    }
                </div>
        )
    }
}

export default Content;
