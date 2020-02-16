import React, {Component} from 'react'
import './aboutMe.scss'

class AboutMe extends Component {

    render() {
        return (
            <div className="about-me-component">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="amBody"> 
                            <div>Hi I'm Patrick, </div>
                            <div>I am a graduate Software Engineer currently residing in Melbourne, Australia. </div>
                            <div>I am very passionate about developing quality products and learning new and innovative ways to solve business problems.</div>
                            </p>
                            <div style={{marginBottom:'5vh'}}>
                                <a href="/PatrickDowlingResume.pdf" className="amLinks">> Download my resume</a>
                            </div>
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