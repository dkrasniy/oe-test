import React, {Component} from 'react';
import {
    Container,
    Navbar,
    Row
} from 'reactstrap';
import TabItem from './tabitem/TabItem';
import PropTypes from 'prop-types'

import './tabbar.css';

export default class TabBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0
        }
    }


    render() {
        let {activeTab} = this.state;
        return (
            <React.Fragment>
                <Navbar className="tabbar position-fixed">
                    <Container>
                        <TabItem link={"//"} text={"Home"} icon={""}></TabItem>
                        <TabItem link={""} text={"Change Plans"} icon={""}></TabItem>
                        <TabItem link={""} text={"Compare Plans"} icon={""}></TabItem>
                        <TabItem link={""} text={"Saved"} icon={""}></TabItem>
                        <TabItem link={""} text={"Statements"} icon={""}></TabItem>
                    </Container>
                </Navbar>
            </React.Fragment>);
    }
}



