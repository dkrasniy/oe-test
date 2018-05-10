import React, { Component } from 'react'; 


export default class PersonData extends Component {

  constructor(props) {
    super(props);

    this.state = {
        userData: {},
    }
}

CALPERSID = this.props.calpersid;

componentDidMount() {
  fetch("http://ws-timo2-mycalpers.calpers.ca.gov/env08ws/restservices-interface/participant?cid="+this.CALPERSID)
      .then((response) => response.json())
      .then((responseData) => {
          this.setState({userData: responseData[0]});
          console.log(this.state.userData);
      })

}




    render() {
      console.log(this.props);
      return (
     <div>
       <h1>Welcome back, {this.state.userData.firstName}</h1>
       <p>First Name: {this.state.userData.firstName}</p>
       <p>Last Name: {this.state.userData.lastName}</p>
       <p>Membership Date: {this.state.userData.membershipDate}</p>
       <p>First Name: {this.state.userData.firstName}</p>
             </div>
      );
    }
  }
  

  
  