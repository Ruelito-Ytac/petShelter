import React from 'react';
import { Link } from 'react-router-dom';

/* CSS */
import "./navigationBar.scss";

/** 
* @class 
* @extends Component
* This component class is being called on the ../navigationBar/navigationBar.js <br>
* All methods are related to showing the navigation bar.<br>
* Last Updated Date: December 28, 2021
*/
class NavigationBar extends React.Component {
    render() { 
        return (
            <nav>
                <h2 className="nav_brand">PETSHELTER</h2>
                <ul>
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="https://www.hackerhero.com/">Services</Link></li>
                    <li><Link to="https://www.codingdojo.com/">Events</Link></li>
                    <li><Link to="/add-new-pet" className="add_pet">Add pet to Shelter</Link></li>
                </ul>
            </nav>
        );
    }
}
 
export default NavigationBar;