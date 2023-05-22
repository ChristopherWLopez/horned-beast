import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    }
  }
  
  handleClick = () => {
    this.setState({favorites: this.state.favorites+1})
    }
  render() {
    return (

      <Col className='cards'>
        <Card style={{ width: '16rem' }}>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>

          <Card.Img 
          variant="top" 
          src={this.props.imageURL} 
          alt={this.props.description} 
          title={this.props.title}
          onClick= {this.handleClick}
          />
          <Card.Body>
          {/* <h2>{this.props.title}</h2> */}
          <Card.Text>🫀:{this.state.favorites}</Card.Text>
          <Button onClick={() => this.props.handleOpen(this.props.title)}>Expand</Button>
          <p>{this.props.description}</p>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default HornedBeast;