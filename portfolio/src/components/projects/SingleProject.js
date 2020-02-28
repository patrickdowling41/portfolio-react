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
            techStack: this.props.techStack,
            sourceCode: this.props.sourceCode,
            liveDemo: this.props.liveDemo
        }
        this.getSourceCode = this.getSourceCode.bind(this)
        this.getLiveDemo = this.getLiveDemo.bind(this)
    }

    getLiveDemo() {
        if (this.state.liveDemo === undefined) {
            return (
                <div className="project-live-demo">
                    <a className="project-button-disabled" href={this.state.liveDemo}>Live demo</a>
                </div>
            )
        }
        else {
            return (
                <div className="project-live-demo">
                    <a className="project-button" href={this.state.liveDemo} role="button">Live demo</a>
                </div>
            )
        }
    }

    getSourceCode() {
        if (this.state.sourceCode === undefined) {
            return (
                <div className="project-source-code">
                    <a className="project-button-disabled" href={this.state.sourceCode}>View source</a>
                </div>
            )
        }
        else {
            return (
                <div className="project-source-code">
                    <a className="project-button" href={this.state.sourceCode} role="button">View source</a>
                </div>
            )
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
                {this.getSourceCode()}
                {this.getLiveDemo()}
            </div>
        )
    }
}
export default Projects