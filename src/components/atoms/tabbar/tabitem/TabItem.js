import React, {Component} from 'react';
import {Col} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


import './tabitem.css';

export default class TabItem extends Component {

    render() {
        let {text, link, faIcon} = this.props
        console.log(faIcon)


        return (
            <React.Fragment>
                <Col>
                    <a href={link}>
                        <div className="icon">
                     
                        <FontAwesomeIcon icon={faIcon} />

                        </div>
                        
                        <span className="menu-item-name">{text}</span>
                    </a>
                </Col>
            </React.Fragment>);
    }
}



