import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">Case One</Link>
            <Link to="/casetwo">Case two</Link>
            <Link to="/casethree">Case Three</Link>
            <Link to="/casefour">Case Four</Link>
            <Link to="/casefive">Case Five</Link>
            <Link to="/casesix">Case Six</Link>       
        </div>
    )
}

export default Navbar;