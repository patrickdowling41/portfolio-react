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
                    <a class="thumbnail" href='https://www.linkedin.com/in/patrick-dowling-454ab8148'>
                        <FontAwesome size='2x' className="sm-icon" name="linkedin" />
                    </a>
                    <a class="thumbnail" href='mailto:patrick@patdowling.net'>
                        <FontAwesome size='2x' className="sm-icon" name="envelope" />
                    </a>
                    <a class="thumbnail" href='https://github.com/patrickdowling41'>
                        <FontAwesome size='2x' className="sm-icon" name="github" />
                    </a>
                </div>
            </div>
        )
    }
}
export default Home