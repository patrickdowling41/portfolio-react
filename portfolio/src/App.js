import React, {Component} from 'react'
import NavBar from './components/nav/NavBar'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
import AboutMe from './components/aboutme/AboutMe'
import './app.scss'
import './bootstrap.css'


// This class is responsible for containing all other components.
class App extends Component {
    constructor()
    {
        super()
    }

    render() {
        return (
            <>
                <div className="component nav-component">
                    <NavBar/>
                </div>
                <div className="component home-component">
                    <Home/>
                </div>
                <div className="component aboutme-component">
                    <AboutMe/>
                </div>
                <div className="component projects-component">
                    <Projects/>
                </div>
                <div className="component footer-component">
                    <Footer/>
                </div>
            </>
        )
    }
}
export default App