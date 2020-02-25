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
                <div className="container">
                    <div className="row technology-container ">
                        <div className="col-xs-2">
                            <img className="technology-icon" src={"/images/" + this.state.icon} alt="technology-icon"/>
                        </div>
                        <div className="col-lg-10">
                            <h3 className="technology-name">{this.state.name}</h3>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Technology;