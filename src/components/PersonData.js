import React, {Component} from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

export default class PersonData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userData: null,
        }
    }

    CALPERSID = this.props.selectedUserId;

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
                <Container>
                    <Row>
                        <Col>
                <div>
                    {this.CALPERSID}
                    <h1>Welcome back, {userData.firstName}</h1>
                    <p>First Name: {userData.firstName}</p>
                    <p>Miodle Name: {userData.middleName}</p>
                    <p>Last Name: {userData.lastName}</p>
                    <p>Last Name: {userData.dateOfBirth}</p>
                    <p>Membership Date: {userData.membershipDate}</p>
                    <p>First Name: {userData.firstName}</p>
                </div>
                        </Col>
                    </Row>
                </Container>
            );
        }

        return (
            tempuserData
        );
    }
}
  

  
  