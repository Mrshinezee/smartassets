import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';
import { FiSun, FiMoon, FiAlignJustify, FiX } from 'react-icons/fi';
import MenuDropdown from './MenuDropdown';
import { isAuthenticated, logout }  from '../utils/authorize';

const Header = props => {
    const [isOpen, opening] = useState(false);
    const darkMode = useDarkMode(false, {
        classNameDark: 'dark',
        classNameLight: 'light',
        storageKey: 'darkMode',
      })
    return (
        <header className="sm:flex sm:justify-between sm:item-center"
            style={{
             background: `#ff6900`,
            }}
        >
            <div className="flex item-center justify-between px-4 py-2">
                <div>
                    <Link
                        className="text-green-400 hover:text-green-600 no-underline font-bold text-2xl"
                        to="/"
                        >
                        SmartAssets
                    </Link>
                </div>
                <div className="sm:hidden">
                    <button className="block" onClick={() => opening(!isOpen)}>
                    {!isOpen &&<FiAlignJustify className="text-2xl text-green-400 hover:text-green-600"/>}
                    {isOpen &&<FiX className="text-2xl text-green-400 hover:text-green-600"/>}
                    </button>
                </div>
            </div>
            <div className={`pt-2 pb-4 px-4 sm:block sm:flex ${isOpen ? 'block': 'hidden'}`}>
                { isAuthenticated() &&<Link className="hover:text-green-800 mt-1 block sm:ml-2" to="board">Markets</Link>}
                { !isAuthenticated() &&<Link className="hover:text-green-800 mt-1 block sm:ml-4" to="login">Log In</Link>}
                { !isAuthenticated() &&<Link className="hover:text-green-800 mt-1 block sm:ml-4" to="login">Sign Up</Link>}
                <button
                    className="text-gray-800 hover:text-green-800 font-bold rounded inline-flex items-start mt-1 sm:mt-0 sm:ml-4 sm:mr-4"
                    onClick={darkMode.toggle}
                >
                    {darkMode.value ? (
                        <FiSun color="white" className="hover:text-green-800 top-0" />
                    ) : (
                        <FiMoon color="black" />
                    )}
                </button>
                { isAuthenticated() && <MenuDropdown/> }

                { isAuthenticated() && <div className=" block sm:hidden border-t">
                    <div className="mt-4">
                        <button className='block h-8 w-8 rounded-full overflow-hidden border-2 border-grey-600 focus:outline-none focus:border-white'>
                            <img className="h-full w-full object-cover" src='https://randomuser.me/api/portraits/men/47.jpg' alt='Your avater'/>
                        </button>

                        <div className="mt-1">
                            <Link to="board" className="block mt-1 text-grey-800 hover:text-green-800">Profile</Link>
                            <Link to="board" className="block mt-1 text-grey-800 hover:text-green-800">Support</Link>
                            <button onClick={() => logout()} className="block mt-1 text-grey-800 hover:text-green-800">Sign out</button>
                        </div>
                    </div>
                </div> }
            </div>
            
            
            {/* <div className="grid grid-cols-2">
                <div className="right-navbar mx-5 md:mx-0">
                    <h1 className="py-2 px-4">
                        <Link
                            className="text-green-400 no-underline font-bold text-2xl"
                            to="/"
                            >
                            SmartAssets
                        </Link>
                    </h1>
                </div>
                <div className="left-navbar">
                    <div className="flex justify-end items-center">
                        <Link className="m-1 py-2 px-4" to="board">Markets</Link>
                        <Link className="m-1 py-2 px-4" to="login">Log In</Link>
                        <Link className="m-1 py-2 px-4" to="login">Sign Up</Link>
                        <button
                            className="text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                            onClick={darkMode.toggle}
                        >
                            {darkMode.value ? (
                                <FiSun color="white" />
                            ) : (
                                <FiMoon color="black" />
                            )}
                        </button>
                    </div>
                </div>
            </div> */}
        </header>
    );
};

Header.propTypes = {
    
};

export default Header;