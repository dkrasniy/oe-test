import React, {Component} from 'react';


export default class PersonData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userData: null,
        }
    }

    CALPERSID = this.props.data;

    componentWillReceiveProps() {
        console.log("here");
        fetch("http://ws-timo2-mycalpers.calpers.ca.gov/env08ws/restservices-interface/participant?cid=" + this.props.data)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({userData: responseData[0]});
            })
        console.log(this.state);
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
                <div>
                    {this.CALPERSID}
                    <h1>Welcome back, {userData.firstName}</h1>
                    <p>First Name: {userData.firstName}</p>
                    <p>Last Name: {userData.lastName}</p>
                    <p>Membership Date: {userData.membershipDate}</p>
                    <p>First Name: {userData.firstName}</p>
                </div>
            );
        }

        return (
            tempuserData
        );
    }
}
  

  
  