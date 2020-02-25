import React, {Component} from 'react'
import Technology from './Technology'
import './projects.scss'

class Projects extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            icon: this.props.icon,
            title: this.props.title,
            description: this.props.description,
            techStack: this.props.techStack
        }
    }

    render() {
        return (
            <div className="single-project-component">
                <div className="logo-container">
                    <img className="project-icon" src={"/images/" + this.state.icon} alt="project-icon"/>
                </div> 
                <h2 className="project-title">{this.state.title}</h2>
                <div className="project-description">{this.state.description}</div>
                <div className="project-techstack">
                    {this.state.techStack.map( (techStack) => (
                        <Technology
                        icon={techStack.icon}
                        name={techStack.name}
                        />
                    ))}
                </div>
                <div className="project-source-code">
                    <a class="project-button" href="#" role="button">View source</a>
                </div>
                <div className="project-live-demo">
                    <a class="project-button" href="#" role="button">Live demo</a>
                </div>
            </div>
        )
    }
}
export default Projects