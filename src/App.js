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

      <select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>


        <PersonData calpersid="1677401305"/>
        <p>
        5600493427
6474994805
6452522440
5564535492
6632408185
4618604679
5826752269
3996179678
7302651964
1677401305
6827859055
3685610572
6581985123
3148148090
</p>


      </div>
    );
  }
}

export default App;




