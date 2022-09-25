// Your App component should render a Hender, a Footer and a Main component, each of which is defined in their own files. 

import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {

  constructor(props) {
    super(props); 
      this.state = {
        favorite : 0

      }
    }




  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
