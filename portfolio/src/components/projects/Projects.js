import React, {Component} from 'react'
import SingleProject from './SingleProject'
import './projects.scss'

class Projects extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            projects: this.currentProjects
        }
    }

    currentProjects = [
        {
            title: "Facebook-Lite",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis augue mi, at tristique erat fringilla et. Sed vel ipsum purus. Pellentesque malesuada lacus at consectetur gravida. Vivamus eu vulputate sem.",
            icon: "facebook-logo.png"
        },
        {
            title: "B+ Tree",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis augue mi, at tristique erat fringilla et. Sed vel ipsum purus. Pellentesque malesuada lacus at consectetur gravida. Vivamus eu vulputate sem.",
            icon: "binary_tree.png"
        }
    ]


    render() {
        return (
            <div className="projects-component">
                <h3 id="projects-header">Recent projects</h3>
                <div className="flex-container">
                    {this.state.projects.map( (projects) => (
                        <SingleProject
                        description={projects.description}
                        title={projects.title}
                        icon={projects.icon}
                        />
                    ))}
                </div>
            </div>
                
        )
    }
}
export default Projects