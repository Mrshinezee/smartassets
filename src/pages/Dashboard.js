import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import API from '../utils/API'
import { fetchCoins } from '../actions/dashboard'

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
    render() {
        const { isLoading, coins } = this.props;
        // console.log('props', coins.data, typeof coins.data)
        if (isLoading) {
            return <div>Loading...</div>;
          }
        return (
            <div className="w-2/3 mx-auto">
                <h1 className="text-center m-4">
                Welcome to smart trade board
                </h1>
                <div >
                    <table className="rounded">
                        <thead>
                            <tr>
                            <th className="px-4 py-2">No</th>
                            <th className="px-4 py-2">Symbol</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Market Cap</th>
                            <th className="px-4 py-2">Price</th>
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
                                    <td className="border px-4 py-2">{ '$'+ coin.market_cap_usd }</td>
                                    <td className="border px-4 py-2">{ coin.price_usd }</td>
                                    <td className="border px-4 py-2">{ coin.percent_change_24h }</td>
                                    <td className="border px-4 py-2">{ coin.csupply.concat(coin.symbol) }</td>
                                    <td className="border px-4 py-2">
                                        <Link to='/coin'>Go</Link>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
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