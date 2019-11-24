import React, {Component} from 'react'
import '../../styles/nav.scss'

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
        this.assignSelected = this.assignSelected.bind(this)
    }

    setNav()
    {
        // Used to determine when initial page has been scrolled past.
        if (window.scrollY > 175) {
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

    assignSelected()
    {

    }

    componentDidMount()
    {
        window.addEventListener('scroll', () => 
        {
            this.setNav()
            this.assignSelected()
        })
    }

    componentWillUnmount()
    {
        window.removeEventListener('scroll')
    }

    render() {
        return (
            <div className="container">
                <div className={"nav-" + this.state.navState}>
                    <div className={"nav-container " + `${this.state.selectedValue === "about-me" ? "selected" : "not-selected"}`}>
                        <ul><a href="#">About me</a></ul>
                    </div>
                    <div className={"nav-container " + `${this.state.selectedValue === "projects" ? "selected" : "not-selected"}`}>
                        <ul><a href="#">Projects</a></ul>
                    </div>
                    <div className={"nav-container " + `${this.state.selectedValue === "contact-me" ? "selected" : "not-selected"}`}>
                        <ul><a href="#">Contact me</a></ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav