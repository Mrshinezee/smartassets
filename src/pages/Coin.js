import React from 'react';
import PropTypes from 'prop-types';

import Form from '../components/form/PurchaseForm'

const Coin = props => {
    return (
        <div class="container mx-auto px-4">
            <div>
                selected coin
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
                <div mx-auto>
                <h1 text-center>Buy</h1>
                    <Form 
                    name='buy'/>
                </div>
                <div mx-auto>
                <h1 text-center>Sell</h1>
                    <Form
                    name='sell' />
                </div>
            </div>
        </div>
    );
};

Coin.propTypes = {
    
};

export default Coin;