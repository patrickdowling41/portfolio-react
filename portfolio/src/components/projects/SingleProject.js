import React, {Component} from 'react'
import './projects.scss'

class Projects extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            img: this.props.img,
            title: this.props.title,
            description: this.props.description
        }

    }

    render() {
        return (
            <div className="single-project-component">
                
            </div>
        )
    }
}
export default Projects