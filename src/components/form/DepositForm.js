import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaArrowCircleRight } from 'react-icons/fa';
import Visa from '../../assets/coinex_picture_manage_ic_visa_card_719.png'
import MasterCard from '../../assets/coinex_picture_manage_ic_master_card_451.png'
import Logo from '../../assets/coinex_picture_manage_ic_simplex_677.png'


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

const DepositForm = ({ buy: { amount, crytoRate, fiatRate, unit, result }, handleChange }) => {
    return (
        <div>
            <div className="text-row grid grid-cols-1 sm:grid-cols-2 mb-4">
                <div className="font-semibold">I want to spend</div>
                <div className="hidden sm:block font-semibold">I want to buy</div>

            </div>
         <div>
        <Formik
                initialValues={{ crytoRate: 0, total: 0 }}
                validationSchema={formValidation}
                // onSubmit={handleSubmit}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                    }, 1000);
                  }}
                >
                {({ isSubmitting }) => (
                    <Form className="w-full">
                    <div className="form-row grid grid-cols-1 sm:grid-cols-2 overflow-scroll">
                        <div className="flex flex-row">
                            <div className="form-group w-9/12">
                                <Field
                                    placeholder="Enter Amount"
                                    type="number"
                                    onChange={handleChange}
                                    name="amount"
                                    value={amount}
                                    className="p-2 outline-none rounded w-full border"
                                />
                                <ErrorMessage
                                component="div"
                                name="amount"
                                className="error-message text-xs text-red-400"
                                />
                            </div>
                            <div className="form-group">
                                <Field className="p-2 h-10"
                                      name="fiatRate" 
                                      component="select"
                                      onChange={handleChange}
                                      value={fiatRate}
                                      placeholder="Select Fiat">
                                    <option value={1}>USD</option>
                                    <option value={420}>NGN</option>
                                </Field>
                            </div>
                            <div className="mx-4 p-2">
                                <FaArrowCircleRight/>
                            </div>
                       </div>
                      <div className="second-row">
                        <div className="block sm:hidden mb-4 mt-2 font-semibold">I want to buy</div>
                            <div className="flex flex-row">
                                    <div className="form-group">
                                            <Field name="crytoRate" 
                                                className="p-2 h-10 w-20 resetOption" 
                                                value={crytoRate} 
                                                onChange={handleChange} 
                                                component="select" 
                                                placeholder="Select Crypto">
                                                <option value={1}>USDT</option>
                                                <option value={9280}>BTC</option>
                                            </Field>
                                    </div>
                                    <div className="m-2">@</div>
                                    <div className="form-group w-3/12">
                                        <Field
                                            type="number"
                                            onChange={handleChange}
                                            name="crytoRate"
                                            value={crytoRate}
                                            className="outline-none rounded border p-2 w-full"
                                        />
                                        <ErrorMessage
                                        component="div"
                                        name="password"
                                        className="error-message text-xs text-red-400"
                                        />
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                    <div className="view-container overflow-scroll border flex w-3/4 p-2 sm:p-10 mt-4" style={{'min-width': 600}}>
                        <div className="layer1 w-3/4 flex justify-around m-2">
                            <div className="col-1 flex flex-row">
                                <div className="w-8 h-8 mx-2">
                                    <img src={Logo} alt="logo"/>
                                </div>
                                <div>
                                    <div className="text-xs"> Payment Partner</div>
                                    <div className="text-xs font-semibold my-2"> Crypto-Web</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div>
                                    <div className="text-xs"> Payment Methods</div>
                                </div>
                                <div className="flex flex-row my-2">
                                    <img className="w-8 h-5" src={Visa} alt="visa"/>
                                    <img className="w-8 h-5" src={MasterCard} alt="mastercard"/>
                                </div>
                            </div>
                            <div className="col-3">
                                <div>
                                    <div className="text-xs"> Price (Fee included)</div>
                                    <div className="text-xs font-semibold"> Zero Fee</div>
                                </div>
                            </div>
                        </div>
                        <div className="layer1">
                        <div className="m-2 text-xs">{result === 0 ? '--' : result} {unit}</div>
                            <div className="m-2">
                                <button
                                type="submit"
                                className="green-btn px-4 text-xs opacity-50 cursor-not-allowed"
                                disabled={isSubmitting}
                                >
                                Buy
                                </button>
                            </div>
                        </div>
                    </div>
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    );
};

DepositForm.propTypes = {
    
};

export default DepositForm;