import React from 'react';
import { withRouter } from "react-router-dom";

/* CSS */
import "./updatePetPage.scss";

class UpdatePet extends React.Component {
    /**
    * DOCU: This will redirect to dashboard. <br>
    * Triggered: UpdatePet.component <br>
    * Last Updated Date: January 4, 2022
    * @function
    * @memberOf Dashboard
    * @author Ruelito
    */
    redirectToDashboard = () => {
        setTimeout(() => {
            const { history } = this.props;
            if(history) history.push('/');
        }, 500)
    }

    render() { 
        const { updateSelectedPet, formInputChange, updatePet } = this.props;

        return (
            <form onSubmit={ updatePet }autoComplete="off">
                <div className="form-group">
                    <label htmlFor="pet_name">Pet Name</label>
                    <input type="text" className="right_block" id="pet_name" defaultValue={ updateSelectedPet.pet_name } onChange={ formInputChange } name="pet_name" />
                </div>
                <div className="form-group">
                    <label htmlFor="pet_type">Pet Type</label>
                    <select id="pet_type" className="right_block" defaultValue={ updateSelectedPet.pet_type } name="pet_type" onChange={ formInputChange }>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Dragon">Dragon</option>
                        <option value="Tiger">Tiger</option>
                        <option value="Dinosaur">Dinosaur</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="pet_desc">Description</label>
                    <textarea name="pet_desc" className="right_block" defaultValue={ updateSelectedPet.pet_desc } id="pet_desc" onChange={ formInputChange } cols="30" rows="10"></textarea>
                </div>
                <div className="form-group">
                    <label>Skills</label>

                    <div className="skill_block">
                        <input type="text" onChange={ formInputChange } defaultValue={ updateSelectedPet.pet_skill[0] } className="pet_skill" name="pet_skill_1" />
                        <input type="text" onChange={ formInputChange } defaultValue={ updateSelectedPet.pet_skill[1] } className="pet_skill" name="pet_skill_2" />
                        <input type="text" onChange={ formInputChange } defaultValue={ updateSelectedPet.pet_skill[2] } className="pet_skill" name="pet_skill_3" />
                    </div>
                </div>
                <div className="action_btn">
                    <button id="submit_pet_data" onClick={ this.redirectToDashboard }>Save Changes</button>
                </div>
            </form>
        );
    }
}
 
export default withRouter(UpdatePet);