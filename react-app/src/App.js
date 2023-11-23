import React, {Component} from 'react';

import Navbar from './components/navbar';
import Card from './components/card';
import pelle from './images/borsa-pelle.webp';
import grigia from './images/borsa-grigia.jpg';
import marrone from './images/borsa-marrone.jpeg';
import rossa from './images/borsa-rossa.webp';
import rosa from './images/borsa-rosa.jpeg';
import zaino from './images/zaino-blu.webp';



class App extends Component {
state = {cards:[
    {id:0, name:"Borsa di pelle", price: 23.59 , picture: pelle, quantity: 0},
    {id:1, name:"Borsa grigia", price: 27.85 , picture: grigia, quantity: 0},
    {id:2, name:"Borsa rosa", price: 35.99 , picture: rosa, quantity: 0},
    {id:3, name:"Borsa rossa", price: 50.00 , picture: rossa, quantity: 0},
    {id:4, name:"Borsa marrone", price: 30.55 , picture: marrone, quantity: 0},
    {id:5, name:"Zaino blu", price: 25.75 , picture: zaino, quantity: 0}
  ]
}

  handleDelete = card =>{
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    if (cards[id].quantity != 0) {
      cards[id].quantity--;
    }else{
      cards[id].quantity = 0;
    }
    
    this.setState({cards});
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantity++;
    this.setState({cards});
  }

  render(){
    return (
      <>
        <Navbar/>
        <div className="grid text-center">
           <h1> Scegli la borsa che più ti piace</h1>
        </div>
  
        <div className="row">
          {this.state.cards.map(card => (
            <Card
              key={card.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              card={card}
               />
          ))}
        </div>
      </>    
    );
  }
  
}

export default App;
