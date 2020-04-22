import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';
import { FiSun, FiMoon } from 'react-icons/fi';

const Header = props => {
    const darkMode = useDarkMode(false, {
        classNameDark: 'dark',
        classNameLight: 'light',
        storageKey: 'darkMode',
      })
    return (
        <header 
            style={{
             background: `#ff6900`,
            }}
        >
            <div className="grid grid-cols-2">
                <div className="right-navbar mx-5 md:mx-0">
                    <h1 className="py-2 px-4">
                        <Link
                            to="/"
                            style={{
                                color: `white`,
                                textDecoration: `none`,
                            }}
                            >
                            SmartAssets
                        </Link>
                    </h1>
                </div>
                <div className="left-navbar">
                    <div className="float-right">
                        <Link className="m-1 py-2 px-4">Markets</Link>
                        <Link className="m-1 py-2 px-4">Log In</Link>
                        <Link className="m-1 py-2 px-4">Sign Up</Link>
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
            </div>
        </header>
    );
};

Header.propTypes = {
    
};

export default Header;