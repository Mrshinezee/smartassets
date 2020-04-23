import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const loginValidation = Yup.object().shape({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(8)
      .max(16)
      .required('Password is required'),
  });

const Login = props => {
    const handleSubmit = () => {
        console.log('came here')
    }
    return (
        <div className="loginContainer">
            <div className="loginTitle text-center pt-4 pb-2">
                <h1 className="text-5xl font-thin tracking-wide p-2">Log In</h1>
            </div>
            <div className="formContainer flex justify-center">
                <div className="loginForm flex justify-center w-3/4 sm:w-2/5">
                <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginValidation}
            onSubmit={handleSubmit}
            >
            {({ isSubmitting }) => (
                <Form className="flex justify-center flex-col items-center w-full p-5 md:p-8">
                <div className="form-group m-2 w-full">
                    <label htmlFor="email" className="mt-4">
                        <span className="block">Email address:</span>
                    </label>
                    <Field
                        type="email"
                        name="email"
                        className="w-full h-auto sm:h-8"
                    />
                    <ErrorMessage
                    component="div"
                    name="email"
                    className="error-message"
                    />
                </div>
                <div className="form-group m-2 w-full">
                    <label htmlFor="password" className="mt-4">
                        <span className="block">Password:</span>
                    </label>
                    <Field
                        type="password"
                        name="password"
                        className="w-full h-auto sm:h-8"
                    />
                    <ErrorMessage
                    component="div"
                    name="password"
                    className="error-message"
                    />
                </div>
                <div className="m-4">
                    <button
                    type="submit"
                    className="green-btn px-10"
                    disabled={isSubmitting}
                    >
                    Sign In
                    </button>
                </div>
                <hr />
                <Link className="text-center" to="/forgot-password">
                    Forgot Password
                </Link>
                </Form>
            )}
            </Formik>
        </div>
            </div>
            
        </div>
    );
};

Login.propTypes = {
    
};

export default Login;