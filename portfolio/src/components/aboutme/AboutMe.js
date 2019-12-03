import React, {Component} from 'react'
import './aboutMe.scss'

class AboutMe extends Component {
    render() {
        return (
            <div className="aboutMeContainer">
                <div className="row">
                    <div className="col">
                        <h1 className="amHeading">About Me</h1>
                        <p className="amBody"></p>
                    </div>
                </div>
            </div>
        )
    }

}
export default AboutMe