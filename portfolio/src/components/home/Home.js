import React, {Component} from 'react'
import './home.scss'

var FontAwesome = require('react-fontawesome')

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="vert-box"><h1 className="homeHeading">Patrick Dowling</h1></div>
                <div className="vert-box"><h2 className="homeTitle">Software Engineer</h2></div>
                <div className="socialmedia-links">
                    <FontAwesome size='2x' className="sm-icon" name="linkedin" />
                    <FontAwesome size='2x' className="sm-icon" name="envelope" />
                    <FontAwesome size='2x' className="sm-icon" name="github" />
                </div>
            </div>
        )
    }
}
export default Home