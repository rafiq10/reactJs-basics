import React from 'react';

import { Navbar,NavbarBrand} from 'reactstrap'

export class Header extends React.Component {
    render() {
        return(
            <Navbar color="dark" className="navbar-dark navbar-expand-sm" expand fixed="top">
                <NavbarBrand href="/">Home</NavbarBrand>
            </Navbar>
        );
    }
}