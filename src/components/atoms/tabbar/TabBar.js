import React, {Component} from 'react';
import {
    Container,
    Navbar,
    Row
} from 'reactstrap';
import TabItem from './tabitem/TabItem';
import PropTypes from 'prop-types'
import {faCoffee, faSearch} from '@fortawesome/fontawesome-free-solid/'

import './tabbar.css';

export default class TabBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0
        }
    }


    _handleClick = (e) => {
        e.preventDefault();
        console.log(e.target);

    }
    render() {
        let {activeTab} = this.state;
        return (
            <React.Fragment>
                <Navbar className="tabbar position-fixed">
                    <Container>
                        <TabItem link={"/"} text={"Home"} faIcon={faCoffee}></TabItem>
                        <TabItem link={"change-plans"} text={"Change Plans"} faIcon={faSearch}></TabItem>
                        <TabItem link={"compare"} text={"Compare Plans"} faIcon={"search"}></TabItem>
                        <TabItem link={"saved"} text={"Saved"} faIcon={"bookmark"}></TabItem>
                        <TabItem link={"statements"} text={"Statements"} faIcon={"file-alt"}></TabItem>
                    </Container>
                </Navbar>
            </React.Fragment>);
    }
}



