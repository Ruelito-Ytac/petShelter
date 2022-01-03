import React from 'react';
import { Modal } from 'react-bootstrap';

/* CSS */
import "./showPetDetails.scss";

/** 
* @class 
* @extends Component
* This component class is being called on the ../modals/showPetDetails/showPetDetails.js <br>
* All methods are related to showing of pet details.<br>
* Last Updated Date: December 28, 2021
*/
class ShowPetDetails extends React.Component {
    /**
    * DOCU: This will check if the user like the pet and adjust the element class condition. <br>
    * Triggered: ShowPetDetails.component <br>
    * Last Updated Date: December 29, 2021
    * @function
    * @memberOf ShowPetDetails
    * @author Ruelito
    */
     isLike = () => {
        return (this.props.selectedPet[0].is_like === true) ? "like_btn disabled" : "like_btn";
    }

    render() { 
        return (
            <Modal id="show_pet_details_modal" show={ this.props.isOpenDetails }>
                { this.props.selectedPet.map((pet, pet_index) => 
                    <div key={ pet_index } className="pet_details_block">
                        <Modal.Header>
                            <h2>Details about: { pet.pet_name }</h2>
                            <button className="close_btn" onClick={ this.props.closeShowPetDetailsModal }><i className="material-icons">close</i></button>
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
                                    <span>Skills</span>
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
                        <Modal.Footer>
                            <div className="action_btn">
                                <span className="likes_count">{ pet.likes } Likes</span>
                                <button className={ this.isLike() } onClick={ () => this.props.likePet(pet.id) }><i className="material-icons">{ (pet.is_like === true) ? "check" : "favorite" }</i> Like { pet.pet_name }</button>
                                <button className="adopt_btn" onClick={ () => this.props.adoptPet(pet.id) }><i className="material-icons">home</i> Adopt { pet.pet_name }</button>
                            </div>
                        </Modal.Footer>
                    </div>
                )}
            </Modal>
        );
    }
}
 
export default ShowPetDetails;