import React, {Component} from 'react';
import './App.css';
import PersonData from './components/PersonData';
import Login from './components/views/login/Login';
import Header from './components/views/login/header/Header';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/views/dashboard/Dashboard";
import TabBar from './components/atoms/tabbar/TabBar';

class App extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeId: this.workingIds[0],
            dropdownOpen: false
        };
        this.updateContent = this.updateContent.bind(this);
    }

    workingIds = [
        5600493427,
        6474994805,
        6452522440,
        5564535492,
        6632408185,
        4618604679,
        5826752269,
        3996179678,
        7302651964,
        1677401305,
        6827859055,
        3685610572,
        6581985123,
        3148148090
    ];

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    updateContent(e) {
        this.setState({activeId: e.target.value})
    }

    _handleUserSelect = (selectedUserId) => {
        console.log('selectedUserId', selectedUserId);
        this.setState({
            'activeId': selectedUserId
        })

    }

    render() {
        let {activeId} = this.state;

        let personDataComponent = null;
        if (activeId !== undefined) {
            personDataComponent = (
                <PersonData
                    data={activeId}

                />
            );
        }

        return (
            <div className="App">
                <Router>
                    <div className="App">
                        <Header/>
                        <Switch>
                            <Route path="/" exact render={props => <Login selectedUserId={activeId}
                                                                          onSelect={this._handleUserSelect} {...props}/>} />
                            <Route path="/dashboard" render={props => <Dashboard selectedUserId={activeId} {...props}/>} />
                        </Switch>

                    </div>
                </Router>
                <TabBar />
            </div>
        );
    }
}

export default App;

