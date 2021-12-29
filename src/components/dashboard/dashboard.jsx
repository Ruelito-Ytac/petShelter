import React from 'react';
import NavigationBar from '../navigationBar/navigationBar';
import PetBanner from '../banner/banner';
import PetTableData from '../petTableData/petTableData';
import Footer from '../footer/footer';
import AddPetModal from '../modals/addPetModal/addPetModal';
import ShowPetDetails from '../modals/showPetDetails/showPetDetails';

/* CSS */
import "./dashboard.scss";

/** 
* @class 
* @extends Component
* This component class is being called on the ../../App.js <br>
* All methods are related to showing navigation bar, banner/hero img, table pet data and footer.<br>
* Last Updated Date: December 28, 2021
*/
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
                    updateSelectedPet={ this.fetchSelectedPet() }
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

    /**
    * DOCU: This will show the modal of adding pet. <br>
    * Triggered: NavigationBar.component <br>
    * Last Updated Date: December 29, 2021
    * @function
    * @memberOf Dashboard
    * @author Ruelito
    */ 
    showAddPetModal = () =>{
        this.setState({ isPetUpdate: false, isOpenAddPetModal: true });
    }

    /**
    * DOCU: This will hide the modal of adding pet. <br>
    * Triggered: AddPetModal.component <br>
    * Last Updated Date: December 29, 2021
    * @function
    * @memberOf Dashboard
    * @author Ruelito
    */ 
    hideAddPetModal = () => {
        this.setState({ isOpenAddPetModal: false });
    }

    /**
    * DOCU: This will get the data in saving of pet details from form submitted. <br>
    * Triggered: AddPetModal.component <br>
    * Last Updated Date: December 29, 2021
    * @function
    * @memberOf Dashboard
    * @author Ruelito
    */
    formInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    /**
    * DOCU: This will save the pet data and add to pet table list. <br>
    * Triggered: AddPetModal.component <br>
    * Last Updated Date: December 29, 2021
    * @function
    * @memberOf Dashboard
    * @author Ruelito
    */
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

    /**
    * DOCU: This will pass the selected pet data. <br>
    * Triggered: PetTableData.component <br>
    * Last Updated Date: December 29, 2021
    * @function
    * @memberOf Dashboard
    * @param {object} pet_data - Requires to determine the selected pet data.
    * @author Ruelito
    */
    selectedPetDetails = (pet_data) =>  {
        this.setState({ selected_pet: this.state.pet_data.filter(pet => pet.id === pet_data), isOpenDetails: true });
    }

    /**
    * DOCU: This will hide the pet details modal. <br>
    * Triggered: ShowPetDetails.component <br>
    * Last Updated Date: December 29, 2021
    * @function
    * @memberOf Dashboard
    * @author Ruelito
    */
    hidePetDetailsModal = () => {
        this.setState({ isOpenDetails: false });
    }

    /**
    * DOCU: This will adopt the pet and remove list from pet table data. <br>
    * Triggered: ShowPetDetails.component <br>
    * Last Updated Date: December 29, 2021
    * @function
    * @memberOf Dashboard
    * @param {object} pet_id - Requires to determine the selected pet data.
    * @author Ruelito
    */
    adoptPet = (pet_id) => {
        let selected_pet = this.state.pet_data.filter(pet => pet.id !== pet_id);

        this.setState({ pet_data: selected_pet, isOpenDetails: false });
    }

    /**
    * DOCU: This will adopt the pet and remove list from pet table data. <br>
    * Triggered: ShowPetDetails.component <br>
    * Last Updated Date: December 29, 2021
    * @function
    * @memberOf Dashboard
    * @param {object} pet_id - Requires to determine the selected pet data.
    * @author Ruelito
    */
    likePet = (pet_id) => {
        let selected_pet = this.state.pet_data.filter(pet => pet.id === pet_id);
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

    /**
    * DOCU: This will adopt the pet and remove list from pet table data. <br>
    * Triggered: PetTableData.component <br>
    * Last Updated Date: December 29, 2021
    * @function
    * @memberOf Dashboard
    * @param {object} pet_id - Requires to determine the selected pet data.
    * @author Ruelito
    */
    updatePetDetails = (pet_id) => {
        let selected_pet = this.state.pet_data.filter(pet => pet.id === pet_id);
        let pet_item =[];

        for(let pet_index in selected_pet){
            let pet_data = selected_pet[pet_index];

            pet_item.push(pet_data);
        }

        this.setState({ selected_pet: pet_item, isOpenAddPetModal: true, isPetUpdate: true });
    }

    /**
    * DOCU: This will update the selected pet item. <br>
    * Triggered: AddPetModal.component <br>
    * Last Updated Date: December 29, 2021
    * @function
    * @memberOf Dashboard
    * @author Ruelito
    */
    petUpdate = (event) => {
        event.preventDefault();
        const { pet_data, selected_pet, pet_name, pet_type, pet_desc, pet_skill_1, pet_skill_2, pet_skill_3 } = this.state;

        let pet_id
        let updated_pet_data = [];
        let new_pet_data_list = [];

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

    /**
    * DOCU: This will fetch the selected pet item to update. <br>
    * Triggered: AddPetModal.component <br>
    * Last Updated Date: December 29, 2021
    * @function
    * @memberOf Dashboard
    * @author Ruelito
    */
    fetchSelectedPet () {
        let selected_data = this.state.selected_pet;
        return selected_data.find(pet => { return pet.id });
    }
}
 
export default Dashboard;