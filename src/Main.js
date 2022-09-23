import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Main extends React.Component {
  render() {
     return (
        <>
        <HornedBeast 
        title={data[0].title}
        description={data[0].description}
        imageURL={data[0].imgURL}
        />
        <HornedBeast
        title={data[1].title}
        description={data[1].description}
        imageURL={data[1].imgURL}
        />
        </>
    )       
  }
}            
            
export default Main;
