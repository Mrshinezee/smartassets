import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { fetchedCoin } from '../actions/coin';


import Form from '../components/form/PurchaseForm'

const toggleStyle = 'border-l border-t border-r rounded-t font-semibold'

const Coin = ({dispatch, selectedCoin, match, isLoading, user}) => {
    let measure = 9216;
    const [tab, opening] = useState(1);
    const timeoutRef =  useRef(null);
    const [coinPrice, setCoinPrice] = useState('');
    const [conversionRate, setConversionRate] = useState('');
    const [amount, setAmount] = useState('');
    const [order, setOrder] = useState({
        amount: 0,
        price: 0,
        total: 0,
    });

    const orderSubmit = ({ amount, price, total }, { setSubmitting }) => {
        setOrder({
            ...order,
            amount,
            price,
            total
        });
        setSubmitting(false);
    };


    const handleOrderChange = (evt) => {
        const value = evt.target.value;
        setOrder({
            ...order,
            [evt.target.name]: value
        });
    }

    const bidding = (coinPrice) => {
        setOrder({ ...order, 
            price: coinPrice
        })
    }
    const balancing = (balance, bid) => {
        setOrder({ ...order,
            amount: balance,
            price: bid
        })
    }

    const stylechange = (value) => {
        const color = value >= 0 ? 'green' : 'red';
        return <span className={`block text-${color}-400`}>{`${value}%`}</span>
    }
    

    useEffect(() => {
        if (!selectedCoin) {
          dispatch(fetchedCoin(match.params.coinId));
        }
      }, [dispatch, selectedCoin]);

    useEffect(() => {

    }, []); 

    
      if (isLoading && !selectedCoin) {
        return <div>Loading...</div>;
      }
    return (
        <div className="container mx-auto px-4">
        {selectedCoin && selectedCoin.map((coin, index) => 
            <div key={index} className="grid md:grid-cols-3 sm:grid-cols-1">
                <div className="md:col-start-1 md:col-span-2 m-1 overflow-scroll">
                        <div>
                            <span className="block text-5xl m-1">{coin.name}</span>
                            <span className="block m-1">Current Value:</span>
                            <span className="block text-4xl m-1">
                                <NumberFormat value={coin.price_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </span>
                            <span className="block">more</span>
                            <div className="block">
                            <div className="border w-auto inline-block m-1 rounded">
                                <span className="p-1 opacity-75 ashing">Price</span>
                                <input
                                    className="inputColor p-1 border"
                                    value={coinPrice}
                                    min='0'
                                    onChange={event => setCoinPrice(event.target.value)}
                                    name="coinPrice"
                                    type="number"
                                    />
                            </div>
                            <br/>
                            <div className="border w-auto inline-block m-1 rounded">
                                <span className="p-1 opacity-75 ashing">Rate</span>
                                <input
                                    className="inputColor p-1 border"
                                    value={conversionRate}
                                    onChange={event => setConversionRate(event.target.value)}
                                    name="conversionRate"
                                    type="number"
                                    />
                            </div>
                            <br/>
                            <div className="border bg-gray-900 w-auto inline-block m-1 rounded">
                                <span className="p-1 -my-2 opacity-75 ashing">Amount</span>
                                <input
                                    className="inputColor p-1 border"
                                    value={amount}
                                    onChange={event => setAmount(event.target.value)}
                                    name="Amount"
                                    type="number"
                                    />
                            </div>
                            <div className="border bg-gray-900 w-auto inline-block m-1 rounded">
                                <input
                                    className="inputColor p-1 border"
                                    value={amount}
                                    onChange={event => setAmount(event.target.value)}
                                    name="Amount"
                                    type="number"
                                    />
                            </div>
                            </div>
                        </div>
                    <div className="md:flex md:flex-row md:justify-between md:items-center border m-1">
                        <div className="m-1 md:px-4 border-b sm:border-b-0 sm:border-r">
                            <span className="block">Market Cap</span>
                            <span className="block">
                                <NumberFormat className="text-green-400" value={coin.market_cap_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                             </span>
                        </div>
                        <div className="m-1 md:px-6 border-b sm:border-b-0 sm:border-r">
                            <span className="block">Hourly Change</span>
                            {stylechange(coin.percent_change_1h)}
                        </div>
                        <div className="m-1 md:px-6 border-b sm:border-b-0 sm:border-r">
                            <span className="block">Daily Change</span>
                            {stylechange(coin.percent_change_24h)}
                        </div>
                        <div className="m-1 md:px-6">
                            <span className="block">Weekly Change</span>
                            {stylechange(coin.percent_change_7d)}
                        </div>
                    </div>
                </div>
                <div className="md:col-start-3 md:col-end-3 m-1">
                    <ul className="list-reset flex border-b m-1">
                        <li
                        className="-mb-px mr-1">
                        <button
                        onClick={() => opening(1)}
                        className={`py-2 px-4 text-green-400 ${tab == 1 ? toggleStyle : null}`}>
                            Buy
                        </button>
                        </li>
                        <li 
                        className="-mb-px mr-1">
                        <button 
                        onClick={() => opening(2)}
                        className={`py-2 px-4 text-red-400 ${tab == 2 ? toggleStyle : null}`}>
                            Sell
                        </button>
                        </li>
                    </ul>
                    <div className={`pt-2 pb-4 px-4 ${tab == 1 ? 'block': 'hidden'}`}>
                    <pre>
                        {JSON.stringify(user, null, 2)}
                    </pre>
                        <Form  name='Buy' 
                            handleSubmit={orderSubmit} 
                            color="green"
                            coin={coin}
                            order={order}
                            measure={measure}
                            bidding={bidding}
                            balancing={balancing}
                            handleChange={handleOrderChange}/>
                    </div>
                    <div className={`pt-2 pb-4 px-4 ${tab == 2 ? 'block': 'hidden'}`}>
                        <Form  name='Sell' 
                            handleSubmit={orderSubmit} 
                            color="red"
                            coin={coin}
                            order={order}
                            measure={measure}
                            bidding={bidding}
                            balancing={balancing}
                            handleChange={handleOrderChange}/>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

const mapStateToProps = ({
    coin: { selectedCoin, isLoading },
    auth: { user },
  }) => ({
    selectedCoin,
    isLoading,
    user,
  });
  
  Coin.defaultProps = {
    selectedCoin: {},
  };

  Coin.propTypes = {  
  };
  
//   Coin.propTypes = {
//     user: PropTypes.shape({
//       uid: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//     }).isRequired,
//     profile: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       securityQuestionsAnswers: PropTypes.arrayOf(PropTypes.object).isRequired,
//       address: PropTypes.string.isRequired,
//     }),
//     isLoading: PropTypes.bool.isRequired,
//     dispatch: PropTypes.func.isRequired,
//     history: PropTypes.shape({
//       push: PropTypes.func.isRequired,
//     }).isRequired,
//   };
  
  export default connect(mapStateToProps)(Coin);