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
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <input 
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <input 
                        type="text"
                        name="phoneNo"
                        value={values.phoneNo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <input 
                        type="text"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </form>
            )} 
            
            </Formik>
        </>
    )
}
export default BaseForm