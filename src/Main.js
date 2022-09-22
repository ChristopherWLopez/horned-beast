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
        imageURL={data[0].imageURL}
        />
        <HornedBeast
        title={"Unicorn Head"}
        description={"Someone wearing a very silly unicorn head mask"}
        imageURL={"https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"}
        />
        </>
    )       
  }
}            
            
export default Main;
