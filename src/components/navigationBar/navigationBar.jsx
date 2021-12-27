import React, { Component } from 'react';
import "./navigationBar.scss";

class NavigationBar extends React.Component {
    render() { 
        return (
            <nav>
                <h2 className="nav_brand">PETSHELTER</h2>
                <ul>
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Events</a></li>
                    <li><button onClick={ this.props.clickAddPet } className="add_pet">Add pet to Shelter</button></li>
                </ul>
            </nav>
        );
    }
}
 
export default NavigationBar;