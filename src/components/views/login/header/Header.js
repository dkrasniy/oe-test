import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

export default class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar className="navbar-expand-lg navbar-light bg-light">
                    <NavbarBrand className="m-auto" href="#"><strong>my</strong>|CalPERS</NavbarBrand>
                </Navbar>
            </React.Fragment>
        );
    }
}



