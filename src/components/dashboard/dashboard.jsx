import React, { Component, useState } from 'react';
import NavigationBar from '../navigationBar/navigationBar';
import PetBanner from '../banner/banner';
import PetTableData from '../petTableData/petTableData';
import Footer from '../footer/footer';
import AddPetModal from '../modals/addPetModal/addPetModal';
import ShowPetDetails from '../modals/showPetDetails/showPetDetails';
import "./dashboard.scss";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpenAddPetModal: false,
            isOpenDetails: false,
            pet_data: [
                { id: 1, pet_name: "Kwarog", pet_type: "Dog", pet_desc: "He loves to eat potato", pet_skill: [ "Eating", "Sleeping", "" ] },
                { id: 2, pet_name: "Kwanang", pet_type: "Dragon", pet_desc: "He loves to eat potato", pet_skill: [ "Sleeping", "", "" ] },
                { id: 3, pet_name: "Kwatong", pet_type: "Tiger", pet_desc: "He loves to eat potato", pet_skill: [ "Eating", "", "" ] }
            ],
            selected_pet: [],
        }
    }
    render() {
        return (
            <div id="main">
                <NavigationBar
                    isOpenModal={ this.state.isOpenAddPetModal }
                    clickAddPet={ this.showAddPetModal } />
                <PetBanner />
                <PetTableData
                    pet_list={ this.state.pet_data }
                    showPetDetails={ this.selectedPetDetails } />
                <Footer />
                <AddPetModal
                    isAddPetOpenModal={ this.state.isOpenAddPetModal }
                    closeAddingPetModal={ this.hideAddPetModal }
                    newPetData={ this.newPetData }
                    submitAddPet={ this.submitAddPet }
                    formInputChange={ this.formInputChange } />
                <ShowPetDetails
                    selectedPet={ this.state.selected_pet }
                    isOpenDetails={ this.state.isOpenDetails }
                    closeShowPetDetailsModal={ this.hidePetDetailsModal } />
            </div>
        );
    }

    showAddPetModal = () =>{
        this.setState({isOpenAddPetModal: true});
    }

    hideAddPetModal = () => {
        this.setState({ isOpenAddPetModal: false });
    }

    formInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitAddPet = (event) => {
        event.preventDefault();
        const { pet_data, pet_name, pet_type, pet_desc, pet_skill_1, pet_skill_2, pet_skill_3 } = this.state;
        let data_pet = [];
        let new_pet_set_data = [];

        data_pet.push({
            id: pet_data.length + 1,
            pet_name: pet_name,
            pet_type: (pet_type) ? pet_type : "Dog",
            pet_desc: pet_desc,
            pet_skill: [ pet_skill_1, pet_skill_2, pet_skill_3 ]
        })

        for(let pet_index in data_pet){
            new_pet_set_data.push(...pet_data, data_pet[pet_index])
        }

        this.setState({ pet_data: new_pet_set_data, isOpenAddPetModal: false });
    }

    selectedPetDetails = (pet_data) =>  {
        this.setState({ selected_pet: this.state.pet_data.filter(pet => pet.id == pet_data) });
        this.setState({ isOpenDetails: true });
    }

    hidePetDetailsModal = () => {
        this.setState({ isOpenDetails: false })
    }
}
 
export default Dashboard;