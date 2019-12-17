import React from 'react'
import { Formik, Field, Form} from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
    name: yup
    .string()
    .required()
    .min(2, "Please include your full name"),
    email: yup
    .string()
    .required()
    .email("Please include a valid email"),
    phoneNo: yup
    .string()
    .required()
    // Regular expression for valid phone number
    .matches(/^(?:\+?([1-9]{2}))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/,"Please include a valid phone number")
});

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
                validationSchema={validationSchema}
                onSubmit={(data, { setSubmitting }) => {
                    setTimeout(() => {
                    setSubmitting(false);
                    }, 400);
                }}
            >
            {({ 
                values, 
                errors,
                isSubmitting
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
                        placeholder="Email"
                    />
                    <Field 
                        type="text"
                        name="phoneNo"
                        placeholder="Phone No."
                    />
                    <Field 
                        type="text"
                        name="message"
                        placeholder="Message"
                    />
                    <button type="submit">Send</button>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                    <pre>{JSON.stringify(errors, null, 2)}</pre>

                </Form>
            )} 

            </Formik>
        </>
    )
}
export default BaseForm