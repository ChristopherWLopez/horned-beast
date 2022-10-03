// Your App component should render a Hender, a Footer and a Main component, each of which is defined in their own files. 

import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedBeast: {},
      gallery: data
    }
  }
  handleClose = () => this.setState({ show: false });

  handleOpen = (beastname) => {
    console.log(beastname);
    const selectedBeast = data.find(currentBeast => currentBeast.title === beastname);
    this.setState({ show: true, selectedBeast });
  }

  upDateFilteredBeastArray = (numberedOfHorns) => {
// itterate through data.json file to find all beasts whos horns property matches the number of horns we are filtering by.
    let gallery = data;
    if( numberedOfHorns){
      gallery = data.filter( beastObj => beastObj.horns === numberedOfHorns);
    }
    this.setState({gallery:gallery})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          data={this.state.gallery}
          handleOpen={this.handleOpen}
          upDateFilteredBeastArray={this.upDateFilteredBeastArray}
        />
        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
