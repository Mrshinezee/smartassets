import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import DepositForm from '../components/form/DepositForm'

const Deposit = props => {
    const [buy, setBuying] = useState({
        amount: 0,
        fiatRate: 1,
        crytoRate: 1,
        crytoValue: 0,
        unit: 'USDT',
        result: 0
    });
    const fillBuying = (unit,result) => {
        setBuying({
            ...buy,
            // [evt.target.name]: value,
            unit,
            result
        });
    }
    const handleBuyingChange = (evt) => {
        // console.log('evt', evt.target[evt.target.selectedIndex].text)
        let unit = 'USDT';
        let result = 0;
        if(evt.target.name == 'crytoRate' && evt.target[evt.target.selectedIndex].text){
            unit = evt.target[evt.target.selectedIndex].text
        }
        if(evt.target.name == 'amount'){
            unit = buy.unit;
            let amountValue = evt.target.value;
            result = amountValue/buy.fiatRate;
            console.log('result1', result)
            result = result/buy.crytoRate;
            console.log('result2', result, buy.crytoRate )
        }
        const {value} = evt.target;
        setBuying({
            ...buy,
            [evt.target.name]: value,
            unit,
            result
        });
    }
    return (
        <div className="mx-auto px-4">
            <div className="block text-3xl sm:text-5xl m-1">
                Buy Crypto
            </div>
                <pre>
                    {JSON.stringify(buy, null, 2)}
                </pre>
            <div className="deposit flex justify-start">
                <div className="w-full">
                    <DepositForm buy={buy} handleChange={handleBuyingChange}/>
                </div>
            </div>
            
        </div>
    );
};

Deposit.propTypes = {
    
};

export default Deposit;