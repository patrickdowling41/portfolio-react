import React, {Component} from 'react'
import './projects.scss'

class Projects extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            icon: this.props.icon,
            title: this.props.title,
            description: this.props.description
        }
    }

    render() {
        return (
            <div className="single-project-content">
                <div className="logo-container">
                    <img className="project-icon" src={"/images/" + this.state.icon} alt="project-icon"/>
                </div> 
                <h2 className="project-title">{this.state.title}</h2>
                <div className="project-description">{this.state.description}</div>
            </div>
        )
    }
}
export default Projects