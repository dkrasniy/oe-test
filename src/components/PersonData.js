import React, { Component } from 'react'; 


export default class PersonData extends Component {

  constructor() {
    super();
    this.state = {
        userData: {},
    }
}
componentWillMount() {
  fetch("http://ws-timo2-mycalpers.calpers.ca.gov/env08ws/restservices-interface/participant?cid=2688620634")
      .then((response) => response.json())
      .then((responseData) => {
          this.setState({userData: responseData[0]});
          console.log(this.state.userData);
      })

}




    render() {
      return (
     <div>
       <h1>Welcome back, {this.state.userData.firstName}</h1>
       <p>CalPERS ID: {this.state.userData.lastName}</p>
       </div>

      );
    }
  }
  

  
  