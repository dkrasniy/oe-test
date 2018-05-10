import React, { Component } from 'react';
import './App.css';
import PersonData from './components/PersonData';


import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';




class App extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className="App">
       
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret  color="default">
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>

        <PersonData/>


      </div>
    );
  }
}

export default App;




