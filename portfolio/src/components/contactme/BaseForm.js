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
                isSubmitting,
                handleBlur,
                handleChange,
                }) => (
                <Form>
                    <div className="form-element">
                        <label>Full Name</label>
                        <Field
                            type="text"
                            name="name"
                            className={touched.name && errors.name ? "contact-text-field field-error" : "contact-text-field"}
                        />
                        <i className="ion-alert"></i>
                    </div>
                    <div className="form-element">
                        <label>Email</label>
                        <Field 
                            type="text"
                            name="email"
                            className={touched.email && errors.email ? "contact-text-field field-error" : "contact-text-field"}
                        />
                        <i className="ion-alert"></i>
                    </div>
                    <div className="form-element">
                        <label>Phone No.</label>
                        <Field 
                            type="text"
                            name="phoneNo"
                            className={touched.phoneNo && errors.phoneNo ? "contact-text-field field-error" : "contact-text-field"}
                        />
                        <i class="ion-alert"></i>
                    </div>
                    <div className="form-element">
                        <label>Message</label>
                        <textarea 
                            name="message" 
                            className="contact-message-field"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    <pre>{JSON.stringify(values)}</pre>
                    <button type="submit">Send</button>

                </Form>
            )} 

            </Formik>
        </>
    )
}
export default BaseForm