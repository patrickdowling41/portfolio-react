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
            description: "Facebook-lite is a web based database application which acts as a very stripped down version of Facebook. I created it as part of a University assignment and subsequently expanded upon it to improve my front end development.",
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
            ],
            sourceCode: "https://github.com/patrickdowling41/facebook-lite-mongo"
        },
        {
            title: "B+ Tree",
            description: "The B+ tree is a complex data structure used heavily in database systems. It is used to store data allowing for efficient retrieval from within large datasets.",
            icon: "binary_tree.png",
            techStack: [
                {
                    icon: "java.png",
                    name: "Java"
                }
            ],
            sourceCode: "https://github.com/patrickdowling41/bPlusTree"
            
        },
        {
            title: "Contact form",
            description: "The contact form is a simple contact form that makes use of Amazon's Simple Email Service to send contact information by email from a professional noreply email address.",
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
            ],
            sourceCode: "https://github.com/patrickdowling41/react-contact-form"
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
                        sourceCode={projects.sourceCode}
                        liveDemo={projects.liveDemo}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default Projects