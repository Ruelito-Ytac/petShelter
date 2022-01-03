import React from 'react';

/* Component */
import Dashboard from './views/dashboard/dashboard';

/* CSS */
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