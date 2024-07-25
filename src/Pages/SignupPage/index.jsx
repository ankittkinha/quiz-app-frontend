import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./styles.module.css"
import Navbar from '../../Components/Navbar'

export default function SignupPage() {

    const navigate = useNavigate()

    const [response, setResponse] = useState({
        textMessage: "",
        alertClass: ""
    })

    const removeAlert = () => {
        setResponse({
            textMessage: "",
            alertClass: ""
        })
    }



    const loginSchema = Yup.object().shape({
        username: Yup.string('Please enter a valid username').required('This is a required field')
            .min(3, 'Username must contain 3 characters').max(16, 'Username is too long'),
        name: Yup.string('Please enter a valid name').required('This is a required field')
            .min(3, 'Name must contain 3 characters').max(30, 'Name is too long'),
        email: Yup.string('Please enter a valid name').email("Enter a valid email").required('This is a required field'),
        password: Yup.string().required('This is a required field').min(5, "Password must contain at least 5 characters").max(16, "Password cannot be greater than 16 characters")

    })

    const [initialLoginValues] = useState({
        username: '',
        name: '',
        email: '',
        password: ''
    })

    const handleFormSubmit = async (values) => {
        console.log(values)
        localStorage.setItem("user", values.username)
        localStorage.setItem("pass", values.password)
        localStorage.setItem("token", "asdfzxcvqwer")

        setResponse({
            textMessage: "Your account has been created",
            alertClass: "alert alert-success"
        })
        setTimeout(removeAlert, 1500)
        setTimeout(() => {
            navigate("/")
        }, 1400)

    }

    return (
        <div>
            <Navbar />
            <div className={`container ${styles.layout}`}>
                <div className={` ${styles.internalLayout}`}>
                    <Formik initialValues={initialLoginValues}
                        onSubmit={handleFormSubmit}
                        validationSchema={loginSchema}
                    >

                        {(formik) => {
                            return (

                                <Form>
                                    <div className={`${response.alertClass} text-center ${styles.validationMsg}`}>
                                        {response.textMessage}
                                    </div>
                                    <header className={`text-center mb-3 form-heading ${styles.heading}`}>Signup</header>
                                    <div className='mb-3'>
                                        <Field
                                            type="text"
                                            className={
                                                formik.touched.username && formik.errors.username
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            name="username"
                                            placeholder="Username"
                                        />
                                        <ErrorMessage name="username">
                                            {(errorMessage) => (
                                                <small className="text-danger">{errorMessage}</small>
                                            )}
                                        </ErrorMessage>
                                    </div>


                                    <div className='mb-3'>
                                        <Field
                                            type="text"
                                            className={
                                                formik.touched.name && formik.errors.name
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            name="name"
                                            placeholder="Name"
                                        />
                                        <ErrorMessage name="name">
                                            {(errorMessage) => (
                                                <small className="text-danger">{errorMessage}</small>
                                            )}
                                        </ErrorMessage>
                                    </div>


                                    <div className='mb-3'>
                                        <Field
                                            type="text"
                                            className={
                                                formik.touched.email && formik.errors.email
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            name="email"
                                            placeholder="Email"
                                        />
                                        <ErrorMessage name="email">
                                            {(errorMessage) => (
                                                <small className="text-danger">{errorMessage}</small>
                                            )}
                                        </ErrorMessage>
                                    </div>


                                    <div className="mb-3">
                                        <Field
                                            type="password"
                                            className={
                                                formik.touched.password && formik.errors.password
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            name="password"
                                            placeholder="Password"
                                        />
                                        <ErrorMessage name="password">
                                            {(errorMessage) => (
                                                <small className="text-danger">{errorMessage}</small>
                                            )}
                                        </ErrorMessage>
                                    </div>


                                    <div className="d-grid mb-3 mt-4">
                                        <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                                            Submit
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <p>
                                            Already have an account? Login <Link to="/login">here</Link>
                                        </p>
                                    </div>
                                </Form>
                            )
                        }}

                    </Formik>
                </div>
            </div>

        </div>
    )
}
