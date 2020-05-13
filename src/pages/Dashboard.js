import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FiMoreHorizontal } from 'react-icons/fi';
import NumberFormat from 'react-number-format';
import API from '../utils/API';
import { fetchCoins } from '../actions/dashboard';

class Dashboard extends Component {
    constructor(props){
        super(props);

        // this.state = {
        //     coins: '',
        //   }
    }
    componentDidMount(){
        this.props.fetchCoins();
    }

    stylechange = (value) => {
        const color = value >= 0 ? 'green' : 'red';
        return <span className={`text-${color}-600`}>{`${value}%`}</span>
    }

    render() {
        const { isLoading, coins } = this.props;
        if (isLoading) {
            return <div>Loading...</div>;
          }
        return (
            <div className="grid grid-cols-1 border ">
                <div className="m-1">
                <h1 className="text-center m-4 default-text font-bold text-2xl">
                Welcome to smart trade board
                </h1>
                <div className="overflow-scroll">
                    <table className="rounded table-fixed">
                        <thead>
                            <tr>
                            <th className="px-4 py-2">No</th>
                            <th className="px-4 py-2">Symbol</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Market Cap</th>
                            <th className="px-4 py-2">Change in 24hrs</th>
                            <th className="px-4 py-2">Circulating Supply</th>
                            <th className="px-4 py-2">View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins && coins.data.map((coin, index) => 
                                <tr key={index}>
                                    <td className="border px-4 py-2">{ coin.rank }</td>
                                    <td className="border px-4 py-2">{ coin.symbol }</td>
                                    <td className="border px-4 py-2">{ coin.name }</td>
                                    <td className="border px-4 py-2">
                                        <NumberFormat className="default-text" value={coin.price_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    </td>
                                    <td className="border px-4 py-2">
                                        <NumberFormat value={coin.market_cap_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    </td>
                                    <td className="border px-4 py-2">{ this.stylechange(coin.percent_change_24h) }</td>
                                    <td className="border px-4 py-2">
                                        <NumberFormat value={coin.csupply} displayType={'text'} thousandSeparator={true} /> {coin.symbol}
                                    </td>
                                    <td className="border px-4 py-2">
                                        <Link to={'/coin/'+coin.id}>
                                            <FiMoreHorizontal/>
                                        </Link>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    </div>
            </div>
        </div>
        );
    }
}

// export const mapStateToProps = state => ({
//     dictionaries: state.dictionaries.dictionaries,
//     isFetching: state.dictionaries.loading,
//     dictionary: state.dictionaries.dictionary,
//     organizations: state.organizations.organizations,
//   });
export const mapStateToProps = state => ({
    isLoading: state.dashboard.isLoading,
    coins: state.dashboard.coins,
  });

//   export default connect(mapStateToProps)(Dashboard);
  export default connect(mapStateToProps,{ fetchCoins,},)(Dashboard);