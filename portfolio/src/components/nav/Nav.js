import React, {Component} from 'react'
import '../../styles/nav.css'

class Nav extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            navState: this.props.navState
        }
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