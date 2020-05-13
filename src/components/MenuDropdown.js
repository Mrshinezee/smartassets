import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {logout} from '../utils/authorize'


const MenuDropdown = props => {
    const [isOpen, opening] = useState(false);
    return (
        <div className="hidden sm:block relative">
            <div>
                <button onClick={() => opening(!isOpen)} className='block h-8 w-8 rounded-full overflow-hidden border-2 border-grey-600 focus:outline-none focus:border-white'>
                    <img className="h-full w-full object-cover" src='https://randomuser.me/api/portraits/men/47.jpg' alt='Your avater'/>
                </button>
                {isOpen && <button className="fixed top-0 bottom-0 right-0 left-0 w-full" onClick={() => opening(false)}></button>}
                {isOpen &&
                <div className="absolute right-0 w-48 bg-white rounded-lg py-2 mt-1 border-2">
                    <Link to='/board' className="block px-4 py-2 text-grey-800 hover:text-green-800">Profile</Link>
                    <Link to='/board' className="block px-4 py-2 text-grey-800 hover:text-green-800">Support</Link>
                    <button onClick={() => logout()} className="block mt-1 text-grey-800 hover:text-green-800">Sign out</button>

                </div>
                }
            </div>
        </div>
    );
};

MenuDropdown.propTypes = {
    
};

export default MenuDropdown;