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
                { id: 1, pet_name: "Kwarog", pet_type: "Dog", pet_desc: "He loves to eat potato", is_like: true, likes: 20, pet_skill: [ "Eating", "Sleeping", "" ] },
                { id: 2, pet_name: "Kwanang", pet_type: "Dragon", pet_desc: "He loves to eat potato", is_like: false, likes: 10, pet_skill: [ "Sleeping", "", "" ] },
                { id: 3, pet_name: "Kwatong", pet_type: "Tiger", pet_desc: "He loves to eat potato", is_like: true, likes: 8, pet_skill: [ "Eating", "", "" ] }
            ],
            selected_pet: [],
            isPetUpdate: true
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
                    showPetDetails={ this.selectedPetDetails }
                    isEdit={ this.updatePetDetails } />
                <Footer />
                <AddPetModal
                    isAddPetOpenModal={ this.state.isOpenAddPetModal }
                    closeAddingPetModal={ this.hideAddPetModal }
                    newPetData={ this.newPetData }
                    submitAddPet={ this.submitAddPet }
                    formInputChange={ this.formInputChange }
                    updateSelectedPet={ this.state.selected_pet }
                    isUpdate={ this.state.isPetUpdate }
                    updatePet ={ this.petUpdate } />
                <ShowPetDetails
                    selectedPet={ this.state.selected_pet }
                    isOpenDetails={ this.state.isOpenDetails }
                    closeShowPetDetailsModal={ this.hidePetDetailsModal }
                    adoptPet={ this.adoptPet }
                    likePet={ this.likePet } />
            </div>
        );
    }

    showAddPetModal = () =>{
        this.setState({ isOpenAddPetModal: true, isPetUpdate: false });
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
        this.setState({ selected_pet: this.state.pet_data.filter(pet => pet.id == pet_data), isOpenDetails: true });
    }

    hidePetDetailsModal = () => {
        this.setState({ isOpenDetails: false });
    }

    adoptPet = (pet_id) => {
        let selected_pet = this.state.pet_data.filter(pet => pet.id !== pet_id);

        this.setState({ pet_data: selected_pet, isOpenDetails: false });
    }

    likePet = (pet_id) => {
        let selected_pet = this.state.pet_data.filter(pet => pet.id == pet_id);
        let pet_data = this.state.pet_data.filter(pet => pet.id !== pet_id);
        let new_pet_list = [];

        for(let pet_index in selected_pet){
            let pet_item = selected_pet[pet_index];

            pet_item.likes = pet_item.likes + 1;
            pet_item.is_like = true;
        }

        new_pet_list.push(...selected_pet, ...pet_data);

        this.setState({ pet_data: new_pet_list });
    }

    updatePetDetails = (pet_id) => {
        let selected_pet = this.state.pet_data.filter(pet => pet.id == pet_id);
        let pet_item =[];

        for(let pet_index in selected_pet){
            let pet_data = selected_pet[pet_index];

            pet_item.push(pet_data);
        }

        this.setState({ selected_pet: pet_item, isOpenAddPetModal: true, isPetUpdate: true });
    }

    petUpdate = (event) => {
        event.preventDefault();
        const { pet_data, selected_pet, pet_name, pet_type, pet_desc, pet_skill_1, pet_skill_2, pet_skill_3 } = this.state;

        let pet_id
        let updated_pet_data = [];
        let new_pet_data_list = [];

        console.log(pet_skill_3 === "")

        for(let pet_index in selected_pet){
            let pet_data_selected = selected_pet[pet_index];
            
            pet_id = pet_data_selected.id;
            
            updated_pet_data.push({
                id: pet_data_selected.id,
                pet_name: (pet_name) ? pet_name : pet_data_selected.pet_name,
                pet_type: (pet_type) ? pet_type : pet_data_selected.pet_type,
                pet_desc: (pet_desc) ? pet_desc : pet_data_selected.pet_desc,
                pet_skill: [(pet_skill_1 || pet_skill_1 === "") ? pet_skill_1 : pet_data_selected.pet_skill[0], (pet_skill_2 || pet_skill_2 === "") ? pet_skill_2 : pet_data_selected.pet_skill[1], (pet_skill_3 || pet_skill_3 === "") ? pet_skill_3 : pet_data_selected.pet_skill[2]],
                is_like: pet_data_selected.is_like,
                likes: pet_data_selected.likes
            });
        }

        
        let pet_data_list = pet_data.filter(pet => pet.id !== pet_id);
        new_pet_data_list.push(...updated_pet_data, ...pet_data_list);

        this.setState({ pet_data: new_pet_data_list, isOpenAddPetModal: false });
    }
}
 
export default Dashboard;