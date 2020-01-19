import React, {Component} from 'react'
import './nav.scss'
import { Link, animateScroll as scroll } from "react-scroll";

class Nav extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            scrollHeight: 0,
            /* nav state options:
            ** scrolled (the sticky nav for once scrolling has begun)
            ** top (the opaque nav at the top) */
            navState: 'top',
            selectedValue: ""
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
            <div className={"nav-" + this.state.navState}>

                <div className="image-container">

                </div>

                <div className="links-container">
                    <div className={"nav-container " + `${this.state.selectedValue === "about-me" ? "selected" : "not-selected"}`}>
                        <ul>
                            <Link
                                activeClass="active"
                                to="about-me-component"
                                smooth={true}
                                offset={-70}
                            >
                                About me
                            </Link>
                        </ul>
                    </div>
                    <div className={"nav-container " + `${this.state.selectedValue === "projects" ? "selected" : "not-selected"}`}>
                        <ul>
                            <Link
                                activeClass="active"
                                to="projects-component"
                                smooth={true}
                                offset={-70}
                            >
                                Projects
                            </Link>
                        </ul>
                    </div>
                    <div className={"nav-container " + `${this.state.selectedValue === "contact-me" ? "selected" : "not-selected"}`}>
                        <ul>
                            <Link
                                activeClass="active"
                                to="contact-me-component"
                                smooth={true}
                                offset={-70}
                            >
                                Contact me
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav