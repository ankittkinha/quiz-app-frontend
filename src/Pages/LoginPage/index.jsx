import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./styles.module.css"
import Navbar from "../../Components/Navbar"

export default function LoginPage() {

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
        username: Yup.string('Please enter a valid name').required('This is a required field')
            .min(3, 'Username must contain 3 characters').max(24, 'Username is too long'),
        password: Yup.string().required('This is a required field').min(3).max(16)

    })

    const [initialLoginValues] = useState({
        username: '',
        password: ''
    })

    const handleFormSubmit = async (values) => {
        // console.log("values ", values)
        console.log("Hnadle form submit running")
        console.log(values.username)
        console.log(values.password)
        const user = localStorage.getItem("user")
        const pass = localStorage.getItem("pass")
        console.log("------------------")
        console.log(user)
        console.log(pass)
        if (values.username === user && values.password === pass) {
            localStorage.setItem("token", "asdfzxcvqwer")
            navigate("/")
        } else {
            setResponse({
                textMessage: "Invalid Credentials",
                alertClass: "alert alert-danger"
            })
            setTimeout(removeAlert, 4000)
        }
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
                                    <header className={`text-center mb-3 form-heading ${styles.heading}`}>Login</header>
                                    <div className={`mb-3 ${styles.firstInput}`}>
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
                                            Don't have an account? Sign up <Link to="/signup">here</Link>
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
