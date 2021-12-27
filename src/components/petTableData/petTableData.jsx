import React, { Component } from 'react';
import "./petTableData.scss";

class PetTableData extends React.Component {
    render() { 
        return (
            <section id="table_pet_data">
                <h2>This pets are looking for a good home</h2>

                { this.renderPetData() }
            </section>
        );
    }

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
                        <button className="btn_details" onClick={ () => this.props.showPetDetails( pet.id ) }>Details</button>
                        <button className="btn_edit">Edit</button>
                    </div>
                </li>
            )}
        </ul>
    }
}
 
export default PetTableData;