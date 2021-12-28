import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import "./addPetModal.scss";

class AddPetModal extends React.Component {
    render() {
        const { isUpdate, updateSelectedPet, submitAddPet, formInputChange, closeAddingPetModal, updatePet } = this.props;

        return (
            <Modal id="add_pet_modal" show={ this.isAddPetModalShow() }>
                <Modal.Header>
                    <h2>Add Pet</h2>
                    <button className="close_btn" onClick={ closeAddingPetModal }><i className="material-icons">close</i></button>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={ (updateSelectedPet && isUpdate) ? updatePet : submitAddPet }autoComplete="off">
                        <div className="form-group">
                            <label htmlFor="pet_name">Pet Name</label>
                            <input type="text" className="right_block" id="pet_name" defaultValue={ (updateSelectedPet && isUpdate) ? updateSelectedPet.pet_name : "" } onChange={ formInputChange } name="pet_name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pet_type">Pet Type</label>
                            <select id="pet_type" className="right_block" defaultValue={ (updateSelectedPet && isUpdate) ? updateSelectedPet.pet_type : "" } name="pet_type" onChange={ formInputChange }>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Dragon">Dragon</option>
                                <option value="Tiger">Tiger</option>
                                <option value="Dinosaur">Dinosaur</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pet_desc">Description</label>
                            <textarea name="pet_desc" className="right_block" defaultValue={ (updateSelectedPet && isUpdate) ? updateSelectedPet.pet_desc : "" } id="pet_desc" onChange={ formInputChange } cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Skills</label>

                            <div className="skill_block">
                                <input type="text" onChange={ formInputChange } defaultValue={ (updateSelectedPet && isUpdate) ? updateSelectedPet.pet_skill[0] : "" } className="pet_skill" name="pet_skill_1" />
                                <input type="text" onChange={ formInputChange } defaultValue={ (updateSelectedPet && isUpdate) ? updateSelectedPet.pet_skill[1] : "" } className="pet_skill" name="pet_skill_2" />
                                <input type="text" onChange={ formInputChange } defaultValue={ (updateSelectedPet && isUpdate) ? updateSelectedPet.pet_skill[2] : "" } className="pet_skill" name="pet_skill_3" />
                            </div>
                        </div>
                        <div className="action_btn">
                            <button id="submit_pet_data">{ (updateSelectedPet && isUpdate) ? "Save Changes" : "Add Pet" }</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        );
    }

    isAddPetModalShow () {
        let is_add_pet_modal_show = (this.props.isAddPetOpenModal) ? true : false;

        return is_add_pet_modal_show;
    }
}

export default AddPetModal;