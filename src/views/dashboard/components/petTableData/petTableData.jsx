import React from 'react';
import { Link } from 'react-router-dom';

/* CSS */
import "./petTableData.scss";

/** 
* @class 
* @extends Component
* This component class is being called on the ../petTableData/petTableData.js <br>
* All methods are related to showing pet table data section.<br>
* Last Updated Date: December 28, 2021
*/
class PetTableData extends React.Component {

    render() { 
        let pet_data = this.props.pet_list;

        return (
            <section id="table_pet_data">
                <h2>This pets are looking for a good home</h2>

                {(pet_data.length === 0)
                    ? <div id="no_result">No date yet.</div>
                    : <ul>
                        { pet_data.map(pet => 
                            <li id={ `pet_id_${ pet.id }` } key={ pet.id }>
                                <span className="pet_name">{ pet.pet_name }</span>
                                <span className="pet_type">{ pet.pet_type }</span>

                                <div className="action_btn">
                                    <Link to={ `/pet-details/${ pet.id }` } className="btn_details" onClick={ () => this.props.showPetDetails(pet.id) }><i className="material-icons">assignment</i> Details</Link>
                                    <Link to={ `/update-pet/${ pet.id }` } className="btn_edit" onClick={ () => this.props.isEdit(pet.id) }><i className="material-icons">edit</i> Edit</Link>
                                </div>
                            </li>
                        )}
                    </ul>
                }
            </section>
        );
    }
}
 
export default PetTableData;