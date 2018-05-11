import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardText,
    CardBody,
    CardFooter,
    Button
} from 'reactstrap';
import PropTypes from 'prop-types'

import './dashboard.css';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userData: null,
        }
    }

    CALPERSID = this.props.selectedUserId;

    static propTypes = {
        selectedUserId: PropTypes.number
    };

    componentWillReceiveProps() {
        console.log("here");
        fetch("http://ws-timo2-mycalpers.calpers.ca.gov/env08ws/restservices-interface/participant?cid=" + this.CALPERSID)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({userData: responseData[0]});
            })

    }

    componentDidMount() {
        fetch("http://ws-timo2-mycalpers.calpers.ca.gov/env08ws/restservices-interface/participant?cid=" + this.CALPERSID)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({userData: responseData[0]});
            })

    }

    render() {
        let {userData} = this.state;
        let tempuserData = null;

        if (userData !== null) {
            tempuserData = (
                <React.Fragment>
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="page-header">Welcome, {this.state.userData.firstName}</h1>
                                <Card>
                                    <CardBody>
                                        <CardText>Important notifications need attention</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="page-header">2019 Open Enrollment</h2>
                                <Card>
                                    <CardHeader>Open Enrollment Plan & Compare</CardHeader>
                                    <CardBody>
                                        <CardText>Open Enrollment beings September 15, 2018 and ends October 15, 2018</CardText>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                            <Button className="btn-rounded btn-dashboard" color={"primary"}>Explore 2019 Plan Options</Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="page-header">Health Plan Summary</h2>
                                <Card>
                                    <CardHeader>Your Medical Plan</CardHeader>
                                    <CardBody>
                                            <CardText>Kaiser Permanente</CardText>
                                    </CardBody>
                                </Card>
                                <Card>

                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </React.Fragment>);
        }
        return (tempuserData);
    }
}



