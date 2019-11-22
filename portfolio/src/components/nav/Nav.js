import React, {Component} from 'react'
import '../../styles/nav.scss'

class Nav extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            scrollHeight: 0,
            /* nav state options:
            ** '' (the standard nav that appears atop the page)
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

        console.log("before " + this.state.scrollHeight)
            console.log("after  " + window.scrollY)

        // Used to determine when initial page has been scrolled past.
        if (window.scrollY > 175) {
            // Used to work out if the user scrolled up or down.
            this.setState({navState: "retracted"})

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
            <div className="container">
                <div className={"nav-" + this.state.navState}/>
            </div>
        )
    }
}
export default Nav