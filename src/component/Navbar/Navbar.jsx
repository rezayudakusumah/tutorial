import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">Palyndrome</Link>
            <Link to="/star">StarTriangle</Link>
            <Link to="/number">NumberTriangle</Link>
        </div>
    )
}

export default Navbar;