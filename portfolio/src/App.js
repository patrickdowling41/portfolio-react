import React, {Component} from 'react'
import NavBar from './components/nav/NavBar'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
import AboutMe from './components/aboutme/AboutMe'
import './styles/app.scss'


// This class is responsible for containing all other components.
class App extends Component {
    constructor()
    {
        super()
    }

    render() {
        return (
            <>
                <div className="nav-component">
                    <NavBar/>
                </div>
                <div className="home-component">
                    <Home/>
                </div>
                <div>
                    <AboutMe/>
                </div>
                <div className="projects-component">
                    <Projects/>
                </div>
                <div className="footer-component">
                    <Footer/>
                </div>
            </>
        )
    }
}
export default App