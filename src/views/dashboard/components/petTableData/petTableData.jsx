import React from 'react';

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
    /**
    * DOCU: This will show the list of pet table data. <br>
    * Triggered: PetTableData.component <br>
    * Last Updated Date: January 3, 2022
    * @function
    * @memberOf Dashboard
    * @author Ruelito
    */
    renderPetData() {
        let pet_data = this.props.pet_list;

        if(pet_data.length === 0) return (
            <div id="no_result">No date yet.</div>
        );

        return <ul>
            { pet_data.map(pet => 
                <li id={ `pet_id_${ pet.id }` } key={ pet.id }>
                    <span className="pet_name">{ pet.pet_name }</span>
                    <span className="pet_type">{ pet.pet_type }</span>

                    <div className="action_btn">
                        <button className="btn_details" onClick={ () => this.props.showPetDetails(pet.id) }><i className="material-icons">assignment</i> Details</button>
                        <a href="/add-new-pet" className="btn_edit" onClick={ () => this.props.isEdit(pet.id) }><i className="material-icons">edit</i> Edit</a>
                    </div>
                </li>
            )}
        </ul>
    }

    render() { 
        return (
            <section id="table_pet_data">
                <h2>This pets are looking for a good home</h2>

                { this.renderPetData() }
            </section>
        );
    }
}
 
export default PetTableData;