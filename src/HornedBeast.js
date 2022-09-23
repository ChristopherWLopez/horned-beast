import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

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
      <Container>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>

          </Card.Body>
          <Card.Img 
          variant="top" src={this.props.imageURL} 
          alt={this.props.description} 
          title={this.props.title}
          onClick= {this.handleClick}
          />
          {/* <h2>{this.props.title}</h2> */}
          <Card.Text>🫀:{this.state.favorites}</Card.Text>
          {/* <p>{this.props.description}</p> */}
        </Card>
      </Container>
    )
  }
}

export default HornedBeast;