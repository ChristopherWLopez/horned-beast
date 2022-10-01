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
      selectedBeast: {}
    }
  }
  handleClose = () => this.setState({ show: false });

  handleOpen = (beastname) => {
    console.log(beastname);
    const selectedBeast = data.find(currentBeast => currentBeast.title === beastname);
    this.setState({ show: true, selectedBeast });
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Main
          data={data}
          handleOpen={this.handleOpen}
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
