import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
// import { loginUser } from '../actions/auth';

const formValidation = Yup.object().shape({
    amount: Yup.number()
      .positive('value must be positive')
      .required('Amount is required'),
    price: Yup.number()
      .positive('value must be positive')
      .required('Price is required'),
    total: Yup.number()
      .positive('value must be positive')
      .required('total is required'),
  });

const reusableForm = ({ dispatch, history, name}) => {
    const handleSubmit = ({ email, password }, { setSubmitting }) => {
        // dispatch(loginUser({ email, password, history }));
    
        setSubmitting(false);
      };
    return (
        <div className="purchaseContainer">
            <div className="formContainer flex justify-center">
                <div className="loginForm flex justify-center w-3/4 sm:w-2/5">
                <Formik
            initialValues={{ amount: 1, price: 0, total: 0 }}
            validationSchema={formValidation}
            onSubmit={handleSubmit}
            >
            {({ isSubmitting }) => (
                <Form className="flex justify-center flex-col items-center w-full p-5 md:p-8">
                <div className="form-group m-2 w-full">
                    <label htmlFor="amount" className="mt-4">
                        <span className="block">Amount:</span>
                    </label>
                    <Field
                        type="text"
                        name="amount"
                        className="w-full h-auto sm:h-8"
                    />
                    <ErrorMessage
                    component="div"
                    name="amount"
                    className="error-message"
                    />
                </div>
                <div className="form-group m-2 w-full">
                    <label htmlFor="price" className="mt-4">
                        <span className="block">Price:</span>
                    </label>
                    <Field
                        type="text"
                        name="price"
                        className="w-full h-auto sm:h-8"
                    />
                    <ErrorMessage
                    component="div"
                    name="password"
                    className="error-message"
                    />
                </div>
                <div className="form-group m-2 w-full">
                    <label htmlFor="total" className="mt-4">
                        <span className="block">Total:</span>
                    </label>
                    <Field
                        type="text"
                        name="total"
                        className="w-full h-auto sm:h-8"
                    />
                    <ErrorMessage
                    component="div"
                    name="total"
                    className="error-message"
                    />
                </div>
                <div className="m-4">
                    <button
                    type="submit"
                    className="green-btn px-10"
                    disabled={isSubmitting}
                    >
                    {name}
                    </button>
                </div>
                </Form>
            )}
            </Formik>
        </div>
            </div>
            
        </div>
    );
};

export default reusableForm;