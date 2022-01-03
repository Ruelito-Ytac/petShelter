import React, { Component } from 'react';
import Dashboard from './views/dashboard/dashboard';
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