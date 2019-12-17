import React from 'react'
import { Formik, Field, Form} from 'formik'
import * as yup from 'yup'
import './contactMe.scss'

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
                onSubmit={({}) => {
                    setTimeout(() => {
                        
                    }, 400);
                }}
            >
            {({ 
                values, 
                errors,
                touched,
                isSubmitting
                }) => (
                <Form>
                    <Field
                        type="text"
                        name="name"
                        className={touched.name && errors.name ? "text-field field-error" : "text-field"}
                        placeholder="Full Name"
                    />
                    <Field 
                        type="text"
                        name="email"
                        className={touched.email && errors.email ? "text-field field-error" : "text-field"}
                        placeholder="Email"
                    />
                    <Field 
                        type="text"
                        name="phoneNo"
                        className={touched.phoneNo && errors.phoneNo ? "field-error" : "text-field"}
                        placeholder="Phone No."
                    />
                    <Field 
                        type="text"
                        name="message"
                        className="message-field"
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