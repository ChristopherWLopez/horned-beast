import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
     return (
        <>
        <Row xs={1} md={1} lg={2}className="g-2">
        {data.map(beast=> <HornedBeast
          title={beast.title}
          description={beast.description}
          imageURL={ beast.imgURL}/>)}
        </Row>

          {/* I used the video of Manuch figuring out how to do this */}

        {/* <HornedBeast 
        title={data[0].title}
        description={data[0].description}
        imageURL={data[0].imgURL}
        />
        <HornedBeast
        title={data[1].title}
        description={data[1].description}
        imageURL={data[1].imgURL}
        /> */}
        </>
    )       
  }
}            
            
export default Main;
