import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

class ShowPetDetails extends React.Component {
    render() { 
        return (
            <Modal id="show_pet_details_modal" show={ this.props.isOpenDetails }>
                { this.props.selectedPet.map((pet, pet_index) => 
                    <div key={ pet_index } className="pet_details_block">
                        <Modal.Header>
                            <h2>Details about: { pet.pet_name }</h2>
                            <button className="close_btn" onClick={ this.props.closeShowPetDetailsModal }>X</button>
                        </Modal.Header>
                        <Modal.Body>

                                    <ul>
                                        <li>
                                            <span>Pet Type</span>
                                            <span>{ pet.pet_type }</span>
                                        </li>
                                        <li>
                                            <span>Description</span>
                                            <span>{ pet.pet_desc }</span>
                                        </li>
                                        <li>
                                            <ul className="pet_skills">
                                                { pet.pet_skill.map((skill, skill_index) => 
                                                    {
                                                        if(skill !== ""){
                                                            return <li key={ skill_index += 1 }>{ skill }</li>
                                                        }
                                                    }
                                                )}
                                            </ul>
                                        </li>
                                    </ul>
                        </Modal.Body>
                    </div>
                )}
            </Modal>
        );
    }
}
 
export default ShowPetDetails;