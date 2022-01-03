import React from 'react';
import BannerIMG from "./images/pet_banner.png";

/* CSS */
import "./banner.scss";

/** 
* @class 
* @extends Component
* This component class is being called on the ../dashboard/dashboard.js <br>
* All methods are related to showing banner/hero img section.<br>
* Last Updated Date: December 28, 2021
*/
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