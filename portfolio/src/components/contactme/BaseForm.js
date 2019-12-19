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
    .matches(/^(?:\+?([0-9]{2}))? ?(?:\((?=.*\)))?([0,1]?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/,"Please include a valid phone number")
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
                handleBlur,
                handleChange,
                }) => (
                <Form>
                    <div className="form-element">
                        <label className="form-label">Full Name*</label>
                        <Field
                            type="text"
                            name="name"
                            className={touched.name && errors.name ? "field-error" : "contact-text-field"}
                        />
                        <i className={touched.name && errors.name ? "ion-alert" : "hidden"}></i>
                    </div>
                    
                    <div className="form-element">
                        <label className="form-label">Email*</label>
                        <Field 
                            type="text"
                            name="email"
                            className={touched.email && errors.email ? "field-error" : "contact-text-field"}
                        />
                       <i className={touched.email && errors.email ? "ion-alert" : "hidden"}></i>
                    </div>

                    <div className="form-element">
                        <label className="form-label">Phone No.*</label>
                        <Field 
                            type="text"
                            name="phoneNo"
                            className={touched.phoneNo && errors.phoneNo ? "field-error" : "contact-text-field"}
                        />
                        <i className={touched.phoneNo && errors.phoneNo ? "ion-alert" : "hidden"}></i>
                    </div>

                    <div className="form-element">
                        <label className="form-label">Message</label>
                        <textarea 
                            name="message" 
                            className="contact-message-field"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    
                    <button type="submit" id="contact-submit">Send</button>

                </Form>
            )} 

            </Formik>
        </>
    )
}
export default BaseForm