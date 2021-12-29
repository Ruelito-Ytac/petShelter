import React from 'react';

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
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="https://www.hackerhero.com/">Services</a></li>
                    <li><a href="https://www.codingdojo.com/">Events</a></li>
                    <li><button onClick={ this.props.clickAddPet } className="add_pet">Add pet to Shelter</button></li>
                </ul>
            </nav>
        );
    }
}
 
export default NavigationBar;