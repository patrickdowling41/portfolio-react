import React, {Component} from 'react'
import './nav.scss'
import { Link, animateScroll as scroll } from "react-scroll";
var FontAwesome = require('react-fontawesome')

class Nav extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            scrollHeight: 0,
            /* nav state options:
            ** scrolled (the sticky nav for once scrolling has begun)
            ** top (the opaque nav at the top) */
            navState: 'top'
        }

        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
        this.setNav = this.setNav.bind(this)
    }

    setNav()
    {
        // Used to determine when initial page has been scrolled past.
        if (window.scrollY > 100) {
            // Used to work out if the user scrolled up or down.
            this.setState({navState: "scrolled"})
        }
        else
        {
            this.setState({navState: "top"})
        }
        this.setState({
            scrollHeight: window.scrollY
        })
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
            <div className={"nav-" + this.state.navState}>
                <div className="links-container">
                    <ul>
                        <Link
                            activeClass="active"
                            to="about-me-component"
                            smooth={true}
                            offset={-65}
                        >
                            <FontAwesome size='1x' className="home-icon" name="code" />
                        </Link>
                    </ul>
            
                    <ul>
                        <Link
                            activeClass="active"
                            to="about-me-component"
                            smooth={true}
                            offset={-65}
                        >
                            About me
                        </Link>
                    </ul>
                    <ul>
                        <Link
                            activeClass="active"
                            to="projects-component"
                            smooth={true}
                            offset={-65}
                        >
                            Projects
                        </Link>
                    </ul>
                </div>               
            </div>
        )
    }
}
export default Nav