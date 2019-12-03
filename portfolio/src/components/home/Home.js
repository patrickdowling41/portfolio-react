import React, {Component} from 'react'
import './home.scss'

class Home extends Component {
    render() {
        return (
            <div className="name-container">
                <div className="vert-box"><h1 className="homeHeading">Patrick Dowling</h1></div>
                <div className="vert-box"><h2 className="homeTitle">Software Engineer</h2></div>
            </div>
        )
    }

}
export default Home