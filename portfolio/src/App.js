import React, {Component} from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

// This class is responsible for containing all other components.
class App extends Component {
    constructor()
    {

    }

    render() {
        return (
            <div className="container">
                <div className="nav-container">
                    <Nav></Nav>
                </div>
                <div className="home-container">
                    <Home></Home>
                </div>
                <div className="projects-container">
                    <Projects></Projects>
                </div>
                <div className="footer-container">
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}
export default App
