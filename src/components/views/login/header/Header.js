import React, {Component} from 'react';
import {Nav, Navbar} from 'reactstrap';

export default class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar className="navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand m-auto" href="#"><strong>my</strong>|CalPERS</a>
                </Navbar>
            </React.Fragment>
        );
    }
}



