import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{backgroundColor: "blue"}}>
            <NavLink style={{marginRight: "1rem", color: "white"}} to='/'>Home</NavLink>
            <NavLink style={{margin: "0.5rem", color: "white"}} to='/users/add'>Add User</NavLink>
            <NavLink style={{marginLeft: "1rem", color: "white"}} to='/update'>Update</NavLink>
        </div>
    );
};

export default Header;