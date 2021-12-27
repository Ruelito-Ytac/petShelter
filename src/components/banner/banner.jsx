import React, { Component } from 'react';
import "./banner.scss";
import BannerIMG from "./images/pet_banner.png";

class PetBanner extends React.Component {
    render() { 
        return (
            <section id="banner_pet">
                <div id="banner_details">
                    <h1>Let's <span>Adopt</span> Don't <span>Shop</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque id lorem nisi.</p>
                </div>

                <img src={ BannerIMG } alt="Pet Banner" />
            </section>
        );
    }
}
 
export default PetBanner;