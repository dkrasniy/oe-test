import React, { Component } from 'react';
import {Container, Row, Col, Form, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types'

import Header from './header/Header';

export default class Login extends Component {

    static propTypes = {
        selectedUserId: PropTypes.number,
        onSelect: PropTypes.func
    };

    workingIds = [
        5600493427,
        6474994805,
        6452522440,
        5564535492,
        6632408185,
        4618604679,
        5826752269,
        3996179678,
        7302651964,
        1677401305,
        6827859055,
        3685610572,
        6581985123,
        3148148090
    ];

    _handleSelect = (e) => {
        let {onSelect} = this.props;

        if (onSelect) {
            e.stopPropagation();
            onSelect(parseInt(e.target.value, 10));
        }
    };

    render() {
        return (
        <React.Fragment>
            <Header/>
            <Container>
                <Row>
                  <Col>
                        <h1 className="page-header">Open Enrollment</h1>
                        <p>Please sign in to continue</p>
                        <Form>
                        <Label className="float-label">Username</Label>
                        {/*<Input type="text" class="form-control" id="loginUsername"/>*/}

                            <select onChange={this._handleSelect}>
                                {this.workingIds.map((id) => {
                                    return <option value={id} key={id}> {id} </option>
                                })}
                            </select>

                        <a onClick={this._handleSelect} className="btn btn-primary btn-block" href="#/" role="button">Continue</a>

                        <p className="privacy-acknowledgement">By signing in, you agree to our <a href="">Terms & Conditions</a> and <a href="#">Privacy Statement</a>.</p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
        );
    }
}



