import React, {Component} from 'react'
import './aboutMe.scss'

class AboutMe extends Component {

    render() {
        return (
            <div className="about-me-component">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="amBody"> Hi I'm Patrick, I love solving problems using new and innovative technologies.</p>
                            <div><a href="/PatrickDowlingResume.pdf" className="amLinks">> More about me</a></div>
                            <div><a href="/PatrickDowlingResume.pdf" className="amLinks">> Download my resume</a></div>
                        </div>
                        <div className="col-lg-6">
                            <img className="mongo-logo" src="/images/mongo-logo.png" alt="mongo-logo"/> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default AboutMe