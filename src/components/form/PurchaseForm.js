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

const reusableForm = ({ coin, balancing,  bidding, measure, handleChange, name, handleSubmit, color, order}) => {
    const bid = Number.parseFloat(coin.price_usd/measure).toFixed(8);
    let balance = 1;
    let balanceValue =Number.parseFloat(balance).toFixed(3);
    return (
        <div className={`border-2 border-${color}-400 rounded`}>
            <div className="m-2">
                <div>
                    <span>Balance</span>
                    <button className="p-2"
                        onClick={() => balancing(balanceValue, bid)}>
                        {balance}
                    </button>
                        <span>{coin.symbol}</span>
                </div>
                <div>
                    <span>Total</span>
                    <button className="p-2">
                        1
                    </button>
                    <span>{coin.symbol}</span>
                </div>
                <div>
                    <span>Best ask</span>
                    <button className="p-2"
                        onClick={() => bidding(bid)}>
                        {bid}
                    </button>
                    <span>BTC</span>
                </div>
            </div>
            <div className="purchaseContainer flex justify-start sm:justify-center">
                <div className="w-3/4 sm:w-2/3">
                    <Formik
                initialValues={{ amount: 1, price: order.price, total: 0 }}
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
                            type="number"
                            onChange={handleChange}
                            name="amount"
                            value={order.amount}
                            className="inputColor outline-none rounded border"
                        />
                        <ErrorMessage
                        component="div"
                        name="amount"
                        className="error-message text-xs text-red-400"
                        />
                    </div>
                    <div className="form-group m-2 w-full">
                        <label htmlFor="price" className="mt-4">
                            <span className="block">Price:</span>
                        </label>
                        <Field
                            type="number"
                            onChange={handleChange}
                            name="price"
                            value={order.price}
                            className="inputColor outline-none rounded border"
                        />
                        <ErrorMessage
                        component="div"
                        name="password"
                        className="error-message text-xs text-red-400"
                        />
                    </div>
                    <div className="form-group m-2 w-full">
                        <label htmlFor="total" className="mt-4">
                            <span className="block">Total:</span>
                        </label>
                        <Field
                            type="number"
                            onChange={handleChange}
                            name="total"
                            value={order.total}
                            className="inputColor outline-none rounded border"
                        />
                        <ErrorMessage
                        component="div"
                        name="total"
                        className="error-message text-xs text-red-400"
                        />
                    </div>
                    <div className="m-4">
                        <button
                        type="submit"
                        className={`${color}-btn px-10`}
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