import React from 'react';
import { MdExposureZero, MdBusinessCenter,MdSwapVerticalCircle } from "react-icons/md";
import { FaBitcoin, FaTv, FaUnlockAlt } from "react-icons/fa";
import logo from '../logo.svg';

const Benefit = ({description, title,children}) => (
    <div className="p-4 m-2">
        <div className="flex justify-center m-2">
            <div className="text-green-400 text-6xl">{children}</div>
        </div>
        <div className="text-center">{title}</div>
        <div className="text-center">{description}</div>
    </div>
)


export default () => (
  <div className="Home m-4">

      <div className="landingImage bg-center bg-no-repeat bg-cover -m-4" style={{height: '70vh'}}>
        <div className="bg-fixed bg-cover" 
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <Benefit 
            title='Zero Commission' 
            description='Deposit and withdraw funds with no commission'
        >
            <MdExposureZero/>
        </Benefit>
        <Benefit 
            title='Build your Portifolio' 
            description='Trade and build up your portfolio'
        >
            <MdBusinessCenter/>
        </Benefit>
        <Benefit 
            title='Rates in local currency' 
            description='View the rates of your cryptocurrencies in your local currency'
        >
            <MdSwapVerticalCircle/>
        </Benefit>
        <Benefit 
            title='Accessibility from all devices' 
            description='Trade wherever and whenever you want — on your laptop or smartphone'
        >
            <FaTv/>
        </Benefit>
        <Benefit 
            title='Manage mutiple cryptocurrency' 
            description='Trade and build up your portfolio'
        >
            <FaBitcoin/>
        </Benefit>
        <Benefit 
            title='Negative balance protection' 
            description='You risk only the trade amount. Your balance is protected against debits'
        >
            <FaUnlockAlt/>
        </Benefit>
    </div>
  </div>
);