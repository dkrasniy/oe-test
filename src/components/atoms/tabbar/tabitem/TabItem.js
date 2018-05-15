import React, {Component} from 'react';
import {Col} from 'reactstrap'
import fontawesome from '@fortawesome/fontawesome'

import './tabitem.css';

export default class TabItem extends Component {

    render() {
        let {text, link, icon} = this.props;
        return (
            <React.Fragment>
                <Col>
                    <a href={link}>
                        <div className="icon">
                            {fontawesome.icon({ prefix: 'fas', iconName: "user" })}
                        </div>
                        <span className="menu-item-name">{text}</span>
                    </a>
                </Col>
            </React.Fragment>);
    }
}
