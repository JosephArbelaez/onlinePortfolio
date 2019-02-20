import React from 'react';
import About from './about';
import Projects from './projects/projects'
import Education from './education';
import Skills from './skills';
import Interests from './interests';
import Experience from './experience';
import { projects } from './projects/projectList';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: projects
        }
    }
    render (){
        const { projects } = this.state;
        return (
            <div>
                <div className="content">
                    {
                        this.props.page === 'about' ? 
                        (
                            <About />
                        ) :
                        this.props.page === 'projects' ? 
                        (
                            <Projects projects={projects}/>
                        ) :
                        this.props.page === 'experience' ? 
                        (
                            <Experience />
                        ) :
                        this.props.page === 'education' ? 
                        (
                            <Education />
                        ) :
                        this.props.page === 'skills' ? 
                        (
                            <Skills />
                        ) :
                        this.props.page === 'interests' ? 
                        (
                            <Interests />
                        ) : <div> </div>
                    }
                </div>
            </div>
        )
    }
}

export default Content;
