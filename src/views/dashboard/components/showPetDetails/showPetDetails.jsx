import React from 'react';
import { Link } from 'react-router-dom';

/* CSS */
import "./showPetDetails.scss";

class SelectedPetDetails extends React.Component {
    /**
    * DOCU: This will check if the user like the pet and adjust the element class condition. <br>
    * Triggered: ShowPetDetails.component <br>
    * Last Updated Date: December 29, 2021
    * @function
    * @memberOf ShowPetDetails
    * @author Ruelito
    */
    //  isLike = () => {
    //     return (this.props.selectedPet.is_like) ? "like_btn disabled" : "like_btn";
    // }

    render() { 
        let pet = this.props.selectedPet;

        return (
            <section id="pet_details">
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

                <div className="action_btn">
                    <span className="likes_count">{ pet.likes } Likes</span>
                    <button className="like_btn" onClick={ () => this.props.toggleLikePet(pet.id) }><i className="material-icons">{ (pet.is_like === true) ? "check" : "favorite" }</i> { (pet.is_like === true) ? "Unlike" : "Like" } { pet.pet_name }</button>
                    <Link to="/" className="adopt_btn" onClick={ () => this.props.adoptPet(pet.id) }><i className="material-icons">home</i> Adopt { pet.pet_name }</Link>
                </div>
            </section>
        );
    }
}
 
export default SelectedPetDetails;