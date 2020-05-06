import React from 'react';
import NewKegForm from './NewKegForm';
import KegThumbnailList from './KegThumbnailList';
import KegDetails from './KegDetails';
import EditKegForm from './EditKegForm';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [
        {
          name: "Strawberry",
          brand: "Topsy Turvy",
          price: "$.99",
          flavor: "Strawberry",
          pints: 140,
          id: "1"
        },
        {
          name: "Banana",
          brand: "Turvy Topsy",
          price: "$.99",
          flavor: "Banana",
          pints: 180,
          id: "2"
        },
        {
          name: "Kiwi",
          brand: "Brew Blasters",
          price: "$.99",
          flavor: "Kiwi",
          pints: 30,
          id: "3"
        },
      ],
      selectedKeg: null, 
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    })
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null
    });
  }

  // handleBuyingPint = (id) => {
  //   const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
  //   const pintsRemaining = selectedKeg.pints -1;
  //   const kegPurchased = {...selectedKeg, pints: pintsRemaining}; 
  //   const editedMasterKegList = this.state.masterKegList
  //     .filter(keg => keg.id !== id)
  //     .concat(kegPurchased);
  //   this.setState({
  //     masterKegList: editedMasterKegList,
  //     editing: false,
  //     selectedKeg: null
  //   });
  // }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = { this.state.selectedKeg } onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetails 
        keg = {this.state.selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg}
        onClickingEdit = {this.handleEditClick} />
      buttonText="Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegThumbnailList kegList = {this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}     onBuyingPint={this.handleBuyingPint} />
      buttonText = "Add Keg"; 
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick ={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;