import React, { Component } from 'react'

/* CSS */
import "./addPetPage.scss";

class AddPetPage extends React.Component {
    /**
    * DOCU: This will save the pet data and add to pet table list. <br>
    * Triggered: AddPetPage.component <br>
    * Last Updated Date: January 3, 2022
    * @function
    * @memberOf addPetPage
    * @author Ruelito
    */
    handleButtonClick = () => {
        this.add_pet_form.reset();
    }

    render() { 
        const { submitAddPet, formInputChange } = this.props;

        return (
            <section id="add_pet">
                <form ref={ add_pet_form => this.add_pet_form = add_pet_form } onSubmit={ submitAddPet } autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="pet_name">Pet Name</label>
                        <input type="text" className="right_block" id="pet_name" onChange={ formInputChange } name="pet_name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pet_type">Pet Type</label>
                        <select id="pet_type" className="right_block" name="pet_type" onChange={ formInputChange }>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                            <option value="Dragon">Dragon</option>
                            <option value="Tiger">Tiger</option>
                            <option value="Dinosaur">Dinosaur</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pet_desc">Description</label>
                        <textarea name="pet_desc" className="right_block" id="pet_desc" onChange={ formInputChange } cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Skills</label>

                        <div className="skill_block">
                            <input type="text" onChange={ formInputChange } className="pet_skill" name="pet_skill_1" />
                            <input type="text" onChange={ formInputChange } className="pet_skill" name="pet_skill_2" />
                            <input type="text" onChange={ formInputChange } className="pet_skill" name="pet_skill_3" />
                        </div>
                    </div>
                    <div className="action_btn">
                        <button id="submit_pet_data" onClick={this.handleButtonClick}>Add Pet</button>
                    </div>
                </form>
            </section>
        );
    }
}
 
export default AddPetPage;