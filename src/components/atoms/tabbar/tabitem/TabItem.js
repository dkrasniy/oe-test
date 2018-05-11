import React, {Component} from 'react';
import {Col} from 'reactstrap'

import './tabitem.css';

export default class TabItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {text, link, icon} = this.props;
        return (
            <React.Fragment>
                <Col>
                    <a href={link}>
                        <div className="icon">
                            {fontawesome.icon({ prefix: 'fas', iconName: icon })}
                        </div>
                        <span className="menu-item-name">{text}</span>
                    </a>
                </Col>
            </React.Fragment>);
    }
}



