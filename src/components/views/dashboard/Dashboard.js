import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
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
                        <h1 className="page-header">Welcome, {this.state.userData.firstName}</h1>
                        <Row>
                            <Col>
                                <h2 className="page-header card-section-label">2019 Open Enrollment</h2>
                                <Card className="text-center">
                                    <CardImg className="main-image" src={"./assets/undraw_events_2p66.svg"} />
                                    <CardBody>
                                        <h2 className="">Open Enrollment Plan & Compare</h2>
                                        <CardText>Open Enrollment beings September 15, 2018 and ends October 15, 2018</CardText>
                                        <Button className="btn-rounded btn-dashboard" color={"primary"}>Explore 2019 Plan Options</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="page-header card-section-label">Health Plan Summary</h2>
                                <Card>
                                    <CardHeader>Your Medical Plan</CardHeader>
                                    <CardBody>
                                            <CardText>Kaiser Permanente</CardText>
                                            <CardText>Coverage Type</CardText>
                                            <CardText>Premium</CardText>
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



