import React, {Component} from 'react'
import { Formik, Field, Form} from 'formik'

const BaseForm = () => {
    return ( 
        <>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phoneNo: "",
                    message: ""
                }}
                onSubmit={(data, { setSubmitting }) => {
                    setTimeout(() => {
                    setSubmitting(false);
                    }, 400);
                }}
            >
            {({ 
                values, 
                handleChange,
                handleBlur, 
                handleSubmit
                }) => (
                <Form>
                    <Field
                        type="text"
                        name="name"
                        placeholder="Full Name"
                    />
                    <Field 
                        type="text"
                        name="email"
                        placeholder="Message"
                    />
                    <Field 
                        type="text"
                        name="phoneNo"
                        placeholder="Message"
                    />
                    <Field 
                        type="text"
                        name="message"
                        placeholder="Message"
                    />
                    <button type="submit">Send</button>
                </Form>
            )} 

            </Formik>
        </>
    )
}
export default BaseForm