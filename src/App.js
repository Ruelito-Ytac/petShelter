import React, { Component } from 'react';
import { FormText } from 'react-bootstrap';
import Dashboard from './components/dashboard/dashboard';
import "./index.scss"

class App extends React.Component {
    render() { 
        return (
            <div id="wrapper">
                <Dashboard />
            </div>
        );
    }
}
 
export default App;