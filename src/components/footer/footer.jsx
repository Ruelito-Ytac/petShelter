import React from 'react';

/* CSS */
import "./footer.scss";

/** 
* @class 
* @extends Component
* This component class is being called on the ../footer/footer.js <br>
* All methods are related to showing footer section.<br>
* Last Updated Date: December 28, 2021
*/
class Footer extends React.Component {
    render() { 
        return (
            <section id="footer">
                <h4>Ⓒ2020. <span>V88Studios</span>. All Rights Reserved</h4>
            </section>
        );
    }
}
 
export default Footer;