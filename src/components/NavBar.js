import React from 'react';

import {Link } from "react-router-dom";

const NavBar = ()=>{

    return (
        <nav style={{ marginBottom:20 }} className="navbar navbar-dark bg-primary">
            <Link to="/" className="navbar-brand" >User Reading List</Link>
            <Link to="/addUser" className="navbar-brand">Add User</Link>
        </nav>

    );

};
export default NavBar;
