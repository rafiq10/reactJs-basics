import React from 'react';
import { Navbar,NavbarBrand} from 'reactstrap'

export const Header = (props) => {
        return(
            <Navbar color="dark" className="navbar-dark navbar-expand-sm" expand fixed="top">
                <NavbarBrand href="/">Home</NavbarBrand>
                <NavbarBrand href="/">User</NavbarBrand>
            </Navbar>
        )
};