import React, {Component} from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
import './styles/app.css'

// This class is responsible for containing all other components.
class App extends Component {
    constructor()
    {
        super()
        this.state = {
            scrollHeight: 0,
            /* nav state options:
            ** initial (the standard nav that appears atop the page)
            ** transparent (when user is scrolling up from down the page)
            ** invisible */
            navState: 'initial'
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
        this.setNav = this.setNav.bind(this)
    }

    setNav()
    {

        const newNavState = this.state.navState

        // Used to determine when initial page has been scrolled past.
        if (window.scrollY > 50) {
            // Used to work out if the user scrolled up or down.
            if (window.scrollY > this.state.scrollHeight)
            {
                this.setState({navState: "invisible"})
            }
            else
            {
                // Show transparent nav when user scrolls up.
                this.setState({navState: "transparent"})
            }
        }
        else
        {
            this.setState({navState: "initial"})
        }
        this.setState({
            navState: newNavState,
            scrollHeight: window.scrollY                 
        })

        console.log(this.state.navState)
    }

    componentDidMount()
    {
        window.addEventListener('scroll', () => 
        {
            this.setNav()
        })
    }

    componentWillUnmount()
    {
        window.removeEventListener('scroll')
    }

    render() {
        return (
            <div className="container">
                <div className="nav-container">
                    <Nav
                        navState = {this.state.navState}
                    >
                    </Nav>
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