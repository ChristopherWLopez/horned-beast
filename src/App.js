// Your App component should render a Hender, a Footer and a Main component, each of which is defined in their own files. 

import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from '/Footer';

class App extends React.component {
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
