import React from 'react';
import { Navbar,NavbarBrand} from 'reactstrap'
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
        return(
            <Navbar color="dark" className="navbar-dark navbar-expand-sm" expand fixed="top">
                <NavbarBrand><NavLink to={"/home"} activeStyle={{color: "white"}}>Home</NavLink></NavbarBrand>
                <NavbarBrand><NavLink to={"/user/10" } activeStyle={{color: "white"}}>User</NavLink></NavbarBrand>
            </Navbar>
        )
};