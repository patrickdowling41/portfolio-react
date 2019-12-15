import React, {Component} from 'react'
import { Formik, Field, Form} from 'formik'

class ContactMe extends Component {
    render() {
        return (
            <>
                <h2 className="contact-header">
                    If you have any questions, send me through a message
                </h2>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        phoneNo: "",
                        message: ""
                    }}
                >

                </Formik>
            </>
        )
    }

}
export default ContactMe