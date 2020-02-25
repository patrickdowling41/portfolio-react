import React, { Component } from 'react';

class Technology extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name: this.props.name,
            icon: this.props.icon
        }
    }

    render() {
        return (
            <>
                <div className="tech-icon-container">
                    <img className="technology-icon" src={"/images/" + this.state.icon} alt="technology-icon"/>
                </div> 
                <h3 className="technology-name">{this.state.name}</h3>
            </>
        );
    }
}
export default Technology;