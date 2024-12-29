// import React from 'react'
import logo from './logo.svg';
import './App.css';


import { Button, Card } from "react-bootstrap";

const Poster = () => {
  return (
    <div>
      <Card style={{ width: '18rem' ,backgroundColor: "black", border: "1px solid white" ,color: "white" }}>
      <Card.Img variant="top" className='App-logo' src={logo} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card> 
    </div>
  )
}

export default Poster;
