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
            icon: "facebook-logo.png",
            techStack: [
                {
                    icon: "jQuery.png",
                    name: "jQuery"
                },
                {
                    icon: "php.png",
                    name: "PHP"
                },
                {
                    icon: "mongodb.png",
                    name: "MongoDB"
                }
            ]
        },
        {
            title: "B+ Tree",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis augue mi, at tristique erat fringilla et. Sed vel ipsum purus. Pellentesque malesuada lacus at consectetur gravida. Vivamus eu vulputate sem.",
            icon: "binary_tree.png",
            techStack: [
                {
                    icon: "java.png",
                    name: "Java"
                }
            ]
        },
        {
            title: "Contact form",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis augue mi, at tristique erat fringilla et. Sed vel ipsum purus. Pellentesque malesuada lacus at consectetur gravida. Vivamus eu vulputate sem.",
            icon: "email.png",
            techStack: [
                {
                    icon: "reactjs.png",
                    name: "ReactJS"
                },
                {
                    icon: "nodejs.png",
                    name: "NodeJS"
                }
            ]
        }
    ]

    render() {
        return (
            <div className="projects-container">
                <h3 id="projects-header">Recent projects</h3>
                <div className="flex-container">
                    {this.state.projects.map( (projects) => (
                        <SingleProject
                        description={projects.description}
                        title={projects.title}
                        icon={projects.icon}
                        techStack={projects.techStack}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default Projects