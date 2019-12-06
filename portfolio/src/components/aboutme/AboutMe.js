import React, {Component} from 'react'
import './aboutMe.scss'

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me-component">
                <div className="row">
                    <div className="col">
                        <h1 className="amHeading">About Me</h1>

                        <p className="amBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum consectetur ultricies interdum. Suspendisse posuere interdum nisi, 
                        at egestas dolor posuere ut. Vestibulum bibendum neque vitae pharetra ullamcorper. 
                        Vestibulum iaculis elit et tristique ullamcorper. Vivamus commodo urna sit amet 
                        risus bibendum condimentum. Curabitur tincidunt, odio ac elementum facilisis, 
                        turpis diam laoreet orci, at facilisis felis elit sit amet ante. Sed faucibus 
                        efficitur dignissim. Phasellus aliquam eleifend ipsum eleifend porta. Sed vel 
                        ipsum at erat vestibulum ornare. Aliquam erat volutpat. Donec urna risus, sagittis 
                        vel dui quis, dapibus scelerisque nisi. Maecenas et mi quis tortor tristique 
                        interdum at luctus erat. Etiam nunc tellus, viverra sed fringilla eget, pretium 
                        vitae lacus. Donec vitae neque mollis quam gravida ornare. Pellentesque rhoncus
                        lorem nec est luctus cursus. </p>
                    </div>
                </div>
            </div>
        )
    }

}
export default AboutMe